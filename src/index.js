import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './App';

import store from './redux/store';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
