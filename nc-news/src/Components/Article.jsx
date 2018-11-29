import React, { Component } from 'react';
import * as api from '../Assets/api';
import Comments from './Comments';
import AddComment from './AddComment';

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
                {this.props.user._id && <AddComment user={this.props.user} article_id={this.state.article._id} /> }
                <Comments id={this.props.id} />

            </div>
                
        );
    }

    componentDidMount() {
        
         api.getArticleById(this.props.id)
            .then((article) => {
                this.setState({article})
            })
            .catch(console.log)
    }
}

// Article.propTypes = {

// };

export default Article;