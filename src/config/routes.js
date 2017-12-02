import React from "react"
import { Router, Route, Switch } from 'react-router-dom'
import Auth from "../utils/Auth"
import history from "../history"

import Main from "../main/components/Main"
import Callback from "../main/components/Callback"
import Admin from "../admin/components/Admin"

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () =>(
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/admin" component={Admin} />
    <Route path="/callback" render={(props) => {
      handleAuthentication(props);
      return <Callback {...props} />
    }}/>
  </Switch>
)


module.exports = (
  <Router history={history}>
    <App />
  </Router>
);
