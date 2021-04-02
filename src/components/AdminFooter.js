import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Footer extends Component{
  constructor(props){
    super(props);
  }
  render()
  {
    return(
      <div className="footer" id="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/dashboard'>Admin Dashboard</Link></li>
                        <li><Link to='/addAppart'>Add Appartment</Link></li>
                        <li><Link to='/delAppart'>Delete Appartment</Link></li>
                        <li><Link to='/editAppart'>Edit Appartment</Link></li>
                    </ul>
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
export default Footer;
