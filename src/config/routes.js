import React from "react"
import { Router, Route, browserHistory, IndexRoute } from "react-router"

import Main from "../main/components/Main"
import Admin from "../admin/components/Admin"


module.exports = (
  <Router history = {browserHistory}>
    <Route path="/" component={Main}>
      <Route path="admin" component={Admin} />
    </Route>
  </Router>
);
