import React, { Component, PropTypes } from 'react';
import { Link } from '@reach/router';
import * as api from '../Assets/api'

class Search extends Component {
    state = {
        searchTerm: ""
    } 

    render() {
        const filteredArticles = this.props.articles.reduce((acc,article) => {
            if(article.title.includes(this.state.searchTerm) || article.body.includes(this.state.searchTerm) ) 
               acc.push(article)
               return acc;
        },[])

        return (

            <div className='searchBar'>
                <input onChange={this.handleChange} type = "text" ></input>

                {this.state.searchTerm &&
                    <ul>
                        {filteredArticles.map(article => 
                        <li key={article._id}>
                            <Link to={`/article/${article._id}`}>{article.title}</Link>
                        </li> )}
                    </ul>
                }
            </div>
                
        );
    }

    handleChange = (event)  => {
       
        this.setState({searchTerm: event.target.value})
       
    }
}



Search.propTypes = {

};

export default Search;