import React, { Component } from 'react';
import * as api from '../Assets/api';
import Comments from './Comments';

import {Link} from '@reach/router';

class Article extends Component {
    state = {
        article: {},
        modifier: 0,
        voted: false,
    }


    render() {
        const article = this.props.article || this.state.article;
        (console.log(article, 'hhhh'))
        
        return (
            <div>
                <article className='article' >
                    <h1> <Link to={`/article/${article._id}`}   > 
                    {article.title} </Link> </h1>
                    <p >{article.body}</p>
                   {!this.props.article_id &&   <h3>{article.created_by.name }</h3> }
                   { !this.props.article_id && <h2>{article.created_at.slice(0, 10)}</h2> }
                    
                </article>


                <div className = 'article-bar'>
                {this.props.article && <label> 
                        <span>&#8882; </span> 
                           {article.comment_count} 
                        <Link className='goto-comments' to={`/article/${article._id}`} > Comments </Link>
                        <span>&#8883; </span>
                        {/* &#8942; &#8942; &#8942; */}
                </label> }

                   <label> <span>&#8882; </span> { article.votes =  article.votes + this.state.modifier  }  Votes <span>&#8883; </span>  </label>
                    
                    <button className={this.state.voted? 'voted' : 'vote'} value={this.state.voted? 'down':'up'} 
                        onClick={(event) => this.handleLikeClick(event, article._id) } > Like
                    </button>
                </div>    

                
        {!this.props.article  &&   <Comments id={this.props.article_id} user={this.props.user} /> }

            </div>
                
        );
    }

    componentDidMount() {
        if (!this.props.article) {
        
            api.getArticleById(this.props.article_id)
                .then((article) => {
                    this.setState({article})
                })
                .catch(console.log)
        }   
    }
    

    handleLikeClick = (event, id) => {
        event.preventDefault();
        const direction = event.target.value;
        api.vote('articles', id, direction)
          .then(() => {
            
            this.setState({
                modifier: direction === 'up'? +1 : - 1,
                voted: this.state.voted? false : true,
            }) 
            
    
          })
    }

}




export default Article;