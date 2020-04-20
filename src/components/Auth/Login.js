import React, { useState, useRef } from 'react';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import firebase from '../../firebase';

const STRINGS = {
  FORM_EMPTY: 'Please fill out form completely',
  PASSWORD_INVALID: 'There was an error with your password',
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleFieldError(fieldName) {
    return errors.some(error => error.message.toLowerCase().includes(fieldName))
      ? 'error'
      : '';
  }

  function isFormValid() {
    return email && password;
  }

  function handleSubmit(event) {
    event.preventDefault();

    // set loading true
    setLoading(true);

    if (isFormValid()) {
      // stuff
      console.log('form is valid Yo!!!');

      // do sign in validation here....
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(`user signed in --${user}`);
        })
        .catch(e => {
          console.error(`there was an error: ${e}`);
        });
    }
  }

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" icon color="violet" textAlign="center">
          <Icon name="puzzle piece" color="violet" />
          Login to DevChat
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              required
              className={handleFieldError('email')}
              fluid
              name="email"
              value={email}
              icon="mail"
              iconPosition="left"
              placeholder="Email Address"
              onChange={event => setEmail(event.target.value)}
              type="email"
            />
            <Form.Input
              required
              className={handleFieldError('password')}
              fluid
              name="password"
              value={password}
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              onChange={event => setPassword(event.target.value)}
              type="password"
            />

            <Button
              color="violet"
              disabled={loading}
              fluid
              size="large"
              onClick={handleSubmit}
            >
              {loading ? <Icon loading name="spinner" /> : 'Submit'}
            </Button>
          </Segment>
          <Message>
            Need an account? <Link to="/register">Register</Link>
          </Message>
        </Form>
        {errors.length > 0 && (
          <Message error>
            <h3>Error</h3>
            {errors.map((error, i) => (
              <p key={i}>{error.message}</p>
            ))}
          </Message>
        )}
      </Grid.Column>
    </Grid>
  );
}

export { Login };
