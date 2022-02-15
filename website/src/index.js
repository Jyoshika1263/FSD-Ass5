import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';
import Navbar from './Navbar.js';
import Component from './component';
import Intro from './introduction';

const App=()=> {
  return(
    <>
    <div>
      <Navbar />
    </div>
    <div>
      <Intro />
    </div>
    <br /><br />
    <div>
    <Component />
    </div>
    </>
  )
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

