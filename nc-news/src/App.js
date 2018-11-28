import React, { Component } from 'react';
import {Link, Router} from '@reach/router';
import './App.css';
import Topics from './Components/Topics';
import Sort from './Components/Sort';
import Articles from './Components/Articles';
import * as api from './Assets/api';
import Article from './Components/Article';
import User from './Components/User';


class App extends Component {
  state = {
    topics: [],
    

  }
  render() {

    // const articlePath = this.state.topic.length? '/api/topics/:topic/articles' : '/api/articles';
    
    return (
      <div className="App">
        
        <header>Northcoders News</header>
        <nav>
          <button><Link to='/'>Home</Link></button>
          <Topics topics={this.state.topics} setArticles={this.setArticles} />
          <Sort />
          <input type = "text" ></input>
          <button>Login</button>
        </nav>
        <section className="left"></section>
        <section className="right"></section>
          <footer>footer</footer>

        <Router>

          <Articles path='/' articles={this.state.articles}/> 
          <Articles path='/articles' articles={this.state.articles}/> 
          <Articles path='/topics/:topic' articles={this.state.articles}/> 
          <Article path='/article/:id' />
          <User path='/username' />

        </Router>

      </div>
    );
  }



  

  componentDidMount() {
    
    if(!this.state.topics.length) api.getTopics()
      .then((topics) => {
 
      this.setState({topics})
    })
    .catch(console.log) //add error handler
  }

  
}

export default App;
