import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  './component/Textform.css';
import App from './App';
import {Person,Teacher} from './App';

import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';
import Textform from './component/Textform';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    <Navbar title='Navbar'/>
    <Textform />
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
