import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Login from "pages/login";
import Main from "pages/main";
import Footer from "components/footer";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default Routes;
