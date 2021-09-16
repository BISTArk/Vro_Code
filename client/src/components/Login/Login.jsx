import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Login extends Component {

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
                    <FormGroup size="lg" controlId="email">
                    <Label>Email</Label>
                    <Input
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email:e.target.value})}
                    />
                    </FormGroup>
                    <FormGroup size="lg" controlId="password">
                    <Label>Password</Label>
                    <Input
                        type="password"
                        value={this.state.password}
                        onChange={(e) => this.setState({password:e.target.value})}
                    />
                    </FormGroup>
                    <Button block size = "lg" className = "reg-btn" type = "submit" disabled = {!this.validateForm()}>
                        Register
                        </Button>
                    <Button block size = "lg" className = "login-btn" type="submit" disabled={!this.validateForm()}>
                    Login
                    </Button>
                </Form>
            </div>
        )
    }
};

export default Login


