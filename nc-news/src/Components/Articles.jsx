import React, { Component } from 'react';
import * as api from '../Assets/api';
import gear from '../Assets/Gear-1s-200px.gif';
import Article from './Article';

class Articles extends Component {

    state = {
        articles: [],
        loading: true,
    }

    
    render() {
   
        
        const {articles} = this.state
        
        if (this.state.loading) return <img src={gear} alt='loading'/>

        
        return (
            
            <div>
                {articles.map((article) => 
                    
                      <Article article={article}/>
                    
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