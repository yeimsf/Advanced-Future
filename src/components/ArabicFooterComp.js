import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class ArabicFooterComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-8">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/menu'>Menu</Link></li>
                                <li><Link to='/aboutus'>About Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus fon"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/El.MostaqbalcompanyEG/"><i className="fa fa-facebook fon"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fon"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fon"></i></a>
                                <a className="btn btn-social-icon btn-google" href="https://m.youtube.com/channel/UC-xRZil9ooRUsrfdcXCLEGA"><i className="fa fa-youtube fon"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o fon"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="">
                            <p>© Advanced Future Real-Estate</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ArabicFooterComp;
