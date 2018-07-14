import React from "react"
import { Route, Link } from "react-router-dom"
import Auth from "../../utils/Auth"

import Home from "./Home.js"
import Service from "../../service/components/Service.js"
import About from "../../about/components/About.js"
import Testimonial from "../../testimonial/components/Testimonial.js"
import Contact from "../../contact/components/Contact.js"
import Admin from "../../Admin/components/Admin.js"
import Callback from "./Callback"

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export default class Nav extends React.Component {

  render() {
    return (
      <div className="container">
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
                  <Link to="/services">ONE</Link>
                </li>
                <li>
                  <Link to="/about">TWO</Link>
                </li>
                <li>
                  <Link to="/testimonials">THREE</Link>
                </li>
                <li>
                  <Link to="/contact">FOUR</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" component={Home}/>
          <Route path="/services" component={Service}/>
          <Route path="/about" component={About}/>
          <Route path="/testimonials" component={Testimonial}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/admin" render={(props) =>
               (!auth.isAuthenticated() ? (
                 auth.login()
               ) : (
                 <Admin auth={auth} {...props} />
               )
          )}/>
          <Route path="/callback" render={(props) => {
               handleAuthentication(props);
               return <Callback {...props} />
          }}/>
        </div>
    );
  }
}
