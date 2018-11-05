import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from '../components/home/Home';
import Register from '../components/home/Register';
import Login from '../containers/LoginCon';

import List from '../containers/ListCon';
import Concats from '../containers/ConcatsCon';
import Add from '../containers/AddCon';
import Set from '../containers/SetCon';

const Routes = (props)=> (
  <Router history={props.history}>

    <Route path='/' component={Home}>
      <IndexRoute component={Register} />
      <Route path='login' component={Login} />
    </Route>

    <Route path='/list' component={List}>
      <IndexRoute component={Concats} />
      <Route path='/add' component={Add}/>
      <Route path='/set' component={Set}/>
    </Route>

  </Router>
);

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
