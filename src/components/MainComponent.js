import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Navbar , NavbarBrand } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Menu from './MenuComponent';
import Card from './CardComponent';
import SignIn from './SignInComponent';
import Dashboard from './AdmingDashboard';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {
  constructor(props){
    super(props);
  }
  const AppartWithId = ({match}) => {
    <Card dish={this.props.appartments.appartments.filter((appartment) => appartment._id === match.params.appartmentId)[0]}
      isLoading={this.props.appartments.isLoading}
      errMess={this.props.appartments.errMess}/>
  }
  const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : alert("You Are Not Authorized!");
          <Redirect to={{
              pathname: '/admin',
              state: { from: props.location }
            }} />
      )} />
    );
  render(){
    return (
      <>
      <Header />
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
          <Switch location={this.props.location}>
            <Route path='/home' component={Home} />
            <Route exact path='/aboutus' component={AboutUs} />
            <Route path='/Menu' component={() => <Menu appartments={this.props.appartments}/> } />
            <Route path='/Menu/:appartmentId' component={() => <Menu appartments={this.props.appartments}/> } />
            <Route path='/signin'component={() => <SignIn auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} /> } />
            <Route path='/admin' />
            <Route path='/admin/addAppart' />
            <Route path='/admin/editAppart' />
            <Route path='/admin/delAppart' />
            <PrivateRoute exact path="/admin/dashboard" component={Dashboard}/>
           <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
      </>
    );
  }
}

export default Main;
