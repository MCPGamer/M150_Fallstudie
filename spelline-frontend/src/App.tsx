import React from 'react';
import {AppBar, Button, makeStyles, Toolbar, Typography} from '@material-ui/core';
import './App.css';
import {UploadView} from './containers/UploadView';

function App() {
  return (
      <div className="app">
        <header className="app-header">
          <AppBar position="static" >
            <Toolbar>
              <Typography variant="h6" className="title">
                Spelline
              </Typography>
              <Button color="inherit"> Login</Button>
            </Toolbar>
          </AppBar>
        </header>
        <body>
          <UploadView />
        </body>
      </div>
  );
}

export default App;
