import React from 'react';
import logo from './logo.svg';
import './App.css';

import navbar from './navbar.js';
import card from './card.js';

function App() {
  return (
    <div className="App">
     <h1>CS230L</h1>
     <h2>Section-001</h2>
     <p>WVU ID: 800370291</p>
     <p>Hi I am Luke</p>
     <navbar/>
     <card/>
    </div>

  );
}

export default App;
