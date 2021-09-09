import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends Component {

    state = {email : "" , password : ""};

    validateForm = ()=> {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

    handleSubmit = (e) =>{
        e.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email:e.target.value})}
                    />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={this.state.password}
                        onChange={(e) => this.setState({password:e.target.value})}
                    />
                    </Form.Group>
                    <Button block size = "lg" class = "reg-btn" type = "submit" disabled = {!this.validateForm()}>
                        Register
                        </Button>
                    <Button block size = "lg" class = "login-btn" type="submit" disabled={!this.validateForm()}>
                    Login
                    </Button>
                </Form>
            </div>
        )
    }
};

export default Login


