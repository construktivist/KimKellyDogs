export default function reducer(state={
  clients: [],
  fetching: false,
  fetched: false,
  error: null,
}, action){
  switch (action.type){
    case "FETCH_ALL_CLIENTS":
      return {
        ...state,
        fetching: true
      }
    case "FETCH_ALL_CLIENTS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        clients: action.payload
      }
    case "FETCH_ALL_CLIENTS_REJECTED":
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}
