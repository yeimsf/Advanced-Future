import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Navbar , NavbarBrand } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Buy from './BuyComponent';
import SignIn from './SignInComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Menu extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
          <Switch location={this.props.location}>
            <Route path='/home' component={Home} />
            <Route exact path='/aboutus' component={AboutUs} />
            <Route path='/buy' component={Buy} />
            <Route path='/signin'component={SignIn} />
           <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      </>
    );
  }
}

export default Menu;
