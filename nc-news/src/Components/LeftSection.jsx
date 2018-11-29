import React, { PropTypes } from 'react';
import {Link} from '@reach/router';

const LeftSection = props => {
    return (
        <section >
           <button> <Link to='/addArticle'> Add a new Article </Link> </button>
           <button>Articles By You</button>
        </section>
    );
};

LeftSection.propTypes = {
    
};

export default LeftSection;