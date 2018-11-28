import React, { PropTypes } from 'react';
import { Link } from '@reach/router';

const Sort = () => {
    const sortArr = ['Latest', 'Popularity', 'Rating']
    return (
        
        <div className="dropdown">
            <button className="dropbtn">Sort By</button>
            <div className="dropdown-content">
                {sortArr.map((sort, index) => 
                    <div key={index} >
                        {sort}
                    </div> )} 
            </div>
        </div>
    );
};

Sort.propTypes = {
    
};

export default Sort;