import React from "react";
import ReactDOM from "react-dom";
import RouterMain from "./route.js";
import ReelFun from "./reel-fun.js"
import './style.css';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <RouterMain />
    <ReelFun />
  </React.Fragment>,
  document.querySelector('#app')
);