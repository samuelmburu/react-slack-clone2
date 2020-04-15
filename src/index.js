import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Router, Switch, Route, withRouter } from 'react-router-dom';

import {createStore, compose } from 'redux';
import {Provider} from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

import firebase from './firebase';
import { App } from './App';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import * as serviceWorker from './serviceWorker';

let composeEnhancers = compose;

// If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  /* eslint-disable no-underscore-dangle */
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

  // NOTE: Uncomment the code below to restore support for Redux Saga
  // Dev Tools once it supports redux-saga version 1.x.x
  // if (window.__SAGA_MONITOR_EXTENSION__)
  //   reduxSagaMonitorOptions = {
  //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
  //   };
  /* eslint-enable */
}

const store = createStore(() => {}, {}, composeEnhancers());

function Root({history}) {
  useEffect(()=> {
    firebase.auth().onAuthStateChanged(user=> {
      if (user) {
        history.push('/');
      }
    });
  }, [history]);

  return (
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </React.StrictMode>
  )
}

const RootWithAuthRouting = withRouter(Root);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RootWithAuthRouting />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
