import React, {Component} from 'react';
import { Link } from '@reach/router';
import image from '../Assets/double-exposure-female-silhouette-trees-double-exposure-female-silhouette-trees-contrust-solution-man-nature-lines-111738806.jpg'



class Header extends Component {

    render (){

        const {user} = this.props;
        return (
            <div className='header'>
                <header>
                    <span className='o'>N&#770;</span>orthcoders News
                    
                </header>
                <figure>
                    
                    {  user.avatar_url && <Link to={ `/users/${user.username}` }>
                    <img src={user.avatar_url } ref={img => this.img = img} onError={ (e)=> this.img.src=image  } alt='profile'/> 
                    </Link>  }
                    <figcaption>{user.username}</figcaption>
                </figure>

            </div>

        );
    }
};


export default Header;