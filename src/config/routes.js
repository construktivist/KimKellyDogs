import React from "react"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Main from "../main/components/Main"
import Admin from "../admin/components/Admin"


module.exports = (
  <Router>
    <Route path="/" component={Main} />
  </Router>
);
