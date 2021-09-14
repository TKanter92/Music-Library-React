import React from 'react';
import './TitleBar.css';

function TitleBar(props){
    return (
        <div className="row row-space">
            <div className="col-md-12" style={{padding: 10}}>
                <div className="titlebar-nav">
                    <h1>Music Library</h1>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;