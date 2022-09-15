import React from "react";
import "./AdminAcc.css";

const AdminAcc = () => {
  return (
    <div className="admin-acc">
      <div className="admin-acc__table">
        <p>Admin List</p>
        <div className="admin-info">
          <span>Id</span>
          <span>User</span>
          <span>Role</span>
          <span>Status</span>
          <span>Actions</span>
        </div>
      </div>
    </div>
  );
};

export default AdminAcc;
