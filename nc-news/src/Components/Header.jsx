import React from 'react';



const Header = ({user}) => {
    
    return (
        <div className='header'>
            <header>
                <span className='o'>N&#770;</span>orthcoders News
                
            </header>
            <div>
                {user.avatar_url && <img src={user.avatar_url } /> }
            </div>

         </div>

    );
};

// Header.propTypes = {
    
// };

export default Header;