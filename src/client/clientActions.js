import axios from "axios"
import Auth from "../utils/Auth"

const auth = new Auth();

export function fetchAllClients(){
  return function(dispatch){
    const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`}
    axios.get("client/all", { headers })
      .then((response) => {
        console.log(response)
        dispatch({type: "FETCH_ALL_CLIENTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_ALL_CLIENTS_REJECTED", payload: err})
      })
  }
}
