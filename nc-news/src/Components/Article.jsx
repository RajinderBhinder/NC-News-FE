import React, { Component } from 'react';
import * as api from '../Assets/api';
import Comments from './Comments';
import Articles from './Articles';

class Article extends Component {
    state = {
        article: {},
        modifier: 0,
        voted: false,
    }


    render() {
        const {article} = this.state;
        
        return (
            <div>
                <article className='article' >
                    <h1>{article.title}</h1>
                    <p >{article.body}</p>
                    
                </article>


                <div className = 'article-bar'>
                   <label>-- { article.votes =  article.votes + this.state.modifier  }  Votes --  </label>
                    <button className={this.state.voted? 'voted' : 'vote'} value={this.state.voted? 'down':'up'} 
                        onClick={(event) => this.handleLikeClick(event, article._id) } >Like
                    </button>
                </div>    

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