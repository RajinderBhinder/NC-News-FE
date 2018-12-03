import React, { Component } from 'react';
import {Link} from '@reach/router';
import * as api from '../Assets/api';
import {Pie} from 'react-chartjs-2';

class ProfileStrength extends Component {

    state = {
        userData: {

            Contribution: 0,
            Likeability: 0,
            Popularity: 0

        }
    }


    render () {


        const data =  {
            labels: Object.keys(this.state.userData),
            datasets: [{
                data: Object.values(this.state.userData),
                backgroundColor: [
                '#FF6384',
                ' #4e0932',
                '#DECCCC',
                
                
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#4e0932',
                '#DECCCC'
                ]
            }]
        }

    
        return (

            <main className='profile-strength'>
            <br/> <br/>
                <h2>Profile Strength</h2> <br/> <br/>
                
                <Pie data={data} /> <br/> 

                <div className='likeability'> Likeability: Based on votes on your articles </div>

                <div className='contribution'> Contribution: Based on articles posted by you </div>
                <div className='popularity'> Popularity: Based on total comments on your articles</div>


          </main>
            
        );
    
    }

    componentDidMount() {
        
        api.getArticles()
            .then((articles) => {

                const userArticles = articles.reduce((acc, article) => {
                    if(article.created_by._id === this.props.user._id ) {
                        acc.push(article)
                    }
                    return acc;
                },[])

                const Contribution = userArticles.length;

                const Likeability = userArticles.reduce((acc, article) => {
                    return acc += article.votes
                }, 0)

                const Popularity = userArticles.reduce((acc, article) => {
                    return acc += article.comment_count
                }, 0)

                this.setState({
                    userData: {Contribution, Popularity, Likeability}
                })
                
            })
    }
};



export default ProfileStrength;