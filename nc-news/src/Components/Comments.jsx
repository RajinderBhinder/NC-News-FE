import React, { Component, PropTypes } from 'react';
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

                         <div>
                             {comment.created_at.slice(0, 10)}
                         </div>

                         <div>
                             {comment.created_by.name}
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

    

    updateComments = (comment) => {
         this.setState({
             comments: [comment, ...this.state.comments]
         })
    }
}

Comments.propTypes = {

};

export default Comments;