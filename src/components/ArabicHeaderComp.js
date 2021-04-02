import React, { Component } from 'react';
import { CardImg, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Images/LOGO.jpeg';

class ArabicHeaderComp extends Component {
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
        return (
            <div dir="rtl">
                <Navbar dark expand="md">
                    <div className="container containerChange">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-5" href="/">Advanced Future</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/arabicHome'>الصفحة الرئيسية</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/arabicMenu'>القائمة</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/arabicAboutUs'>من نحن</NavLink>
                                </NavItem>
                                {/* <NavItem>
                                <NavLink className="nav-link" to='/dashboard'>لوحة التحكم</NavLink>
                            </NavItem> */}
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'>English</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        {/* <Nav navbar>
                            <Button><NavItem>
                                <NavLink className="nav-link" to='/signin'><span className="fa fa-sign-in fa-lg"></span> تسجيل الدخول</NavLink>
                            </NavItem>
                            </Button>
                        </Nav> */}
                    </div>
                </Navbar>
                <Jumbotron dir="rtl">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-8">
                                    <h2>المستقبل للتسويق العقاري و المقاولات و التوريدات</h2>
                       	    	    <h5 className="offset-lg-4">كل شخص لديه عامل مميز، عاملنا هو تسويق العقارات</h5>
                            </div>
                            <div className="col-12 col-sm-4">
                                <CardImg className="temp" src={logo} alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default ArabicHeaderComp;
