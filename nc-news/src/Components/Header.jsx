import React from 'react';
import { Link } from '@reach/router';
import image from '../Assets/double-exposure-female-silhouette-trees-double-exposure-female-silhouette-trees-contrust-solution-man-nature-lines-111738806.jpg'



const Header = ({user}) => {
    
    return (
        <div className='header'>
            <header>
                <span className='o'>N&#770;</span>orthcoders News
                
            </header>
            <div>
                {user.avatar_url && <Link to={`/users/${user.username}`}> 
                   <img src={user.avatar_url } onError={(e)=>{ e.target.src={image}}}/> 
                </Link>}
            </div>

         </div>

    );
};

// Header.propTypes = {
    
// };

export default Header;