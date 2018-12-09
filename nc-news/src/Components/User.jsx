import React, { Component } from 'react';
import { Card, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import * as api from '../Assets/api'

class User extends Component {

    state = {
        user: {}
    }
    render() {
        
        // const {user} = this.props.location.state;

        const {user} = this.state;
        
        return (
            

            <main className='userCard'>
            <Card >
            <CardBody>
                <CardTitle className='card-title'>Username: {user.username }</CardTitle>
                <CardSubtitle>Name: {user.name }</CardSubtitle>
            </CardBody>
            <img width="70%" src={`${user.avatar_url}`} alt="User image" />
            
            </Card>
            </main>
        );
    }

    componentDidMount() {
        api.getUser(this.props.username)
        .then((user) => {
            this.setState({user})
        })
    }
}



export default User;