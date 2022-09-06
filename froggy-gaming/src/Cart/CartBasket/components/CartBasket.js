import React from 'react';
import Money from "../../asset/images/tien-mat.png";
import InternetMoney from "../../asset/images/internet-bank.png";
import Card from "../../asset/images/mastercard.png";
import Visa from "../../asset/images/visa.png";
import "../styles/CartBasket.css";

const CartBasket = () => {
    return (
        <div className="cart-checkout">
            <div className="cart-product">
                <div className="cart-process">
                    <div className="process active">
                        <span>1.Chọn sản phẩm</span>
                    </div>
                    <div className="process active">
                        <span>2.Xác nhận đơn hàng</span>
                    </div>
                    <div className="process">
                        <span>3.Thanh toán</span>
                    </div>
                </div>
                <div className="cart-header">
                    <div className="cart-title">
                        THÔNG TIN SẢN PHẨM
                    </div>
                    <span>Bạn không có sản phẩm nào trong giỏ hàng </span>
                </div>
                
            </div>
            <div className="cart-total__prices">
                <div className="cart-prices">
                    <div className="cart-prices__title">
                        THÔNG TIN GIỎ HÀNG
                    </div>
                     <div>
                        Số lượng sản phẩm
                        <span className="count">0</span>
                     </div>
                     <div>
                        Tổng chi phí
                        <span className="prices">0 đ</span>
                     </div>
                     <div className="prices-vat">
                        Đã bảo gồm VAT (nếu có )
                     </div>
                     <div className="button-checkout">
                     
                        <a href="https://www.google.com/" className="go-checkout">
                            <button >Xác nhận đơn hàng</button>
                        </a>
                        <a href="https://www.google.com/" className="delete-cart" >
                        <button>Xóa giỏ hàng</button>
                        </a>
                       
                    </div>
                </div>
                <div className="cart-info">
                    <div className="info">
                        <div><svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#27AE60"></path><path d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z" fill="white" stroke="white"></path></svg>
                            <span>Hỗ trợ trả góp 0%, trả trước 0đ
               </span>

                        </div>
                        <div><svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#27AE60"></path><path d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z" fill="white" stroke="white"></path></svg>
                            <span>Hoàn tiền 200% khi phát hiện hàng giả
              </span>

                        </div>
                        <div><svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#27AE60"></path><path d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z" fill="white" stroke="white"></path></svg>
                            <span>Giao hàng nhanh 3H nội thành Hà Nội
              </span>

                        </div>
                        <div><svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#27AE60"></path><path d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z" fill="white" stroke="white"></path></svg>
                            <span>Giao hàng từ 5 - 7 ngày toàn quốc
              </span>

                        </div>
                        <div><svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#27AE60"></path><path d="M7.74909 10.7374L6.01159 8.99993L5.41992 9.58743L7.74909 11.9166L12.7491 6.9166L12.1616 6.3291L7.74909 10.7374Z" fill="white" stroke="white"></path></svg>
                            <span>Đội ngũ kĩ thuật hỗ trợ online 7/7
              </span>

                        </div>
                       
                    </div>
                    <div className="bank">
                    <img src={Money} alt="" />
                    <img src={InternetMoney} alt="" />
                    <img src={Card} alt="" />
                    <img src={Visa} alt="" />
                    </div>
                </div>
            </div>
        </div>
            
    );
};

export default CartBasket;