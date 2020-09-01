import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer  from './FooterComponent';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/LOGO.jpeg';
import '../App.css';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <>
      <Header 
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          />
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="container">
          <div className="col-12">
              <h3>About Us</h3>
              <hr />
          </div>
          <div className="container">
            <Card className="cardBack">
              <CardBody>
                <div className="row ">
                  <div className="col-12 col-sm-12">
                    <CardTitle>Advanced Future</CardTitle>
                  </div>
                  <div className="col-12 col-sm-8">
                    <CardText className="fonts">Our Company Doesn't Rest, We Always Have Something That Matches The Needs Of Someone, We Provide And You Decide</CardText>
                    <CardText><a href="/"><i className="fa fa-facebook"></i> Facebook Account</a> <br></br></CardText>
                    <CardText><a href="/"><i className="fa fa-instagram"></i> Instagram Account</a> <br></br></CardText>
                    <CardText><a href="/"><i className="fa fa-whatsapp"></i> Whatsapp Account</a> <br></br> </CardText>
                    <CardText><a href="/"><i className="fa fa-phone"></i> For More Information Call Us</a> </CardText>
                  </div>
                  <div className="col-12 col-sm-4">
                    <CardImg top width="100%" src={logo} alt="Card image cap" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="row row-content">
            <div className="col-12">
              <h3>Location Information</h3>
            </div>
            <div className="col-12 col-sm-12 offset-sm-1">
              <h5>Our Address</h5>
              <p>Address Goes Here</p>
              <p><i className="fa fa-phone"></i> +201121053405  <i className="fa fa-fax"></i> +201092646968  <i className="fa fa-envelope"></i> <a href="mailto:Future@gmail.com">Future@gmail.com</a></p>
            </div>
            <div className="col-12 offset-sm-1">
              <div className="btn-group" role="group">
                <a role="button" className="btn btn-primary" href="tel:+201121053405"><i className="fa fa-phone"></i> Call</a>
                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                <a role="button" className="btn btn-success" href="mailto:Future@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }
}
