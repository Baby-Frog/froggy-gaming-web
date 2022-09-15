import React from 'react';
import AdminAcc from '../AdminAcc/AdminAcc';
import AdminNav from '../AdminNav/AdminNav';
import AdminTable from '../AdminTable/AdminTable';


import "./AdminContainer.css"

const AdminContainer = () => {
    return (
        <div className="admin">
          <AdminNav></AdminNav>
          {/* <AdminTable></AdminTable> */}
           <AdminAcc></AdminAcc>
         
        </div>
    );
};

export default AdminContainer;