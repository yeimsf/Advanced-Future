import React from 'react';
import AdminHeader from './AdminHeader';
import Footer from './FooterComponent';
import AdminFooter from './AdminFooter';
import CarouselComp from './CarouselComponent';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
function Dashboard(props) {
    return(
      <>
        <AdminHeader />
        <div className="container">
          <h3>Enter Appartment Info</h3>
          <hr />
        </div>
        <AdminFooter />
      </>
    );
}

export default Dashboard;
