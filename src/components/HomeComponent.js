import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import CarouselComp from './CarouselComponent';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
function Home(props) {
    return(
      <>
        <Header />
        <div className="container col-12">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home" active>Home</Link></BreadcrumbItem>
          </Breadcrumb>
        </div>
        <CarouselComp />
        <Footer />
      </>
    );
}

export default Home;
