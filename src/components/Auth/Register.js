import React, { useState } from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { firebase } from '../../firebase';

const STRINGS = {
    FORM_EMPTY: 'Please fill out form completely',
    PASSWORD_INVALID: 'There was an error with your password',
}

function Register(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    // let errors = [];

    function isPasswordValid() {
        if (password.length < 6 || passwordConfirmation.length < 6) {
            return false;
        } else if (password !== passwordConfirmation) {
            return false;
        } else {
            return true;
        }
    }

    function handleFieldError(fieldName) {
        return errors.some(error => error.message.toLowerCase().includes(fieldName)) ? 'error' : '';
    }

    function isFormEmpty() {
        return !(username && email && password && passwordConfirmation);
    }

    function isFormValid() {
        // clear out errors from previous validation check
        // setErrors([]);
        let error = {};
        let currentErrors = []

        if (isFormEmpty()) {
            // throw error
            error = { message: STRINGS.FORM_EMPTY };
            setErrors([...currentErrors, error]);
            console.error('please fill out the form');

            return false;
        } else if (!isPasswordValid()) {
            // throw error
            error = { message: STRINGS.PASSWORD_INVALID };
            setErrors([...currentErrors, error]);
            console.error('password and passwordConfirmation do not match');

            return false;
        } else {
            return true;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        // set loading true
        setLoading(true)

        if (isFormValid()) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(createdUser => {
                    setLoading(false);

                    // clear errors
                    setErrors([]);
                })
                .catch(err => {
                    setLoading(false);
                    setErrors([err]);
                });
        } else {
            setLoading(false);
        }
    }

    return (
        <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" icon color="orange" textAlign="center">
                    <Icon name="puzzle piece" color="orange" />
                   Register for DevChat
               </Header>
                <Form size="large">
                    <Segment stacked>
                        <Form.Input required className={handleFieldError('username')} fluid name="username" value={username} icon="user" iconPosition="left" placeholder="Username" onChange={(event) => setUsername(event.target.value)} type="text" />
                        <Form.Input required className={handleFieldError('email')} fluid name="email" value={email} icon="mail" iconPosition="left" placeholder="Email Address" onChange={(event) => setEmail(event.target.value)} type="email" />
                        <Form.Input required className={handleFieldError('password')} fluid name="password" value={password} icon="lock" iconPosition="left" placeholder="Password" onChange={(event) => setPassword(event.target.value)} type="password" />
                        <Form.Input required className={handleFieldError('password')} fluid name="passwordConfirmation" value={passwordConfirmation} icon="repeat" iconPosition="left" placeholder="Password" onChange={(event) => setPasswordConfirmation(event.target.value)} type="password" />

                        <Button color="orange" disabled={loading} fluid size="large" onClick={handleSubmit}>{loading ? <Icon loading name="spinner" /> : "Submit"}</Button>
                    </Segment>
                    <Message>Already a user? <Link to="/login">Login</Link></Message>
                </Form>
                {errors.length > 0 && (
                    <Message error>
                        <h3>Error</h3>
                        {errors.map((error, i) => (<p key={i}>{error.message}</p>))}
                    </Message>
                )}
            </Grid.Column>
        </Grid>
    );
}

export { Register };