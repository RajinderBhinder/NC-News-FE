import React, { Component } from 'react';
import * as api from '../Assets/api';
import { navigate } from '@reach/router';

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
                        <input onChange={this.handleChange} value={this.state.body} type='text' /> <br/>
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
            .then(comment => {
                navigate(`/article/${this.props.article_id}`)
                this.setState({
                    body: ''
                })
            })
            .catch(err => console.log(err, 'err'))



    }
}

AddComment.propTypes = {

};

export default AddComment;