import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './views/landingPage/landing';

import './App.css';

function App() {
  return (
    <div className="App">
     <Landing/>

    </div>
  );
}

export default App;
