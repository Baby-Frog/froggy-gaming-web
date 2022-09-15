import React from 'react';
import "./AdminNav.css"



const AdminNav = () => {
    return (
        <div>
            <div className="ad-nav">
                <span>Froggy Gaming</span>
                <div className="ad-nav__product">
                    <a href="https://www.google.com/">
                        <i class="fa-sharp fa-solid fa-plus"></i>
                        Add Product
                    </a>
                    <a href="https://www.google.com/">
                        <i class="fa-solid fa-minus"></i>
                         Delete Product
                    </a>
                </div>
                <div className="ad-nav__info">
                     <div className="ad-nav__title">
                        Account 
                     </div>
                    <div className="ad-nav__product">
                        <a href="https://www.google.com/">
                            <i class="fa-solid fa-user"></i>
                           Admin
                        </a>
                    
                     </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNav;