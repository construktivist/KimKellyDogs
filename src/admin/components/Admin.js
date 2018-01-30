import React from 'react'
import { Route, Link } from 'react-router-dom'
import Auth from "../../utils/Auth.js"
import ManageClient from "./ManageClient"

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: this.props.match,
    };
  };


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
          <Route path={`${this.props.match.url}/manage-client`} component={ManageClient}/>
      </div>
    );
  }
}
