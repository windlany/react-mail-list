import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';

const Routes = (props)=> (
  <Router history={props.history}>

    <Route path='/' component={Home}>
      <IndexRoute component={Register} />
      <Route path='login' component={Login} />
    </Route>

  </Router>
);

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
