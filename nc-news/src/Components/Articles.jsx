import React, { Component, Fragment } from 'react';
import {Link} from '@reach/router';
import * as api from '../Assets/api';

class Article extends Component {
    state = {
        articles: []
    }
    
    render() {
        
        return (

            <div>
                {this.state.articles.map((article) => 
                   <article key={article._id} className='article'>
                       <h1> <Link  to={`/article/${article._id}`}>
                            {article.title}
                        </Link> </h1>
                        <div>
                            {article.body}

                        </div>
                        <h4 className='author'>
                            <Link to={`/${article.created_by.username}`} >
                              - {article.created_by.username}
                            </Link>
                        </h4>
                        <div className='bar'>
                            <label>{article.comment_count}</label>
                            <Link to='/article'>
                                Comments
                            </Link >
                            <label >{article.votes}</label>
                            <Link to='/article'>
                                Votes
                            </Link>

                        </div>

                        <div className='comment-like'>
                            <Link to='/article/'>
                                Comment
                            </Link>
                            
                            <span>
                                Like
                            </span>
                        </div>

                    </article>
                )} 
            </div>
                
        );


    }

    componentDidMount() {
        if (!this.state.articles.length )
         api.getArticles()
          .then((articles) => {
     
          this.setState({articles})
        })
        .catch(console.log) //add error handler
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.topic !== this.props.topic)
            api.getArticles(this.props.topic)
                .then((articles) => {
        
                   this.setState({articles})
                })
                .catch(console.log) //add error handler
    }
    
}

// Article.propTypes = {

// };

export default Article;