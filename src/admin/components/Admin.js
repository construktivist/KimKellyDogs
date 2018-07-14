import React from 'react'
import { Route, Link } from 'react-router-dom'
import axios from "axios"
import Client from "../../client/components/Client"
import { connect } from "react-redux"
import { fetchAllClients } from "../../client/clientActions"

@connect((store) => {
  return{
    clients: store.client.clients,
    clientFetching: store.client.fetching,
    clientFetched: store.client.fetched,
    clientError: store.client.error,
  }
})

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match,
    };

  };

  componentWillMount() {
    this.props.dispatch(fetchAllClients())
  }


  render() {

    return (
      <div>
        <h2>Admin</h2>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to={`${this.props.match.url}/clients`}>Clients</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Add a Client</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Add a Testimonial</a>
            </li>
          </ul>

          <Client />

          <Route exact path={`${this.props.match.url}/clients`} component={Client}/>
      </div>
    );
  }
}
