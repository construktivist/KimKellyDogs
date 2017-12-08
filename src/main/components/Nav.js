import React from "react"
import { NavLink } from "react-router-dom"


export default class Nav extends React.Component {

  render() {
    return (
      <div className = "container" >
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <NavLink to="/services">ONE</NavLink>
              </li>
              <li>
                <NavLink to="/about">TWO</NavLink>
              </li>
              <li>
                <NavLink to="/testimonials">THREE</NavLink>
              </li>
              <li>
                <NavLink to="/contact">THREE</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
