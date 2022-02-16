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
import Protected from './protected';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
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
      <Routes>
        <Route path="/" element={<Protected Cmp={ProductList}/>}/>
        <Route path="/list" element={<Protected Cmp={ProductList}/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Add" element={<Protected Cmp={AddProduct} />}/>
        <Route path="/Update/:id" element={<Protected Cmp={UpdateProduct} props/>}/>
        <Route path="/Update" element={<Protected Cmp={ProductList}/>}/>
        <Route path="/search" element={<SearchProduct/>}/>
      </Routes>
      {/* <button>Simple HTML Button</button>
      <Button>Bootstrap Button</Button> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
