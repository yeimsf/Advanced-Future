import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Navbar , NavbarBrand } from 'reactstrap';
import { CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import AdminHeader from './AdminHeader';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Menu from './MenuComponent';
import CardComp from './CardComponent';
import SignIn from './SignInComponent';
import AddAppart from './AdminAddAppart';
import Dashboard from './AdminDashboard';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, logoutUser, fetchAppartments, postAppartment, delAppartment, putAppartment } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    appartments: state.appartments,
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => ({
fetchAppartments: () => {dispatch(fetchAppartments())},
postAppartments: (appartment) => {dispatch(postAppartment(appartment))},
putAppartment: (appartmentId, appartment) => {dispatch(putAppartment(appartmentId, appartment))},
delAppartment: (appartmentId) => {dispatch(delAppartment(appartmentId))},
loginUser: (creds) => dispatch(loginUser(creds)),
logoutUser: () => dispatch(logoutUser())
});

class AdminMain extends Component {
  constructor(props){
    super(props); 
  }
  componentDidMount() {
    this.props.fetchAppartments();
  }
  render(){
    // const AppartWithId = ({match}) => {
    //   <Card dish={this.props.appartments.appartments.filter((appartment) => appartment._id === match.params.appartmentId)[0]}
    //     isLoading={this.props.appartments.isLoading}
    //     errMess={this.props.appartments.errMess}/>
    // }
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          :  <Redirect to={{
              pathname: '/home',
              state: { from: props.location }
            }} />
      )} />
    );
    return (
      <>
      <AdminHeader />
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
          <Switch location={this.props.location}>
            <Route path='/home' component={Home} />
            <Route exact path='/aboutus' component={AboutUs} />
            <Route path='/menu' component={() => <Menu appartments={this.props.appartments}/> } />
            {/* <Route path='/Menu/:appartmentId' component={() => <Menu appartments={this.props.appartments}/> } /> */}
            <Route path='/signin'component={() => <SignIn auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} /> } />
            <PrivateRoute path='/admin' />
            <PrivateRoute path='/admin/addAppart' component={() => 
              <AddAppart postAppartment={this.props.postAppartment} appartments={this.props.appartments} />
            }/>
            <PrivateRoute path='/admin/editAppart' />
            <PrivateRoute path='/admin/delAppart' />
            <PrivateRoute path="/admin/dashboard" component={Dashboard}/>
           <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminMain));
