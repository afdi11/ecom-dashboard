import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import React from 'react';
import Header from './Header';
 
function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Afdi Fauzul Bahar is Learning <code>React js</code> From youtube to Hero.
        </p>
        <a
          className="App-link"
          href="http://github.com/afdi11"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
      </header>
      <h1>E-Commerce Dashboard</h1>
      <button>Simple HTML Button</button>
      <Button>Bootstrap Button</Button>
    </div>
  );
}

export default App;
