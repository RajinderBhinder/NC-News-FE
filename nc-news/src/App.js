import React, { Component } from 'react';
import {Link, Router} from '@reach/router';
import './App.css';
import Topics from './Components/Topics';
import Sort from './Components/Sort';
import Articles from './Components/Articles';
import * as api from './Assets/api';
import Article from './Components/Article';
import User from './Components/User';
import Login from './Components/Login'


class App extends Component {
  state = {
    topics: [],
    user: {}
  }
  render() {

    console.log(this.state.user)
    
    return (
      <div className="App">
        
        <header>Northcoders News</header>
        <nav>
          <button><Link to='/'>Home</Link></button>
          <Topics topics={this.state.topics} setArticles={this.setArticles} />
          <Sort />
          <input type = "text" ></input>
          <button> <Link to='/login'>Login </Link> </button>
        </nav>
        <section className="left"></section>
        <section className="right"></section>
          <footer>footer</footer>

        <Router>

          <Articles path='/' user={this.state.user} articles={this.state.articles}/> 
          <Articles path='/articles' articles={this.state.articles}/> 
          <Articles path='/topics/:topic' articles={this.state.articles}/> 
          <Article path='/article/:id' />
          <Login path='/login' setUser={this.setUser} />
          <User path='/username' user={this.state.user} />

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

  setUser = (user) => {
     this.setState({user})
  }

  
}

export default App;
