import React, { Component} from 'react';
import { navigate } from '@reach/router'
import * as api from '../Assets/api';
import { Alert } from 'reactstrap';

class AddArticle extends Component {

    state = {
        title: '',
        body: '',
        created_by: this.props.user._id,
        topic: '',
        article: {},
        selectionMade: false,
        err: '',
        noInputFor: '',
    }
    render() {

        return (
           
            < main className='addArticle'>
                {this.props.topics.map((topic) =>
                    <button onClick={(event) => this.handleClick(event, topic.slug)} key={topic._id} to={`/topics/${topic.slug}`}>
                        {topic.title}
                    </button>
                )}
                <br/>
                { this.state.selectionMade &&
                            <Alert >
                                <br/>
                                You selected  {this.state.topic}  !
                            </Alert>
                 }

                {this.state.topic &&
                    <form onSubmit={this.handleSubmit} className='addArticle'>
                        <label className='addArticle-title-label'>Title</label>
                        <input onChange={this.handleChange} id='title' className='addArticle-title' type='text' /> <br />

                        <label className='addArticle-body-label'>Body</label> <br/>
                        <textarea onChange={this.handleChange} id='body' className='addArticle-body' type='text' ></textarea> <br />
                        
                        { this.state.noInputFor &&
                            <Alert >
                                <br/>
                                Please enter '{this.state.noInputFor}' !
                            </Alert>
                        }


                        <button>Post</button>

                        { this.state.err &&
                            <Alert >
                                <br/>
                                Unable to post Article - make sure you are logged in and try again  !
                            </Alert>
                        }

                    </form>
                }


            </main>
            

        );
    }

    handleClick = (event, slug) => {
        event.preventDefault();
        this.setState({
            topic: slug,
            selectionMade: true
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
        if (title.length === 0) {
            this.setState({
                noInputFor: 'title'
            })
        } else if (body.length === 0){
            this.setState({
                noInputFor: 'body'
            })
        } else {

            this.setState({
                noInputFor: ''
            })

            const newArticle = {
                title,
                body,
                created_by
            }
            api.addArticle(newArticle, topic)
                .then(article => {
                    navigate(`/article/${article._id}`)
                })
                .catch(err => {
                    this.setState({err})
                })
        }

    }
}



export default AddArticle;