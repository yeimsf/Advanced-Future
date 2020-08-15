import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar , NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureMarket } from './redux/configureMarket';

const market = ConfigureMarket();

class App extends Component {
  render(){
    return (
      <Provider store={market}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
