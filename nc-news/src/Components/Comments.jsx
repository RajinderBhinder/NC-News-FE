import React, { Component, PropTypes } from 'react';
import * as api from '../Assets/api'

class Comments extends Component {
    state = {
        comments: []
    }
    render() {
        console.log(this.state.comments)
        return (

            <div> 
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

                         {/* 

                          */}
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
}

Comments.propTypes = {

};

export default Comments;