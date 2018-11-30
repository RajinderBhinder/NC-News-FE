import React, { PropTypes } from 'react';
import {Link} from '@reach/router';
import ArticlesByYou from './ArticlesByYou';
import ProfileStrength from './ProfileStrength';

const LeftSection = ({articles, user_id, setUserArticles }) => {
    return (
        <section >
           <button> <Link to='/addArticle'> Add a new Article </Link> </button>
           <ArticlesByYou articles={articles} user_id= {user_id} setUserArticles={setUserArticles}/>
           <ProfileStrength />
        </section>
    );
};

LeftSection.propTypes = {
    
};

export default LeftSection;