import React from 'react'
import { Route, Link } from 'react-router-dom'
import axios from "axios"
import Auth from "../../utils/Auth.js"
import ManageClient from "../../client/components/ManageClient"

export default class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      match: this.props.match,
      clients: [],
    };

    this.getClients = this.getClients.bind(this)
  };

  getClients() {
    const { getAccessToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
    axios.get("client/all", { headers })
      .then(response => console.log(response))
      .catch(error => this.setState({ clients: error.clients }));
  }


  render() {

    return (
      <div>
        <h2>Admin</h2>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to={`${this.props.match.url}/manage-client`}>Manage Client</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Manage Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Add a Client</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Add a Testimonial</a>
            </li>
          </ul>

          <button type="button" className="btn btn-primary" onClick={this.getClients}>Clients</button>

          <p>{console.log(this.state.clients)}</p>

          <Route path={`${this.props.match.url}/manage-client`} component={ManageClient}/>
      </div>
    );
  }
}
