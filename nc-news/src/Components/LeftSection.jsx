import React, { Component } from 'react';
import {Link} from '@reach/router';
import ArticlesByYou from './ArticlesByYou';
import ProfileStrength from './ProfileStrength';
import * as api from '../Assets/api'

class LeftSection extends Component {

    state = {
        articles: []
    }

    render () {
        return (
            <section >
            <button> <Link to='/addArticle'> Add a new Article </Link> </button>
            <ArticlesByYou articles={this.state.articles} user_id= {this.props.user_id} />
            <ProfileStrength />
            </section>
        );

    }  
    
    componentDidMount() {
         api.getArticles()
         .then(articles => {
             this.setState({articles})
         })
    }
};



export default LeftSection;