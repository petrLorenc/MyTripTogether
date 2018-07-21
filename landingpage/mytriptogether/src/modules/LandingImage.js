import React, { Component } from 'react';
import './LandingImage/landingimage.css';
import LandingButton from './LandingImage/LandingButton';
import BackgroundImage from "../images/landing.jpg";
import Logo from "../images/logo.png"

var sectionStyle = {
    backgroundImage: "url(" + BackgroundImage + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    zIndex: "3"
  };

class LandingImage extends Component {
    render(){
        return (
            <div id="landingimage" className="LandingImage" style={ sectionStyle }>
              <div className="content">
                <img className="logo" src={ Logo } alt="narcos background" />
                <p>Our application will help you with choosing the RIGHT places for you and your BEST friends.</p>
                <div className="button-wrapper">
                  <LandingButton primary={true} text="Register for Update" />
                  <LandingButton primary={false} text="Ask for more" />
                </div>
              </div>
              <div className="overlay"></div>
            </div>
        );
    }
}

  export default LandingImage;