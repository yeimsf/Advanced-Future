import React from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
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
