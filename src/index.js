import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';



ReactDom.render(
    <React.StrictMode>
        <BackgroundImage />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);