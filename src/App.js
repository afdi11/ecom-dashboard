// import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import React from 'react';
import Header from './Header';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      {/* <header className="App-header">
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
      </header> */}
      <h1>E-Commerce Dashboard</h1>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Add" element={<AddProduct/>}/>
        <Route path="/Update" element={<UpdateProduct/>}/>
      </Routes>
      {/* <button>Simple HTML Button</button>
      <Button>Bootstrap Button</Button> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
