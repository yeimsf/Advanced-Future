import React, { Component } from 'react';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import Menu from './MenuComponent';
import CardComp from './CardComponent';
import SignIn from './SignInComponent';
import AddAppart from './AdminAddAppart';
import AdminDashboard from './AdminDashboard';
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
//fetchAppartimages: () => {dispatch(fetchAppartimages())},
//postAppartments: (appartment) => {dispatch(postAppartments(appartment))},
postAppartment: (newAppartment) => {dispatch(postAppartment(newAppartment))},
putAppartment: (appartmentId, appartment) => {dispatch(putAppartment(appartmentId, appartment))},
delAppartment: (appartmentId) => {dispatch(delAppartment(appartmentId))},
loginUser: (creds) => dispatch(loginUser(creds)),
logoutUser: () => dispatch(logoutUser())
});

class Main extends Component {
  constructor(props){
    super(props); 
  }
  componentDidMount() {
    this.props.fetchAppartments();
    //this.props.fetchAppartimages();
  }
  render(){
    
    const AppartWithId = ({match}) => {
      return(
        <CardComp appartment={this.props.appartments.appartments.filter((appartment) => appartment._id === match.params.appartmentId)[0]}
          isLoading={this.props.appartments.isLoading}
          errMess={this.props.appartments.errMess}
          appartments={this.props.appartments}
          /> 
      );
    }
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ?<Component {...props} />
          : 
          (
            alert("You Are Not Authorized"),
            <Redirect to={{
              pathname: '/home',
              state: { from: props.location }
            }} />
          )
      )} />
    );
    // const PrivateRoute = ({component: Component, ...rest}) => (
    //   <Route {...rest} render={(props) => (
    //     if(this.props.auth.isAuthenticated) 
    //     {
    //       alert("Authorization Complete");
    //       <Component {...props} />
    //     }
    //     else
    //     {
    //       alert("You Are Not Authorized");
    //       <Redirect to={{
    //         pathname: '/home',
    //         state: { from: props.location }
    //       }} />
    //     }
    //   )} /> );
    return (
      <>
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
          <Switch location={this.props.location}>
            <Route path='/home' component={Home} />
            <Route exact path='/aboutus' component={AboutUs} />
            <Route exact path='/menu' component={() => <Menu appartments={this.props.appartments}/> } />
            <Route path='/signin' component={() => <SignIn auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} /> } />
            <Route path='/menu/:appartmentId' component={AppartWithId} />
            <PrivateRoute path='/dashboard' component={() => < AdminDashboard auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser}
          />} />
            <PrivateRoute path='/addAppart' component={() => 
              <AddAppart postAppartment={this.props.postAppartment} /> //postAppartments={this.props.postAppartments}/>
            }/>
            <PrivateRoute path='/editAppart' />
            <PrivateRoute path='/delAppart' />
           <Redirect to="/home"/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
