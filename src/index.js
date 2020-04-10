import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Router, Switch, Route, withRouter } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import firebase from './firebase';
import { App } from './App';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import * as serviceWorker from './serviceWorker';

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

ReactDOM.render(<BrowserRouter><RootWithAuthRouting /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
