import React from 'react';
import {Link} from '@reach/router';


const LeftSection = () => {
        return (
            <section >
            <button> <Link to='/addArticle'> Add a new Article </Link> </button>
            <button> <Link to='/articles_draft'> Draft </Link> </button>
            <button > <Link to='/articles/byUser'>   Articles By You </Link> </button>
            <button><Link to='/user/profile_strength'> Profile Strength </Link></button>
            
            
            </section>
        );

};



export default LeftSection;