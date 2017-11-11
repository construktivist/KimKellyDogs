import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Main from "../main/components/Main"
import Admin from "../admin/components/Admin"


module.exports = (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/admin" component={Admin} />
    </div>
  </Router>
);
