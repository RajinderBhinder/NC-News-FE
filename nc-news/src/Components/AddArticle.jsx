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
           
            < main className='addArticle'>
                {this.props.topics.map((topic) =>
                    <button onClick={(event) => this.handleClick(event, topic.slug)} key={topic._id} to={`/topics/${topic.slug}`}>
                        {topic.title}
                    </button>
                )}

                {this.state.topic &&
                    <form onSubmit={this.handleSubmit} className='addArticle'>
                        <label className='addArticle-title-label'>Title</label>
                        <input onChange={this.handleChange} id='title' className='addArticle-title' type='text' /> <br />

                        <label className='addArticle-body-label'>Body</label> <br/>
                        <textarea onChange={this.handleChange} id='body' className='addArticle-body' type='text' ></textarea> <br />
                        

                        <button>Post</button>

                    </form>
                }


            </main>
            

        );
    }

    handleClick = (event, slug) => {
        event.preventDefault();
        this.setState({
            topic: slug
        })
    }

    handleChange = (event) => {
        this.setState({

            [event.target.id]: event.target.value
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
        api.addArticle(newArticle, topic)
            .then(article => {
                navigate(`/article/${article._id}`)
            })
            .catch(err => console.log(err, 'err'))

    }
}

// AddArticle.propTypes = {

// };

export default AddArticle;