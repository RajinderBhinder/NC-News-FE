import React, { Component } from 'react';
import * as api from '../Assets/api'

class Comment extends Component {

    state = {
        modifier: '',
        voted: false,
        unliked: false,
        noVote: true,
        
    }
    render() {

        console.log(this.state.modifier, 'mod')

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
           {this.state.noVote  &&  <label >  {comment.votes} </label> }
         {this.state.unliked   &&  <label > -- { comment.votes = this.state.modifier === 'down'? comment.votes -1 : comment.votes + 1 }  Votes -- </label> }                   
        {this.state.voted &&  <label > -- { comment.votes = this.state.modifier === 'up'? comment.votes+1 : comment.votes- 1 }  Votes -- </label> }

                            <button className={this.state.voted? 'voted' : 'vote'} value={this.state.voted? 'down':'up'} onClick={(event) => this.handleLikeClick(event, comment._id) } >
                                ^
                            </button>

                            <label>Vote</label>

                            <button className={this.state.unliked? 'unliked' : 'changedMind'} value={this.state.voted? 'down':'up'} onClick={(event) => this.handleUnlikeClick(event, comment._id) } >
                                X
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
            //change class
            this.setState({
                modifier: direction,
                voted: this.state.voted? false : true,
                noVote: false
            }) 
            

          })
    }


    handleUnlikeClick = (event, id) => {
        event.preventDefault();
        const direction = event.target.value === 'up'? 'down' : '';
        if (direction === 'down')
        api.vote('comments', id, direction)
          .then(() => {
            //change class
            this.setState({
                modifier: direction,
                unliked: this.state.voted? false : true,
                noVote: false,
            }) 
            

          })
    }


}



export default Comment;