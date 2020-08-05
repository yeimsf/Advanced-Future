import React from 'react';
import logo from './logo.svg';
import {Navbar , NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
