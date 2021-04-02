import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';

class AdminHeader extends Component{
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.logoutUser();
    return <Redirect to="/home" />
  }
  render()
  {
    return(
      <div>
        <Navbar dark stickey-top expand="md">
          <div className="row containerChange col-11">
            <NavbarBrand className="mr-5" href="/">Advanced Future</NavbarBrand>
            <Nav navbar>
            <NavItem>
              <NavLink className="nav-link"  to='/dashboard'>Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to='/addAppart'>Add Appartment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link"  to='/editAppart'>Edit Appartment</NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to='/delAppart'>Delete Appartment</NavLink>
            </NavItem>
            </Nav>
          </div>
          <Button onClick={this.handleLogout}>
            <NavItem>
              <NavLink className="nav-link" to='/home'><span className="fa fa-sign-out fa-lg"></span>Sign-Out</NavLink>
            </NavItem>
          </Button>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Advanced Future Real-Estate</h1>
                <h5>Everyone Has An X Factor, Ours Is Real Estate</h5>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default AdminHeader;
