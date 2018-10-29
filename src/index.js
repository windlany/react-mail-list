import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

// import * as serviceWorker from './serviceWorker';
import './static/css/index.css';
import Routes from './routes/index';

ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));

// 资源缓存
// serviceWorker.unregister();
