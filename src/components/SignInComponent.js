import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer  from './FooterComponent';
import AdminMain from './AdminMain';
import Dashboard from './AdminDashboard';
import Main from './MainComponent';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {  Card, CardImg, CardImgOverlay, CardTitle, Button, Form, FormGroup, Label,
  Input,
} from 'reactstrap';
import { Link , Redirect , useHistory , withRouter } from 'react-router-dom';
import logo from '../assets/Images/LOGO.jpeg';
import '../App.css';

class SignIn extends Component {

  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange(){
    let path = '/admin/dashboard';
    this.props.history.push(path);
  }
  handleLogin(event) {
    var success = 0;
    this.props.loginUser({username: this.username.value, password: this.password.value});
    if(this.props.auth.isAuthenticated !== null)
    {
      if(this.props.auth.isAuthenticated)
      {
        alert("You Are Successfully Signed In");
      }
      else if(!this.props.auth.isAuthenticated && success === 1)
      {
        alert("You Are Not Authorized");
      }
      else
      {
        alert("Enter Credentials Again");
      }
    }
    success+=1;
    event.preventDefault();
  }
  handleLogout() {
    this.props.logoutUser();
  }
  render(){
    return(
      <>
      <Header auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          />
      <div className="container col-12">
        <Card className="container signin cardborder">
          <div className="row">
            <CardImg className="appMargins" src={logo} alt="Advanced Future"/>
          </div>
          <Form onSubmit={this.handleLogin}>
              <div className="row">    
                <Input className="formBack" type="text" id="username" name="username" placeholder="Username" innerRef={(input) => this.username = input} />
              </div>
              <div className="row">
                <Input className="formBack" type="password" id="password" name="password" placeholder="Password" innerRef={(input) => this.password = input}  />
              </div>
              <div className="row">
                <Button className="offset-sm-4 col-sm-4 buttonmr formBackButton" type="submit" value="submit">Login</Button>
              </div>
          </Form>
        </Card>
      </div>
      <Footer />
      </>
    );
  }
}
export default withRouter(SignIn);
