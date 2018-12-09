import React, { Component } from 'react';
import { Link } from '@reach/router';

class  LogOut extends Component {

    render () {

        return (
            <main> 
                <br/> <br/>
                {localStorage.getItem('body') && 
                    <h2>You have an article saved in Draft <br/>
                        Logging Out will delete the Draft
                    </h2>}

                    <br/> <br/>

                    <h2>Please click <button className='logout-button' onClick={this.handleLogoutClick}>here</button>to confirm you want to Log Out <br/>
                    <br/> <br/>
                        Or click <Link to='/'> Home </Link> to continue browsing 
                    </h2> <br/>

                     {!localStorage.getItem('user') && 
                    <h2 className='logged-out'>Successfully logged out!
                        
                    </h2>}
            </main>
        );

    }

    handleLogoutClick = () => {
        this.props.setUser({});
        localStorage.clear();
    }
};


export default LogOut;