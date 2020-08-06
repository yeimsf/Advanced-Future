import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer  from './FooterComponent';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {  Card, CardImg, CardImgOverlay, CardTitle, Button, Form, FormGroup, Label,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/LOGO.jpeg';
import '../App.css';

class SignIn extends Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogin(event) {
    this.props.loginUser({username: this.username.value, password: this.password.value});
    event.preventDefault();
  }
  handleLogout() {
    this.props.logoutUser();
  }
  render(){
    return(
      <div className="container">
        <Card className="container signin cardborder">
          <CardImg className="" src={logo} alt="Advanced Future"/>
          <h5 className="align-self-center">Hi Admin!, Please Log-in</h5>
          <Form onSubmit={this.handleLogin}>
                  <Input type="text" id="username" name="username" placeholder="Username" innerRef={(input) => this.username = input} />
                  <Input type="password" id="password" name="password" placeholder="Password" innerRef={(input) => this.password = input}  />
              <div className="row">
                <Button className="offset-sm-4 col-sm-4 buttonmr bg-primary" type="submit" value="submit" color="primary">Login</Button>
              </div>
          </Form>
        </Card>
      </div>
    );
  }
}
export default SignIn;
