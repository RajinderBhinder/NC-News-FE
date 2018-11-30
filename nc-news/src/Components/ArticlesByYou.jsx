import React, {Component} from 'react';
import Articles from './Articles';
import {Link}  from '@reach/router'

class ArticlesByYou extends Component {

    state = {
        userArticles: this.props.articles.reduce((acc,article) => {
            if(article.created_by._id === this.props.user_id ) 
               acc.push(article)
               return acc;
        },[])
    }
    render () {
    
    return (
        <div>
            <button onClick={this.handleClick}> <Link to='/user/articles'>   Articles By You </Link> </button>

        </div>
    );
};

handleClick = (event) => {
    event.preventDefault();
    this.props.setUserArticles(this.state.userArticles)

}
}

export default ArticlesByYou;