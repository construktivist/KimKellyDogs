import { applyMiddleware, createStore } from "redux"

import { fetchAllClients } from "./client/clientActions.js"
import { getAccessToken } from "./utils/Auth.js";

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, createLogger())

//export default createStore(reducer, middleware)

const store = createStore(reducer, middleware)

// store.subscribe(() => {
//   console.log("Store updated: ", store.getState())
// })

// store.dispatch(fetchAllClients())

// import { createStore } from "redux";
//
// const reducer = function(state, action) {
//   if(action.type === "INC"){
//     state = state+action.number;
//   }
//   if(action.type === "DEC"){
//     state = state-action.number
//   }
//   return state;
// }
//
// const store = createStore(reducer, 0)
//
// store.subscribe(() => {
//   console.log("Store has changed", store.getState())
// })
//
// store.dispatch({type: "INC", number: 1})
// store.dispatch({type: "INC", number: 10})
// store.dispatch({type: "INC", number: 100})
// store.dispatch({type: "DEC", number: -10})
