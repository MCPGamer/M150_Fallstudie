import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {cyan, indigo} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: indigo,
    secondary: cyan,
  }
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    document.getElementById('root')
);
