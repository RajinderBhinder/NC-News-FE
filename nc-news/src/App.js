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
import Comments from './Components/Comments';
import NotFound from './Components/NotFound';
import Search from './Components/Search';
import RegisterUser from './Components/RegisterUser';
import Draft from './Components/Draft';
import ProfileStrength from './Components/ProfileStrength';





class App extends Component {
  state = {
    articles: [],
    topics: [],
    user: {},
    userArticles: []
  }
  render() {

    
    return (
      <div className="App">
        
        <Header user={this.state.user} />
        <nav>
        
          <button><Link to='/'>Home</Link></button>
          <Topics topics={this.state.topics}  />
          <Sort />
          <Search articles={this.state.articles} />
          <button> <Link to='/login'> {this.state.user._id? 'Log Out' : 'Login'} </Link> </button>
        </nav>
        
        { this.state.user._id && <LeftSection user_id= {this.state.user._id} /> } 
        
        { !this.state.user._id && <section className="left"></section> }

           <section className="right"></section> 


          

        <Router>

          <Articles path='/' user={this.state.user} /> 
          <Articles path='/articles' user={this.state.user} /> 
          <Articles path='/topics/:topic' user={this.state.user} /> 
          <Articles path='/user/articles' user={this.state.user}   />
          <Articles path='/articles/:sortTopic' user={this.state.user} />
          

          <Article path='/article/:article_id' user={this.state.user}/>
          
          <Login path='/login' setUser={this.setUser} />

          <User path='users/:username' user={this.state.user} />
          {/* <User path='users/:username'  /> */}

          <AddArticle path='/addArticle' topics={this.state.topics} user={this.state.user} />
          <Draft path='/articles_draft' />
          <ProfileStrength path='/user/profile_strength' user={this.state.user} />

          <AddComment path='/article/comment' />

          {/* <Comments path='/article/:id/comments' /> */}

          <NotFound default />
          <RegisterUser path='/register' />

        </Router>

      </div>
    );
  }

  componentDidMount() {

    if (localStorage.user) {
      
      this.setUser(JSON.parse(localStorage.user))
    }
    
    if(!this.state.topics.length ) api.getTopics()
      .then((topics) => {

        this.setState({topics})
      })
      
        .catch(err => {

        }) //add error handler
  }

  filterByUser = (articles) => {
   return articles.reduce((acc,article) => {
      if(article.created_by._id === this.props.user_id ) 
         acc.push(article)
         return acc;
    },[])
  }

  setUser = (user) => {
    this.setState({user})
  }
  
}

export default App;
