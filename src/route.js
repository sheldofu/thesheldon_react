import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ButtonAppBar from "./app-bar.js";
import Purple from '@material-ui/core/colors/purple';
import "./style.css";

function RouterMain() {
  return (
      <div>
        <Router>
          <div>
            <ButtonAppBar color="secondary"/>
          </div>
        </Router>
      </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default RouterMain;