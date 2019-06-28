import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <Login/>
      <Home/>
    </div>
  );
}

export default App;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
