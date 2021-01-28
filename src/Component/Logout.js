import { faHome,faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export default class Logout extends Component {
    render() {
        return (
            <div className="mr-auto">
                <h1 className="bg-dark text-white">You have been Logged Out!!!</h1>
                <br/>
                <Link to={"/login"}><FontAwesomeIcon icon={faSignInAlt} /> Click here to Login Again!!!</Link>
                <br/>
                <Link to={"/"}><FontAwesomeIcon icon={faHome} /> Return to Home</Link>
                
            </div>
        )
    }
}
