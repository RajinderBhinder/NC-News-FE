import React, { Component } from 'react';
import * as api from '../Assets/api';
import { navigate } from '@reach/router';
import { Alert } from 'reactstrap';

class Login extends Component {

    state = {
        username: '',
        alert: false,
       
    }
    render() {
       
        return (  
            <>

                    
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <h1>Please Enter your Username and Password</h1>
                    <label>Username</label>
                    <input type='text' onChange={this.handleChange} /> <br></br>
                    <label>Password</label>
                    <input type='password' /> <br/>
                    <button value='login'>Login</button> <br/> 

                    { this.state.alert &&
                            <Alert class="login-alert">
                                    Please enter a Username !
                            </Alert>
                    }

                </form>



                </>
           
        );
    }

    handleSubmit= (event) => {
        event.preventDefault();
        const {username} = this.state; 

        if (username.length === 0) {

            this.setState({
                alert: true
            })
        } else {
        
        api.getUser(username)
            .then(user => {

                this.setState({
                    alert: false
                })
               
               this.props.setUser(user);
               navigate('/')

            })
            .catch((err )=> {
                this.setState({
                    alert: false
                })
                navigate('/register', {state: {username: this.state.username}})
             })
        }
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