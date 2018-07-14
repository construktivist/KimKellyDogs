import React from 'react'
import { connect } from "react-redux"

import { fetchAllClients } from "../clientActions"

@connect((store) => {
  return{
    clients: store.client.clients,
    clientFetching: store.client.fetching,
    clientFetched: store.client.fetched,
    clientError: store.client.error,
  }
})

export default class Client extends React.Component {


  componentWillMount() {
    this.props.dispatch(fetchAllClients())
  }

  render() {
  console.log(this.props.clients);
    return (
      <div>
        <p>Clients</p>
        <p>{JSON.stringify(this.props.clients)}</p>
      </div>
    );
  }
}
