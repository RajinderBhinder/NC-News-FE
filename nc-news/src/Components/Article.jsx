import React, { Component } from 'react';
import * as api from '../Assets/api';
import Comments from './Comments';
import { Alert } from 'reactstrap';
import {Link} from '@reach/router';
import gear from '../Assets/Gear-1s-200px.gif';

class Article extends Component {
    state = {
        article: {},
        modifier: 0,
        voted: false,
        loading: true
    }


    render() {

        
        if (this.state.loading) return <> <br/> <br/> <img src={gear} alt='loading'/> </>
        const {article} = this.state;

        
        
        return (
            <div>
                <div className='article' >
                
                    <h1>  {article.title}  </h1>
                    <p >{article.body}</p>
                    <h2>{article.created_at.slice(0, 10)}</h2>
                    
                </div>


                <div className = 'article-bar'>
                


                   <label> <span>&#8882; </span> { article.votes =  article.votes + this.state.modifier  }  Votes <span>&#8883; </span>  </label>
                    
                    <button className={this.state.voted? 'voted' : 'vote'} value={this.state.voted? 'down':'up'} 
                        onClick={(event) => this.handleLikeClick(event, article._id) } > Like
                    </button>
                </div>    

                
           <Comments id={article._id} user={this.props.user} /> 

            </div>
                
        );
    }

    componentDidMount() {

        
            api.getArticleById(this.props.article_id)
                .then((article) => {
                    this.setState({
                        loading: false,
                        article})
                })
                .catch((err) => {
                   console.log(err)
                })
           
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

    handleArticleClick = (event) => {
        
        this.setState({
            displayComments: true
        })
    }

}




export default Article;