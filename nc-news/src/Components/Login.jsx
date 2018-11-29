import React, { Component } from 'react';
import * as api from '../Assets/api';
import { navigate } from '@reach/router';

class Login extends Component {

    state = {
        username: '',
    }
    render() {
        return (
           
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <h1>Please Enter your Username and Password</h1>
                    <label>Username</label>
                    <input type='text' onChange={this.handleChange} /> <br></br>
                    <label>Password</label>
                    <input type='password' /> <br/>
                    <button value='login'>Login</button>


                </form>
           
        );
    }

    handleSubmit= (event) => {
        event.preventDefault();
        const {username} = this.state;
        
        api.getUser(username)
            .then(user => {
               
               this.props.setUser(user);
               navigate('/')

            })

    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
}

// Login.propTypes = {

// };

export default Login;