import React, { Component } from 'react';
import './Navigation/navigation.css';

class Navigation extends Component {
    render(){
        return (
        <div id="navigation" className="Navigation">
            <nav>
            <ul>
                <li><a href="#Register">Register</a></li>
                <li><a href="#Motivation">Motivation</a></li>
                <li>Join Us</li>
                <li>About Us</li>
            </ul>
            </nav>
        </div>
        );
    }
}

  export default Navigation;