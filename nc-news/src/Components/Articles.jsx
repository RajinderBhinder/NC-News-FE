import React, { Component } from 'react';
import * as api from '../Assets/api';
import gear from '../Assets/Gear-1s-200px.gif';
import Article from './Article';
import { navigate } from '@reach/router/lib/history';

class Articles extends Component {

    state = {
        articles: [],
        loading: true,
    }

    render() {
   
        
        const {articles} = this.state
        
        if (this.state.loading) return <> <br/> <br/> <img src={gear} alt='loading'/> </>

        
        return (
            
            <div>
                {articles.map((article) => 
                    
                      <Article article={article}/>
                    
                )} 


            </div>
                
        );


    }

    componentDidMount() {
        if (!this.state.articles.length )
        
        api.getArticles()
        .then((articles) => {

        this.setState({
            loading: false,
            articles})
        })
        .catch(err => {
             navigate('/')
        }) //add error handler
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.sortTopic !== this.props.sortTopic) {

            let sortedArticles;
            if (this.props.sortTopic === 'byUser') {
            
                sortedArticles =  this.state.articles.reduce((acc,article) => {
                   
                    if(article.created_by._id === this.props.user._id ) {
                        acc.push(article)
                    }
                    return acc;
                },[])

                

                this.setState({
                    articles: sortedArticles
                })


            } else if ( this.props.sortTopic === 'latest') {

                sortedArticles =  this.state.articles.sort((a, b) => {
                    return +new Date(b.created_at) - +new Date(a.created_at)
                    })

                return sortedArticles
            } else if (this.props.sortTopic === 'popularity') {

                sortedArticles = this.state.articles.sort((a, b) => {
                    return b.comment_count - a.comment_count
                })

            } else if (this.props.sortTopic === 'rating') {

                sortedArticles = this.state.articles.sort((a, b) => {
                    return b.votes - a.votes
                })
            }

            this.setState({
                articles: sortedArticles
            })

           
        }
        
        else {
        
        if ((prevProps.topic !== this.props.topic) )
            api.getArticles(this.props.topic)
                .then((articles) => {

                   this.setState({articles})
                })
                .catch(console.log) //add error handler
            }
    }
    
   
    
}


export default Articles;