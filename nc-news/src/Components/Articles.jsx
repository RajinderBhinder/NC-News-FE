import React, { Component, Fragment } from 'react';
import {Link} from '@reach/router';
import * as api from '../Assets/api';

class Articles extends Component {

    state = {
        articles: [],
        loading: true,
    }

    
    
    render() {
   
        
        const {articles} = this.state
        
        if (this.state.loading) return <div class="lds-spinner"><div></div><div></div><div></div><div>
                                           </div><div></div><div></div><div></div><div></div>
                                         <div></div><div></div><div></div><div></div></div>

        
        return (
            
            <div>
                {articles.map((article) => 
                   <article key={article._id} className='article'>
                       <h1> <Link  to={`/article/${article._id}`}>
                            {article.title}
                        </Link> </h1>
                        <div>
                            {article.body}

                        </div>
                        <h4 className='author'>
                            <Link to={`/users/${article.created_by.username}`} articleuser={article.created_by}>
                              - {article.created_by.name}
                            </Link>
                        </h4>
                        <div className='bar'>
                            <label>{article.comment_count}</label>
                            <button><Link to={`/article/${article._id}`}>
                                Comments
                            </Link > </button>
                            <label >{article.votes}</label>

                            <button >
                                Votes
                            </button>

                            <div> {article.created_at.slice(0, 9)}</div>

                        </div>

                        <div className='comment-like'>
                            <button><Link to={`/article/${article._id}`}>
                                Comment
                            </Link></button>
                            
                            <button className='vote'>
                                Like
                            </button>

                            
                        </div>

                    </article>
                )} 
            </div>
                
        );


    }

    componentDidMount() {
        if (!this.state.articles.length || this.props.sortTopic)
        
        api.getArticles()
        .then((articles) => {
         
        //if (this.props.sortTopic === 'byUser') {
           
        //     return articles.reduce((acc,article) => {
        //         if(article.created_by._id === this.props.user_id ) 
        //            acc.push(article)
        //            return acc;
        //       },[])
        // }  else {

            articles.sort((a, b) => {
            return +new Date(b.created_at) - +new Date(a.created_at)
            })
        //}
          
        this.setState({
            loading: false,
            articles})
        })
        .catch(console.log) //add error handler
    }

    componentDidUpdate(prevProps, prevState) {
        
        
        if ((prevProps.topic !== this.props.topic) )
            api.getArticles(this.props.topic)
                .then((articles) => {
                    
        
                   this.setState({articles})
                })
                .catch(console.log) //add error handler
    }
    
    // sortArticlesByTopic = () => {
    //     if (this.props)
    // }
    
    
}

// Article.propTypes = {

// };

export default Articles;