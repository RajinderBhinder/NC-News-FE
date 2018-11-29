import React from 'react';
import { Link } from '@reach/router';



const Header = ({user}) => {
    
    return (
        <div className='header'>
            <header>
                <span className='o'>N&#770;</span>orthcoders News
                
            </header>
            <div>
                {user.avatar_url && <Link to={`/users/${user.username}`}> <img src={user.avatar_url } /> </Link>}
            </div>

         </div>

    );
};

// Header.propTypes = {
    
// };

export default Header;