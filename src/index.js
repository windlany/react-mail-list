import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory } from 'react-router';
import Routes from './routes/index';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// import * as serviceWorker from './serviceWorker';
import './static/css/index.css';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);

// 资源缓存
// serviceWorker.unregister();
