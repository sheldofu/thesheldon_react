import React from "react";
import ReactDOM from "react-dom";
import printMe from './print.js';
import Button from '@material-ui/core/Button';

// function component() {

//   var element = document.createElement('div');
//   var btn = document.createElement('button');

//   element.innerHTML = "YO!"
//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));