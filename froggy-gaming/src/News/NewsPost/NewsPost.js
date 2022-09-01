import React from 'react';
import SectionDivider from '../../global/sectionDivider/components/SectionDivider';
import News from "../assets/images/News.png"
import News1 from "../assets/images/News1.png"
import News2 from "../assets/images/News2.png"
import News3 from "../assets/images/News3.png"
import Review from "../assets/images/review.png"
import Review1 from "../assets/images/review1.jpg"
import Review2 from "../assets/images/review2.png"
import "./styles/NewsPost.css"
const NewsPost = () => {
    return (
       <div className="news">
        <div className="news-left">
                <SectionDivider sectionContent={"Bài viết mới nhất"}></SectionDivider>
 <div className="news-content">
                    <div className="news-post">
                        <div className="news-thumb">
                            <a href="http://google.com">
                                <img  className src={News} alt="" />
                            </a>
                        </div>
                        <div className="news-title">
                            <a href="http://google.com">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam natus ut quibusdam doloribus neque dolorem facere excepturi voluptate tenetur esse quis molestias a ducimus, id assumenda totam, nam ea quam!
                            </a>
                        </div>
                        <div className="new-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsam laudantium. Explicabo ab, harum officiis vero dolore unde, minus, quas dolorem excepturi corporis dolores soluta dignissimos facilis quos repellendus ipsam.
                        </div>
                    </div>
                    <div className="news-post">
                        <div className="news-thumb">
                            <a href="http://google.com">
                                <img  className src={News1} alt="" />
                            </a>
                        </div>
                        <div className="news-title">
                            <a href="http://google.com">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam natus ut quibusdam doloribus neque dolorem facere excepturi voluptate tenetur esse quis molestias a ducimus, id assumenda totam, nam ea quam!
                            </a>
                        </div>
                        <div className="new-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsam laudantium. Explicabo ab, harum officiis vero dolore unde, minus, quas dolorem excepturi corporis dolores soluta dignissimos facilis quos repellendus ipsam.
                        </div>
                    </div>
                    <div className="news-post">
                        <div className="news-thumb">
                            <a href="http://google.com">
                                <img  className src={News2} alt="" />
                            </a>
                        </div>
                        <div className="news-title">
                            <a href="http://google.com">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam natus ut quibusdam doloribus neque dolorem facere excepturi voluptate tenetur esse quis molestias a ducimus, id assumenda totam, nam ea quam!
                            </a>
                        </div>
                        <div className="new-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsam laudantium. Explicabo ab, harum officiis vero dolore unde, minus, quas dolorem excepturi corporis dolores soluta dignissimos facilis quos repellendus ipsam.
                        </div>
                    </div>
                    <div className="news-post">
                        <div className="news-thumb">
                            <a href="http://google.com">
                                <img  className src={News3} alt="" />
                            </a>
                        </div>
                        <div className="news-title">
                            <a href="http://google.com">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam natus ut quibusdam doloribus neque dolorem facere excepturi voluptate tenetur esse quis molestias a ducimus, id assumenda totam, nam ea quam!
                            </a>
                        </div>
                        <div className="new-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsam laudantium. Explicabo ab, harum officiis vero dolore unde, minus, quas dolorem excepturi corporis dolores soluta dignissimos facilis quos repellendus ipsam.
                        </div>
                    </div>
                </div>
                <div className="news-readmore">
                    <a href="http://google.com">
                        Xem thêm bài viết 
                    </a>
                </div> 
                
        </div>
        <div className="news-right">
               <SectionDivider sectionContent={"Follow  "}></SectionDivider>
                <div className="news-social">
                    <div className="social-items">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V65H65V0H0ZM43.0006 17.8881H37.92C36.9137 17.8881 35.8981 18.9281 35.8981 19.7019V24.8824H42.9906C42.705 28.8549 42.1187 32.4874 42.1187 32.4874H35.8619V55H26.5381V32.485H21.9994V24.9094H26.5381V18.7157C26.5381 17.5831 26.3087 10.0001 36.0913 10.0001H43.0007V17.8881H43.0006Z" fill="#005EC4"></path></svg>
                        <a href="https://www.facebook.com/thanhnam092/">facebook.com/froggy-gaming</a>
                    </div>
                    <div className="social-items">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V65H65V0H0ZM50.393 23.3227C50.4106 23.7189 50.4196 24.1171 50.4196 24.517C50.4196 36.7174 41.1336 50.785 24.152 50.785C18.9383 50.785 14.0854 49.2569 9.99986 46.6369C10.7221 46.7227 11.4569 46.7664 12.2023 46.7664C16.5277 46.7664 20.5084 45.2906 23.6683 42.8139C19.6283 42.7397 16.2186 40.0704 15.0436 36.4024C15.6076 36.5106 16.186 36.5686 16.7809 36.5686C17.6229 36.5686 18.4386 36.4551 19.2133 36.2446C14.99 35.3961 11.8074 31.665 11.8074 27.192C11.8074 27.153 11.8074 27.1143 11.8083 27.0757C13.0529 27.7671 14.4763 28.1826 15.9899 28.2306C13.5124 26.575 11.883 23.749 11.883 20.5463C11.883 18.8541 12.3383 17.2684 13.1331 15.9046C17.6864 21.4904 24.4893 25.1657 32.1621 25.5511C32.0046 24.8751 31.9226 24.1704 31.9226 23.447C31.9226 18.3487 36.0566 14.2151 41.1549 14.2151C43.8104 14.2151 46.2099 15.3361 47.8939 17.1303C49.9966 16.7167 51.9726 15.948 53.7564 14.8901C53.0673 17.0461 51.6034 18.855 49.6971 19.9979C51.5649 19.7746 53.344 19.2781 54.9997 18.5439C53.7623 20.3951 52.1971 22.0213 50.393 23.3227Z" fill="#68AEFA"></path></svg>
                        <a href="https://www.facebook.com/thanhnam092/">twitter.com/froggy-gaming</a>
                    </div>
                    <div className="social-items">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V65H65V0H0ZM54.2133 43.1373C53.6617 45.5301 51.7043 47.297 49.348 47.5601C43.7703 48.182 38.123 48.1861 32.4977 48.182C26.8747 48.1861 21.2274 48.182 15.648 47.5601C13.2911 47.2971 11.3339 45.5301 10.7851 43.1373C10 39.7306 10 36.0087 10 32.4999C10 28.991 10.0093 25.2709 10.7937 21.8641C11.3424 19.469 13.3004 17.7044 15.6543 17.4414C21.2343 16.8179 26.884 16.8154 32.507 16.8179C38.1294 16.8156 43.7773 16.8179 49.3567 17.4414C51.7136 17.7044 53.6709 19.469 54.222 21.8641C55.007 25.2709 55 28.991 55 32.4999C55 36.0087 54.9977 39.7306 54.2133 43.1373Z" fill="#F9495F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6934 39.4855C31.4744 37.0062 36.2131 34.5477 40.9988 32.0667C36.1992 29.5624 31.4611 27.0922 26.6934 24.6042V39.4855Z" fill="#F9495F"></path></svg>
                        <a href="https://www.facebook.com/thanhnam092/">youtube.com/froggy-gaming</a>
                    </div>
                    <div className="social-items">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M43.6479 14.8997H21.3538C17.7957 14.8997 14.9004 17.7948 14.9004 21.3531V43.647C14.9004 47.2057 17.7957 50.1011 21.3538 50.1011H43.6479C47.2065 50.1011 50.1018 47.2057 50.1018 43.647V21.3531C50.1018 17.795 47.2065 14.8997 43.6479 14.8997ZM32.5004 44.0882C26.1113 44.0882 20.9125 38.8895 20.9125 32.4997C20.9125 26.1106 26.1113 20.9118 32.5004 20.9118C38.8902 20.9118 44.089 26.1106 44.089 32.4997C44.089 38.8895 38.8902 44.0882 32.5004 44.0882ZM44.4618 23.3081C42.9492 23.3081 41.7192 22.0781 41.7192 20.5663C41.7192 19.0543 42.9492 17.8243 44.4618 17.8243C45.9736 17.8243 47.2036 19.0543 47.2036 20.5663C47.2036 22.0782 45.9736 23.3081 44.4618 23.3081Z" fill="#FF8F02"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5006 25.8088C28.8122 25.8088 25.8086 28.811 25.8086 32.4994C25.8086 36.1892 28.8122 39.1921 32.5006 39.1921C36.1904 39.1921 39.1918 36.1892 39.1918 32.4994C39.1918 28.811 36.1904 25.8088 32.5006 25.8088Z" fill="#FF8F02"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V65H65V0H0ZM54.9971 43.647C54.9971 49.9064 49.9064 54.9971 43.6471 54.9971H21.353C15.0943 54.9971 10.0029 49.9064 10.0029 43.647V21.353C10.0029 15.0943 15.0943 10.0029 21.353 10.0029H43.6471C49.9064 10.0029 54.9971 15.0943 54.9971 21.353V43.647Z" fill="#FF8F02"></path></svg>
                        <a href="https://www.facebook.com/thanhnam092/">instagram.com/froggy-gaming</a>
                    </div>
                </div>
                <div className="news-review">
                    <SectionDivider sectionContent={"Review"}></SectionDivider>
                    <div className="review-post">
                        <div className="review-thumb">
                            <a href="http://google.com">
                                <img src={Review} alt="Màn hình đỉnh cao" />
                            </a>
                        </div>
                        <div className="review-title">
                            <a href="http://google.com">
                                MÀN HÌNH MSI MD241P ULTRAMARINE : THIẾT KẾ ĐỈNH CAO, LỰA CHỌN TINH TẾ!
                            </a>
                        </div>
                    </div>
                    <div className="review-post">
                        <div className="review-thumb">
                            <a href="http://google.com">
                                <img src={Review1} alt="Màn hình đỉnh cao" />
                            </a>
                        </div>
                        <div className="review-title">
                            <a href="http://google.com">
                                MÀN HÌNH MSI MD241P ULTRAMARINE : THIẾT KẾ ĐỈNH CAO, LỰA CHỌN TINH TẾ!
                            </a>
                        </div>
                    </div>
                        <div className="review-post">
                            <div className="review-thumb">
                                <a href="http://google.com">
                                <img src={Review2} alt="Màn hình đỉnh cao" />
                                </a>
                            </div>
                            <div className="review-title">
                                <a href="http://google.com">
                                    MÀN HÌNH MSI MD241P ULTRAMARINE : THIẾT KẾ ĐỈNH CAO, LỰA CHỌN TINH TẾ!
                                </a>
                            </div>
                        </div>
                    <div className="news-readmore">
                        <a href="http://google.com">
                            Xem thêm bài viết
                        </a>
                    </div> 
                </div>

        </div>
       </div>
    );
};

export default NewsPost;