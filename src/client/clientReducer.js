export default function reducer(state={
  clients: "John",
}, action){

  switch (action.type){
      case "UPDATE_NAME_JACK":
        return {...state, clients: "Jack"}
      case "UPDATE_NAME_JIM":
          return {...state, clients: "JIM"}
      default:
        return state;
  }
}
