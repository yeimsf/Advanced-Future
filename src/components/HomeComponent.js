import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import CarouselComp from './CarouselComponent';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
function Home(props) {
    return(
      <>
        <Header auth={props.auth}
          loginUser={props.loginUser}
          logoutUser={props.logoutUser}
          />
        <div className="container col-12">
            <CarouselComp />
        </div>
        <Footer />
      </>
    );
}

export default Home;
