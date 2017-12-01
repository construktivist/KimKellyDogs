import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from "../main/components/Main"
import Admin from "../admin/components/Admin"


const App = () =>(
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/admin" component={Admin} />
  </Switch>
)


module.exports = (
  <Router>
    <App />
  </Router>
);
