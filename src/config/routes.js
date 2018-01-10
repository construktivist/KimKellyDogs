import React from "react"
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Auth from "../utils/Auth"
import history from "../history"

import Home from "../main/components/Home"
import Callback from "../main/components/Callback"
import Admin from "../admin/components/Admin"
import ManageClient from "../admin/components/ManageClient"
import Nav from "../main/components/Nav"

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () =>(
<Switch>
  <Route exact path="/" component={Home} />

  <Route exact path="/admin" render={(props) =>
     (!auth.isAuthenticated() ? (
       auth.login()
     ) : (
       <Admin auth={auth} {...props} />
     )
   )}/>

   <Route path="/callback" render={(props) => {
      handleAuthentication(props);
      return <Callback {...props} />
    }}/>

</Switch>
)

const App = () =>(
  <div className="container">
    <Nav />
    <Routes />
  </div>
)


module.exports = (
  <Router history={history}>
    <App />
  </Router>
);
