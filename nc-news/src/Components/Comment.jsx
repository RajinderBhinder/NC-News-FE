import React, { Component } from 'react';
import * as api from '../Assets/api'

class Comment extends Component {

    state = {
        modifier: 0,
        voted: false,
        
    }
    render() {


        const {comment} = this.props;
        return (

            <div className='commentsForArticle' key={comment._id} > 
                         <div>
                             {comment.body}
                         </div>

                         <div className='bar'>
                            <div>
                                {comment.created_by.name}
                            </div>
                            
                            <label > -- { comment.votes =  comment.votes + this.state.modifier  }  Votes -- </label>

                            <button className={this.state.voted? 'voted' : 'vote'} value={this.state.voted? 'down':'up'} onClick={(event) => this.handleLikeClick(event, comment._id) } >
                                Like
                            </button>

                            <button> {comment.created_at.slice(0, 9)}</button>

                            {this.props.user._id === comment.created_by._id && 
                                <button onClick={(event) => this.handleDeleteComment(event, comment._id)}>
                                   Delete
                                </button>}
                        </div>
            </div>         

                
        );
    }

    handleDeleteComment = (event, comment_id) => {
        event.preventDefault();
        api.deleteComment(comment_id)
            .then(() => {
                this.props.removeDeletedComment(comment_id)
            })
            .catch(console.log)

    }

    handleLikeClick = (event, id) => {
        event.preventDefault();
        const direction = event.target.value;
        api.vote('comments', id, direction)
          .then(() => {
            
            this.setState({
                modifier: direction === 'up'? +1 : - 1,
                voted: this.state.voted? false : true,
            }) 
            

          })
    }

}



export default Comment;