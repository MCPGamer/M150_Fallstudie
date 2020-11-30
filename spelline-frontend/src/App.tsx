import React from 'react';
import {AppBar, Button, makeStyles, Toolbar, Typography} from '@material-ui/core';
import './App.css';

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
        <div className='upload-box'>
          <form method="post" action="#" id="#">
            <div className="files">
              <input type="file" className="form-control" />
            </div>
          </form>
        </div>
        </body>
      </div>
  );
}

export default App;
