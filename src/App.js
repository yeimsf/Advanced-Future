import React from 'react';
import logo from './logo.svg';
import {Navbar , NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureMarket } from './redux/configureMarket';

const market = ConfigureMarket();

function App() {
  return (
    <Provider store={market}>
      <BrowserRouter>
        <div className="App">
          <Menu />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
