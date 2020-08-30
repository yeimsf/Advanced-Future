import React , { Component } from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminCardComp from './AdminCard';

class DelAppart extends Component {
 constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <>
        <AdminHeader auth={this.props.auth}
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          />
        <div className="container">
          <h3>Enter ID Of Appartment To Be Deleted</h3>
          <hr />
          <AdminCardComp appartments={this.props.appartments} delAppartment={this.props.delAppartment}/>
        </div>
        <AdminFooter />
      </>
    );
  }
}
export default DelAppart;
