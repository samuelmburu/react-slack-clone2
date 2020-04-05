import React, { useState } from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { firebase } from '../../firebase';

function Register(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        debugger;

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(createdUser => {
                console.log(createdUser);
            })
            .catch(err => {
                console.error(err);
            });
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
                        <Form.Input fluid name="username" value={username} icon="user" iconPosition="left" placeholder="Username" onChange={(event) => setUsername(event.target.value)} type="text" />
                        <Form.Input fluid name="email" value={email} icon="mail" iconPosition="left" placeholder="Email Address" onChange={(event) => setEmail(event.target.value)} type="email" />
                        <Form.Input fluid name="password" value={password} icon="lock" iconPosition="left" placeholder="Password" onChange={(event) => setPassword(event.target.value)} type="password" />
                        <Form.Input fluid name="passwordConfirmation" value={passwordConfirmation} icon="repeat" iconPosition="left" placeholder="Password" onChange={(event) => setPasswordConfirmation(event.target.value)} type="password" />

                        <Button color="orange" fluid size="large" onClick={handleSubmit}>Submit</Button>
                    </Segment>
                    <Message>Already a user? <Link to="/login">Login</Link></Message>
                </Form>
            </Grid.Column>
        </Grid>
    );
}

export { Register };