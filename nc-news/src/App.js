import React, { Component } from 'react';
import {Link, Router} from '@reach/router';
import './App.css';
import Topics from './Components/Topics';
import Sort from './Components/Sort';
import Articles from './Components/Articles';
import * as api from './Assets/api';
import Article from './Components/Article';
import User from './Components/User';
import Login from './Components/Login';
import Header from './Components/Header';
import LeftSection from './Components/LeftSection';
import AddArticle from './Components/AddArticle';
import AddComment from './Components/AddComment';


class App extends Component {
  state = {
    topics: [],
    user: {}
  }
  render() {

    
    return (
      <div className="App">
        
        <Header user={this.state.user} />
        <nav>
          <button><Link to='/'>Home</Link></button>
          <Topics topics={this.state.topics} setArticles={this.setArticles} />
          <Sort />
          <input type = "text" ></input>
          <button> <Link to='/login'> {this.state.user._id? 'Log Out' : 'Login'} </Link> </button>
        </nav>
        
        { this.state.user._id && <LeftSection /> } 
        { !this.state.user._id && <section className="left"></section> }
        <section className="right"></section>
          <footer>footer</footer>

        <Router>

          <Articles path='/' user={this.state.user} articles={this.state.articles}/> 
          <Articles path='/articles' articles={this.state.articles}/> 
          <Articles path='/topics/:topic' articles={this.state.articles}/> 
          <Article path='/article/:id' user={this.state.user}/>
          <Login path='/login' setUser={this.setUser} />
          <User path='/username' user={this.state.user} />
          <AddArticle path='/addArticle' topics={this.state.topics} user={this.state.user} />
          <AddComment path='/article/comment' />

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
