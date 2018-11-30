import React, { Component } from 'react';
import * as api from '../Assets/api';
import  AddComment from './AddComment';
import Comment from './Comment';

class Comments extends Component {
    state = {
        comments: [],
       
        
    }
    render() {

        
        
        return (

            <div> 
                {this.props.user._id && <AddComment updateComments={this.updateComments} user={this.props.user} article_id={this.props.id} /> }
                {this.state.comments.map((comment) => 
                   
                     <Comment removeDeletedComment={this.removeDeletedComment} user={this.props.user} comment={comment}/>    
                    
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

    
    

    updateComments = (comment) => {
         this.setState({
             comments: [comment, ...this.state.comments]
         })
    } 

    removeDeletedComment = (comment_id) => {
        this.setState({
            comments : this.state.comments.filter(comment => comment._id !== comment_id)
        })
    }
    

}



export default Comments;