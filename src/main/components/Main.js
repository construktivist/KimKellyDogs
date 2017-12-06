import React from "react"
import { Link } from "react-router-dom"
import Nav from "./nav.js"

export default class Main extends React.Component {

  render() {
    return (
      <div className="container">
      <Nav />
        {/* <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Main</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/admin">Admin</Link> :  ''
            }

          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
           }
          </li>
        </ul>
      </nav> */}
      <h2>Main</h2>
    </div>

    );
  }
}
