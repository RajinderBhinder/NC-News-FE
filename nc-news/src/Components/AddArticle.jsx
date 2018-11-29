import React, { Component} from 'react';
import { navigate } from '@reach/router'
import * as api from '../Assets/api';

class AddArticle extends Component {

    state = {
        title: '',
        body: '',
        created_by: this.props.user._id,
        topic: '',
        article: {},
    }
    render() {

        return (
           
            < div>
                {this.props.topics.map((topic) =>
                    <button onClick={(event) => this.handleClick(event, topic.slug)} key={topic._id} to={`/topics/${topic.slug}`}>
                        {topic.title}
                    </button>
                )}

                {this.state.topic &&
                    <form onSubmit={this.handleSubmit} className='addArticle'>
                        <label>Title</label>
                        <input onChange={this.handleTitleChange} className='article-title' type='text' /> <br />

                        <label>Body</label>
                        <input onChange={this.handleBodyChange} className='article-body' type='text' /> <br />

                        <button>Post</button>

                    </form>
                }


            </div>
            

        );
    }

    handleClick = (event, slug) => {
        event.preventDefault();
        this.setState({
            topic: slug
        })
    }

    handleTitleChange = (event) => {
        this.setState({

            title: event.target.value
        })
    }

    handleBodyChange = (event) => {

        this.setState({
            
            body: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, body, created_by, topic } = this.state;
        const newArticle = {
            title,
            body,
            created_by
        }
        api.addArticle(newArticle, topic).
            then(article => {
                navigate(`/article/${article._id}`)
            })
            .catch(err => console.log(err, 'err'))

    }
}

// AddArticle.propTypes = {

// };

export default AddArticle;