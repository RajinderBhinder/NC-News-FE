import React, { Component } from 'react';
import { Card, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

class User extends Component {
    render() {
        
        const {user, articleuser} = this.props;
        console.log(user, articleuser)
        return (
            

            <div>
            <Card>
            <CardBody>
                <CardTitle>{user.username }</CardTitle>
                <CardSubtitle>{user.name }</CardSubtitle>
            </CardBody>
            <img width="70%" src={`${user.avatar_url}`} alt="User image" />
            
            </Card>
            </div>
        );
    }
}



export default User;