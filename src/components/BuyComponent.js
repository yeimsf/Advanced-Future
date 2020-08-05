import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import CardComp from './CardComponent';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
function Buy(props) {
    return(
      <>
        <Header />
        <div className="container col-12">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem><Link to="/buy" active>Buy</Link></BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Footer />
      </>
    );
}

export default Buy;
