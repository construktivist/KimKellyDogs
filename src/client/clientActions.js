import axios from "axios"

export function fetchAllClients(){
  return{
    type: "FETCH_ALL_CLIENTS",
    payload: axios.get("/client/all")
  }
}
