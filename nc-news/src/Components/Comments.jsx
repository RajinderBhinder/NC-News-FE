import React, { Component } from 'react';
import * as api from '../Assets/api';
import  AddComment from './AddComment';

class Comments extends Component {
    state = {
        comments: []
        
    }
    render() {

        
        
        return (

            <div> 
                {this.props.user._id && <AddComment updateComments={this.updateComments} user={this.props.user} article_id={this.props.id} /> }
                {this.state.comments.map((comment) => 
                   <div className='commentsForArticle' key={comment._id} > 
                         <div>
                             {comment.body}
                         </div>


                         <div className='bar'>
                            <div>
                                {comment.created_by.name}
                            </div>
                            
                            <label > <bold>--</bold> {comment.votes}  Votes <bold>--</bold> </label>

                            <button onClick={this.handleClick} >
                                Like
                            </button>

                            <button> {comment.created_at.slice(0, 9)}</button>

                            {this.props.user._id === comment.created_by._id && 
                                <button onClick={(event) => this.handleDeleteComment(event, comment._id)}>
                                   Delete
                                </button>}



                        </div>

                         
                    </div> 
                    )}
            </div>
                
        );
    }

    componentDidMount() {
        api.getComments(this.props.id) 
           .then(comments => {
               this.setState({comments})
           })

    }

    componentDidUpdate(prevProps, prevState, ) {
        
        if (prevState.comments.length !== this.state.comments.length) {
            
        }
    }

    

    updateComments = (comment) => {
         this.setState({
             comments: [comment, ...this.state.comments]
         })
    }
    

    handleDeleteComment = (event, comment_id) => {
        event.preventDefault();
        api.deleteComment(comment_id)
            .then((res, comment_id) => {
                this.setState({
                    comments : [...this.state.comments.filter(comment => comment._id !== comment_id)]
                })
            })
            .catch(console.log)

    }

    
}



export default Comments;