import React from 'react';
import { Link } from '@reach/router';

const Sort = () => {
    
    return (
        
        <div className="dropdown">
            <button className="dropbtn">Sort By</button>
            <div className="dropdown-content">
                  <Link to='/articles/latest'> Latest </Link>
                  <Link  to='/articles/popularity' > Popularity </Link>
                  <Link  to='/articles/rating' > Rating  </Link>

               
            </div>
        </div>
    );
};


export default Sort;