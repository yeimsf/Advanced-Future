import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Button ,Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
          };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
      }
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container containerChange">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-5" href="/">Advanced Future</NavbarBrand>
                        <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader className="bg-secondary" toggle={this.toggleModal}>Login</ModalHeader>
                            <ModalBody className="bg-dark text-white">
                                <Form onSubmit={this.handleLogin}>
                                    <FormGroup>
                                        <Label htmlFor="username">Username</Label>
                                        <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Password</Label>
                                        <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}  />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}  />
                                            Remember me
                                        </Label>
                                    </FormGroup>
                                    <Button className="bg-success" type="submit" value="submit" color="primary">Login</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/buy'>Buy</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to=''>Sell</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/aboutus'>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to=''>العربية</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                    <Nav className="offset-sm-5" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
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

export default Header;
