import React from "react";
import ReactDOM from "react-dom";
import RouterMain from "./route.js";
import './style.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9d426b',
    },
    secondary: {
      main: '#FFFFFF'
    } 
  }
});

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <RouterMain />
    </MuiThemeProvider>
  </React.Fragment>,
  document.querySelector('#app')
);