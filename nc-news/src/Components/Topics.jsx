import React, {  Component } from 'react';
import { Link } from '@reach/router'

class Topics extends Component {

    render() {
        return (
        
            <div className="dropdown">
                <button className="dropbtn">Topics</button>
                <div className="dropdown-content">
                    {this.props.topics.map((topic) => 
                        <Link  key={topic._id} to={`/topics/${topic.slug}`}>
                            {topic.title}
                        </Link> )} 
                </div>
            </div>
        );
    }

    
    
    
};



export default Topics;