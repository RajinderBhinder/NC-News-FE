import React, { Component } from 'react';
import * as api from '../Assets/api';
import Comments from './Comments';

class Article extends Component {
    state = {
        article: {}
    }


    render() {
        const {article} = this.state;
        
        return (
            <div>
                <article className='article' >
                    <h1>{article.title}</h1>
                    <p >{article.body}</p>
                </article>
                <div className='comment-like'> Comments</div>
                <Comments id={this.props.article_id} user={this.props.user} />

            </div>
                
        );
    }

    componentDidMount() {
        
         api.getArticleById(this.props.article_id)
            .then((article) => {
                this.setState({article})
            })
            .catch(console.log)
    }
}

// Article.propTypes = {

// };

export default Article;