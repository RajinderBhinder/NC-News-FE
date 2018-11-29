import React, { Component, PropTypes } from 'react';
import * as api from '../Assets/api'

class AddComment extends Component {

    state = {
        body: '',
        created_by: this.props.user._id

    }
    render() {
        return (
            <div className='addComment'>    
                <form onSubmit={this.handleSubmit} >
                    <div className='typebox' >
                        <input onChange={this.handleChange} type='text' /> <br/>
                        <button>Comment</button>
                    </div>
                </form>
            </div>
        );
    }

    handleChange = (event) => {

        this.setState({
            
            body: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { body, created_by } = this.state;
        const { article_id } = this.props;
        const newComment = {
            
            body,
            created_by
        }
        api.addComment(newComment, article_id)
            .then(article => {
                navigate(`/article/${article._id}`)
            })
            .catch(err => console.log(err, 'err'))

    }
}

AddComment.propTypes = {

};

export default AddComment;