import React 		from "react";
import ReactDOM 	from "react-dom";
import { Router, Route, IndexRoute, hashHistory, DefaultRoute } from "react-router";

import Layout	from "./pages/Layout";
import Bees 	from "./pages/Bees";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    
    <Route path="/" component={Layout}>
      <IndexRoute component={Bees}></IndexRoute>
    </Route>
  </Router>,
app);