import React, { Component } from 'react';
import * as api from '../Assets/api';
import gear from '../Assets/Gear-1s-200px.gif';
import { navigate, Link} from '@reach/router';

class Articles extends Component {

    state = {
        articles: [],
        sortedArticles: [],
        loading: true,
    }

    render() {

        let articles;

        if (this.props.sortTopic) {
            articles = this.state.sortedArticles;
        } else {
            articles = this.state.articles
        }
   
        
        //const {articles} = this.state
        
        if (this.state.loading) return <> <br/> <br/> <img src={gear} alt='loading'/> </>

        
        return (
            <div>
                

                {articles.map((article) => <div key = {article._id} className='article' >
                    <h1> <Link to={`/article/${article._id}`}> {article.title}  </Link> </h1> <br/>
                    <p>{article.body.slice(0, 50)}...</p> <br/>
                    <Link to={ `/users/${article.created_by.username}` }> <h3>{article.created_by.name } </h3> </Link>
                    <h2>{article.created_at.slice(0, 10)}</h2>

                    <div className = 'article-bar'>
                        <label> 
                                <span>&#8882; </span> 
                                {article.comment_count}  
                                 <Link className='goto-comments' to={`/article/${article._id}`} > Comments </Link> 
                                <span>&#8883; </span>
                            
                        </label> 

                        <label> 
                            <span>&#8882; </span> 
                            { article.votes }  Votes <span>&#8883; </span>  
                        </label>

                    </div>    
                        
                        
                </div>
                    
                   
                )} 


            </div>

            
                
        );


    }

    componentDidMount() {
      
            api.getArticles()
            .then((articles) => {

            this.setState({
                loading: false,
                articles})
            })
            .catch(err => {
                navigate('/errors')
            }) 
           
    }

    componentDidUpdate(prevProps, prevState) {

        
        if (prevProps.sortTopic !== this.props.sortTopic) {

            let sortedArticles;

            if (this.props.sortTopic === 'byUser') {
            
                sortedArticles =  this.state.articles.reduce((acc,article) => {
                  
                    if(article.created_by._id === localStorage.user._id ) {
                        acc.push(article)
                    }
                    return acc;
                },[])


            } else if ( this.props.sortTopic === 'latest') {

                sortedArticles =  this.state.articles.sort((a, b) => {
                    return +new Date(b.created_at) - +new Date(a.created_at)
                    })

                
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
               sortedArticles
            }) 

        } 
        
        
        if ((prevProps.topic !== this.props.topic) ) {
            api.getArticles(this.props.topic)
                .then((articles) => {

                   this.setState({articles})
                })
                .catch(err => {
                    navigate('/errors')
              }) 

        } 
            
    }
   
   
}




export default Articles;