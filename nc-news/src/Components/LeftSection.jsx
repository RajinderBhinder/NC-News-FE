import React, { Component } from 'react';
import {Link} from '@reach/router';
import ArticlesByYou from './ArticlesByYou';
import ProfileStrength from './ProfileStrength';
import * as api from '../Assets/api'

const LeftSection = () => {


    
        return (
            <section >
            <button> <Link to='/addArticle'> Add a new Article </Link> </button>
            <ArticlesByYou   />
            <ProfileStrength />
            </section>
        );

     
    
};



export default LeftSection;