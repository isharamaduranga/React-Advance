import React, {Component} from 'react';
import  './User.css'
class User extends Component{

    componentWillUnmount() {
        console.log('calling component Will Unmount')
    }
    render() {
        return(
        <li className={'user'}>
            {this.props.name}
        </li>
        )
    }
}

/**
 const User = (props) => {
    return<li className='user'> {props.name} </li>;
};
 */
export default User;
