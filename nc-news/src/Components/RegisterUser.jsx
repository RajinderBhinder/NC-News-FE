import React from 'react';
import { Link } from '@reach/router';

const RegisterUser = props => {

    
    return (
        <main className='registerUser'>
               <h1>No user found for "{`${props.location.state.username}`}" </h1>
               <h3> Please make sure the username is spelled correctly and </h3><br/>
                    <Link className='retry' to='/login'>Re-Try </Link> <br/> <br/>
                <h3>OR</h3> <br/>
                <h2>contact <a href='https://northcoders.com/contact-us'>N&#770;orthcoders</a> to Register you with a new 
                    Username </h2>
        </main>
    );
};



export default RegisterUser;