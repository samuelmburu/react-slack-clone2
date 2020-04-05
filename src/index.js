import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import { App } from './App';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import * as serviceWorker from './serviceWorker';

function Root() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
