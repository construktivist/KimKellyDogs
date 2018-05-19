// import axios from "axios"
//
// const getAccessToken = () => {
//   const accessToken = localStorage.getItem('access_token');
//   if (!accessToken) {
//     throw new Error('No Access Token found');
//   }
//   return accessToken;
// }
//
// const headers = { "Authorization": "Bearer ${getAccessToken()}"}
// axios.get("client/all", headers).then(response => console.log(response));
//
// export function fetchClient(){
//   const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
//   axios.get("client/all", { headers })
//     // .then(response => this.setState({ message: response.data.message }))
//     // .catch(error => this.setState({ message: error.message }));
// }
