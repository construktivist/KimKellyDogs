import { fetchClient } from "../utils/helpers.js"

export function fetchAllClients(){
  return{
    type: "FETCH_ALL_CLIENTS",
    payload: fetchClient()
  }
}
