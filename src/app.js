import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route } from "react-router-dom"
import history from "./history"

import Nav from "./main/components/Nav.js"
import store from "./store"

ReactDOM.render(
<Router history={history}>
   <Provider store={store}>
         <div className="container">
           <Nav />
         </div>
   </Provider>
</Router>,
   document.getElementById("app")
);
