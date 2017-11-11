import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import routes from "./config/routes"
import store from "./store"

import Main from "./main/components/Main"

// ReactDOM.render(
//   <Provider store={store}>
//     {routes}
//   </Provider>,
//   document.getElementById("app")
// );

ReactDOM.render(<Main />, document.getElementById('app'))
