import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Button ,Input, Label} from 'reactstrap';
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
          <div className="container containerChange">
            <NavbarBrand className="mr-5" href="/">Advanced Future</NavbarBrand>
            <Button className="bg-secondary" onClick={this.handleLogout}><NavLink className="nav-link">Sign-Out</NavLink></Button>
          </div>
        </Navbar>
        <Nav navbar>
          <NavItem>
            <NavLink className="nav-link"  to='#'>Dashboard</NavLink>
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

export default AdmingHeader;
