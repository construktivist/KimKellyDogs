export default function reducer(state={
  clients: []
}, action){
  switch (action.type){
    case "FETCH_ALL_CLIENTS":
      return {...state, clients:action.payload}
    default:
      return state;
  }
}
