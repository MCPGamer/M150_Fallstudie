import React, {useState} from 'react';
import {AppBar, Button, makeStyles, Toolbar, Typography} from '@material-ui/core';
import './App.css';
import {UploadView} from './containers/UploadView';
import {defaultUser, User, Roles} from './models/User';
import {LoginView} from './containers/LoginView';
import * as crypto from 'crypto';

export const md5 = (contents: string) => crypto.createHash('md5').update(contents).digest('hex');

function App() {
  const [user, setUser] = useState<User>(defaultUser);
  const [loginError, setLoginError] = useState<string>('');

  let backendUrl: String = 'localhost:8080';

  const handleLogin = (user: User) => {
    user.password = md5(user.password);

    fetch(`http://${backendUrl}/login/`, {method: 'POST', body: JSON.stringify(user), headers: {"content-type": "application/json"} }).then(response => response.json())
        .then(data => {
          if (data.error) {
            setLoginError(data.error);
          } else {
            setLoginError('');
            setUser(data);
          }
        });
  };

  const handleLogout = () => {
    setUser(defaultUser);
  };

  return (
      <div className="app">
        <header className="app-header">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className="title">
                Spelline
              </Typography>
              {user !== defaultUser ? <Button color="inherit" onClick={handleLogout}> Logout</Button> : ''}
            </Toolbar>
          </AppBar>
        </header>
        <body>
        {user === defaultUser ? <LoginView user={user} errorMsg={loginError} onLogin={handleLogin}/> : ''}
        {user !== defaultUser && (user.role === Roles.ADMIN || user.role === Roles.USER) ? <UploadView user={user}/> : ''}
        {user.role === Roles.ADMIN || user.role === Roles.EXPERT ? '' : ''}
        </body>
      </div>
  );
}

export default App;
