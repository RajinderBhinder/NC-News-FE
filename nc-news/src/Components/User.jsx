import React, { Component } from 'react';
import { Card, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

class User extends Component {
    render() {
        
        // const {user} = this.props.location.state;

        const {user} = this.props;
        
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
}



export default User;