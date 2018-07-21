import React, { Component } from 'react';
import './LandingButton/landingbutton.css'

class LandingButton extends Component {
    render(){
        return (
            <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
        );
    }
}

export default LandingButton;