import React, {Component} from 'react';
import {Link} from '@reach/router';
import * as api from '../Assets/api';

class ArticleBar extends Component {

    state = {
        
        modifier: 0,
        voted: false,
       
    }

    render () {
        const {article} = this.props
        return (
            <div className = 'article-bar'>
                

                        <label> 
                            <span>&#8882; </span> 
                            {article.comment_count} 
                            <Link className='goto-comments' to={`/article/${article._id}`} > Comments </Link>
                            <span>&#8883; </span>
                        
                        </label> 

                    <label> <span>&#8882; </span> { article.votes =  article.votes + this.state.modifier  }  Votes <span>&#8883; </span>  </label>
                        
                        <button className={this.state.voted? 'voted' : 'vote'} value={this.state.voted? 'down':'up'} 
                            onClick={(event) => this.handleLikeClick(event, article._id) } > Like
                        </button>
            </div>    
        );
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

};


export default ArticleBar;