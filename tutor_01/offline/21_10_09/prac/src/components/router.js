import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={<div />} />
        </Switch>
      </Router>
    );
  }
}
