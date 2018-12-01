import React, { Component } from 'react';
import * as api from '../Assets/api';
import { navigate } from '@reach/router';
import { Alert } from 'reactstrap';


class AddComment extends Component {

    state = {
        body: '',
        created_by: this.props.user._id,
        alert: false

    }

    render() {

        
        return (
            <div className='addComment'>    
                <form onSubmit={this.handleSubmit} >
                    <div className='typebox' >
                        <input onChange={this.handleChange} value={this.state.body} type='text' /> <br/>
                        
                        { this.state.alert &&
                            <Alert class="login-alert">
                                    Please add a comment !
                            </Alert>
                        }

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

        if (body.length === 0) {

            this.setState({
                alert: true
            })
        } else {
        const newComment = {
            
            body,
            created_by
        }

        
        api.addComment(newComment, article_id)
            .then(comment => {
                this.props.updateComments(comment)
                this.setState({
                    body: ''
                })
            })
            .catch(err => console.log(err, 'err'))


        }
    }
}

AddComment.propTypes = {

};

export default AddComment;