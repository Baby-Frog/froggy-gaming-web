import React from 'react';
import "./AdminAcc.css"

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
            <div className="admin-info">
                <span>1</span>
                <span>Khôi</span>
                <span>Admin</span>
                <span>Online</span>
                <span>Actions</span>
                </div>
            <div className="admin-info">
                <span>2</span>
                <span>Minh</span>
                <span>Admin</span>
                <span>Online</span>
                <span>Actions</span>
                </div>
            <div className="admin-info">
                <span>3</span>
                <span>Việt</span>
                <span>Admin</span>
                <span>Online</span>
                <span>Actions</span>
                </div>
            <div className="admin-info">
                <span>4</span>
                <span>Nam</span>
                <span>Admin</span>
                <span>Online</span>
                <span>Actions</span>
                </div>

            </div>
        </div>
    );
};

export default AdminAcc;