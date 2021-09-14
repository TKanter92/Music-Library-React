import React from 'react';
import './BackgroundImage.css';
import stage from '../../Images/stage.jpg'

function BackgroundImage() {
    return (
        <div className="overlay" style={{background: `url(${stage.jpg})` }} />
    );
}



export default BackgroundImage;
