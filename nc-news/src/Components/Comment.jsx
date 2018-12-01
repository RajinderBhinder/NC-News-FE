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

            <div className='eachComment' key={comment._id} > 
                         <p>
                             {comment.body}
                         </p>

                         <div key={comment._id}className='eachComment-bar'>
                            <h4>
                                {comment.created_by.name}
                            </h4>
                            
                            <label > &#8882; { comment.votes =  comment.votes + this.state.modifier  }  Votes &#8883; </label>

        

                            <button className={this.state.voted? 'voted' : 'vote'} value={this.state.voted? 'down':'up'} onClick={(event) => this.handleLikeClick(event, comment._id) } >
                                   &#9829;
                            </button>

                            {this.props.user._id === comment.created_by._id && 
                                <button onClick={(event) => this.handleDeleteComment(event, comment._id)}>
                                   Delete
                            </button>}

                            <span> {comment.created_at.slice(0, 10)}</span>

                            
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