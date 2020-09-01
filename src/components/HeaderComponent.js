import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Button ,Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
          };
        this.toggleNav = this.toggleNav.bind(this);
        }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container containerChange">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-5" href="/">Advanced Future</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/menu'>Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/aboutus'>About Us</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink className="nav-link" to='/dashboard'>Dashboard</NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink className="nav-link" to='/arabicHome'>العربية</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                        {/* <Nav className="" navbar>
                            <Button><NavItem>
                                <NavLink className="nav-link" to='/signin'><span className="fa fa-sign-in fa-lg"></span> Login</NavLink>
                            </NavItem>
                            </Button>
                        </Nav> */}
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-12">
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

export default Header;
