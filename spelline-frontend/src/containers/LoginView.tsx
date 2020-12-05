import React, {useState} from 'react';
import './LoginView.css';
import {User} from '../models/User';
import {Button, TextField} from '@material-ui/core';

type Props = {
  user: User;
  onLogin: (username: User) => void;
  errorMsg: string;
};

export const LoginView: React.FC<Props> = (props) => {
  const [email, setEmail] = useState<string>(props.user.email);
  const [password, setPassword] = useState<string>(props.user.password);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleLogin = () => {
    props.user.email = email;
    props.user.password = password;
    props.onLogin(props.user);
  };

  return (
      <div className="login-view">
        <div className='login-box'>
          <h2>Login</h2>
          <form>
            <fieldset>
              <div>
                <TextField variant="outlined" onChange={handleChange} name='email' value={email}
                           label="Email" type="text" required/>
              </div>
              <div className="join-field">
                <TextField variant="outlined" onChange={handleChange} name='password' value={password} label="Password"
                           type="password" required/>
              </div>
              {props.errorMsg !== '' ? (
                  <div className='join-error'>
                    <p>{props.errorMsg}</p>
                  </div>) : ''}
              <div>
                <Button variant="outlined" onClick={handleLogin} disabled={email === '' || password === ''}>Login</Button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
  );
};
