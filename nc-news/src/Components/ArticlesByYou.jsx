import React, {Component} from 'react';
import Articles from './Articles';
import {Link}  from '@reach/router';
import * as api from '../Assets/api'

const ArticlesByYou = () => {

    
    return (
        <div>
            <button > <Link to='/articles/byUser'>   Articles By You </Link> </button>

        </div>
    );
};


export default ArticlesByYou;