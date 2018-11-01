import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from '../components/home/Home';
import Register from '../components/home/Register';
import Login from '../containers/LoginCon';

import List from '../components/list/List';
import Concats from '../components/list/Concats';

const Routes = (props)=> (
  <Router history={props.history}>

    <Route path='/' component={Home}>
      <IndexRoute component={Register} />
      <Route path='login' component={Login} />
    </Route>

    <Route path='/list' component={List}>
      <IndexRoute component={Concats} />
    </Route>

  </Router>
);

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
