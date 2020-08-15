import React from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
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
