import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route } from "react-router-dom"
import history from "./history"

import Nav from "./main/components/Nav.js"
import store from "./store"

ReactDOM.render(
   <Provider store={store}>
      <Router history={history}>
         <div className="container">
           <Route path="/" component={Nav}/>
         </div>
      </Router>
   </Provider>,
   document.getElementById("app")
);
