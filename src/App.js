import React from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';
import Login from './components/Login.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
// <Login/>

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
