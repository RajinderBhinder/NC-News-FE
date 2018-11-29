import React, { Component } from 'react';

class User extends Component {
    render() {
        
        const {user, articleuser} = this.props;
        console.log(user, articleuser)
        return (
            <div>
                  {user && <img src={`${user.avatar_url}`} />} 

                  {articleuser && <img src={`${articleuser.avatar_url}`} /> }<br/>
                   <label>Username:</label>
                 { user && <h2>{user.username }</h2>}  
                 { articleuser && <h2>{articleuser.username }</h2>}  
                 <br/>
                   <label>Name</label>

                 { user && <h2>{user.name }</h2>}  
                 { articleuser && <h2>{articleuser.name }</h2>}  
             </div> 
        );
    }
}



export default User;