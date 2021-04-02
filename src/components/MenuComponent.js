import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderAppartments({appartment}) {
            return(
                <div className="col-12">
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card>
                            <Link to={`/menu/${appartment._id}`}>
                                <CardImg top src={baseUrl + appartment.image[0].image} alt={appartment.areaName} />
                                <CardImgOverlay>
                                  <CardTitle className="customText">{appartment.areaName}</CardTitle>
                                </CardImgOverlay>
                            </Link>
                        </Card>
                    </FadeTransform>
                </div>
            );
    }
const Menu = (props) => {
    const menu = props.appartments.appartments.map((appartment) => {
      return (
        <div key={appartment._id} className="col-12 col-md-5 m-1">
          <RenderAppartments appartment={appartment} />
        </div>
      );
    });
  if (props.appartments.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.appartments.errMess) {
    return(
      <div className="container">
        <div className="row">
          <h4>{props.appartments.errMess}</h4>
        </div>
      </div>
    );
  }
  else {
    return (
      <>
      <Header auth={props.auth}
          loginUser={props.loginUser}
          logoutUser={props.logoutUser}/>
      <div className="container">
        <div className="row">
          <Breadcrumb style={{ background: "transparent" }}>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active style={{ color: "#FFF" }}>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {menu}
        </div>
      </div>
      <Footer />
      </>
    );
  }
}
export default Menu
