import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderAppartments({appartment}) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <FadeTransform in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card>
                            <Link to={`/menu/${appartment._id}`} >
                            <CardImg top src={baseUrl + appartment.image} alt={appartment.name} />
                            <CardImgOverlay>
                              <CardTitle>{appartment.shortDescription}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </FadeTransform>
                </div>
            );
    }
const Menu (props) => {
  const menu = props.appartments.appartments.map((appartment) => {
    return (
      <div key={appartment._id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={appartment} />
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
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
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
    );
  }
}
