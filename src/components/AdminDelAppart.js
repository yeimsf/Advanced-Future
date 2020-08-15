import React from 'react';
import AdminHeader from './AdminHeader';
import Footer from './FooterComponent';
import AdminFooter from './AdminFooter';
import CarouselComp from './CarouselComponent';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import CardComp from './CardComponent';

function DelAppart (props) {
    return(
      <>
        <AdminHeader />
        <div className="container">
          <h3>Enter Appartment Info</h3>
          <hr />
          <CardComp appartments={this.props.appartments.appartments}/>
        </div>
        <AdminFooter />
      </>
    );
}

export default DelAppart;
