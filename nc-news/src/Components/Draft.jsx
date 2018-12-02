import React, {Component} from 'react';
import { navigate } from '@reach/router';
import * as api from '../Assets/api';
import { Alert } from 'reactstrap';

class Draft extends Component {

    state = {
        selectionMade: false,
        err: '',
        noInputFor: '',
    }

    render () {
        return (
            <main className='draft'>
                <h1> <br/> {localStorage.getItem('title')} <br/></h1>
                <h2><br/> For:  '{localStorage.getItem('topic')}'</h2>
                <h2> <br/> Body: <br/> </h2>
                <p>  <br/> {localStorage.getItem('body')}</p>

                { this.state.noInputFor &&
                            <Alert >
                                <br/>
                                Please enter '{this.state.noInputFor}' !
                            </Alert>
                }


                <button onClick={this.handleSubmit}>Post</button>

                { this.state.err &&
                    <Alert >
                        <br/>
                        Unable to post Article - please check you're logged in and try again  !
                    </Alert>
                }
            </main>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, body, created_by, topic } = localStorage;
        console.log(title)
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
                    console.log(err)
                    this.setState({err})
                })
        }

    }

};


export default Draft;