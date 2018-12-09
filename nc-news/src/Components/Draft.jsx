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
        if (localStorage.getItem('body') === null) return <main className='draft'> <h2> You do not have any Draft! <br/>
               </h2>
               Either your article is already posted <br/>
               Or you have not saved a draft!
               </main>

        if (localStorage.getItem('body') )
        return (
            <main className='draft'>
                <h1> <br/> {localStorage.getItem('title')} <br/></h1>
                <h2><br/> Topic:  '{localStorage.getItem('topic')}'</h2>
                <h2> <br/> Body: <br/> </h2>
                <p>  <br/> {localStorage.getItem('body')}</p>

                { this.state.noInputFor &&
                            <Alert >
                                <br/>
                                Please enter '{this.state.noInputFor}' !
                            </Alert>
                }


                <button className='logout-button' onClick={this.handleSubmit}>Post</button>

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
                    localStorage.removeItem('topic');
                    localStorage.removeItem('created_by');
                    localStorage.removeItem('title');
                    localStorage.removeItem('body');
                })
                .catch(err => {
                    console.log(err)
                    this.setState({err})
                })
        }

    }

};


export default Draft;