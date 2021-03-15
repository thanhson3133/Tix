import React, { Component } from "react";
import "./style.css";
export default class index extends Component {
   render() {
      return (
         <div id="news">
            <div className="container pb-5 ">
               <div className="text-center">
                  <img
                     width="100%"
                     height="100px"
                     src="https://tix.vn/app/assets/img/icons/back-news.png"
                     alt=""
                  />
               </div>
               <ul className="nav nav-tabs navCenter" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                     <a
                        className="nav-link nav__unactive  active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home1"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                     >
                        Tin tức
                     </a>
                  </li>
                  <li className="nav-item" role="presentation">
                     <a
                        className="nav-link nav__unactive"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile1"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                     >
                        Khuyến mại
                     </a>
                  </li>
               </ul>
               <div className="tab-content" id="myTabContent">
                  <div
                     className="tab-pane fade show active"
                     id="home1"
                     role="tabpanel"
                     aria-labelledby="home-tab"
                  >
                     <div className="row">
                        <div className="col-6 p-2">
                           <img
                              src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg"
                              alt=""
                              width="100%"
                           />
                           <h5 className="newTitle">
                              <a href="#news">
                              “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                              </a>
                           </h5>
                           <p className="subTitle">
                           Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!
                           </p>
                           <i className="fas fa-thumbs-up"></i>
                           <span className="pl-1 pr-2">1</span>
                           <i className="fas fa-comment"></i>
                           <span className="pl-1 pr-2">0</span>
                        </div>
                        <div className="col-6 p-2">
                           <img
                              src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg"
                              alt=""
                              width="100%"
                           />
                           <h5 className="newTitle">
                              <a href="#news">
                              Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                              </a>
                           </h5>
                           <p>
                           Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
                           </p>
                           <i className="fas fa-thumbs-up"></i>
                           <span className="pl-1 pr-2">1</span>
                           <i className="fas fa-comment"></i>
                           <span className="pl-1 pr-2">0</span>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-6 col-md-4 p-2">
                           <img
                              src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                              alt=""
                              width="100%"
                           />
                           <h5 className="newTitle">
                              <a href="#news">
                              Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu
                              </a>
                           </h5>
                           <p>
                           Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong 
                           </p>
                           <i className="fas fa-thumbs-up"></i>
                           <span className="pl-1 pr-2">1</span>
                           <i className="fas fa-comment"></i>
                           <span className="pl-1 pr-2">0</span>
                        </div>
                        <div className="col-6 col-md-4 p-2">
                           <img
                              src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                              alt=""
                              width="100%"
                           />
                           <h5 className="newTitle">
                              <a href="#news">
                              NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC...
                              </a>
                           </h5>
                           <p>
                           Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng
                           </p>
                           <i className="fas fa-thumbs-up"></i>
                           <span className="pl-1 pr-2">1</span>
                           <i className="fas fa-comment"></i>
                           <span className="pl-1 pr-2">0</span>
                        </div>
                        <div className="col-12 col-md-4 p-2">
                           <div className="d-flex align-items-center p-2">
                              <img
                                 src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                                 alt=""
                                 width="60px"
                                 height="60px"
                              />
                              <span className="px-2 newTitle">
                                 <a href="#news">
                                 Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher...
                                 </a>
                              </span>
                           </div>
                           <div className="d-flex align-items-center p-2">
                              <img
                                 src="https://s3img.vcdn.vn/123phim/2020/08/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999321682.png"
                                 alt=""
                                 width="60px"
                                 height="60px"
                              />
                              <span className="px-2 newTitle">
                                 <a href="#news">
                                 Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng
                                 </a>
                              </span>
                           </div>
                           <div className="d-flex align-items-center p-2">
                              <img
                                 src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
                                 alt=""
                                 width="60px"
                                 height="60px"
                              />
                              <span className="px-2 newTitle">
                                 <a href="#news">
                                 Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng
                                 </a>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div
                     className="tab-pane fade"
                     id="profile1"
                     role="tabpanel"
                     aria-labelledby="profile-tab"
                  >
                     <div className="row">
                        <div className="col-6 p-2">
                           <img
                              src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg"
                              alt=""
                              width="100%"
                           />
                           <h5 className="newTitle">
                              <a href="#news">
                              Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                              </a>
                           </h5>
                           <p>
                           Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
                           </p>
                           <i className="fas fa-thumbs-up"></i>
                           <span className="pl-1 pr-2">1</span>
                           <i className="fas fa-comment"></i>
                           <span className="pl-1 pr-2">0</span>
                        </div>
                        <div className="col-6 p-2">
                           <img
                              src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg"
                              alt=""
                              width="100%"
                           />
                           <h5 className="newTitle">
                              <a href="#news">
                              “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                              </a>
                           </h5>
                           <p className="subTitle">
                           Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!
                           </p>
                           <i className="fas fa-thumbs-up"></i>
                           <span className="pl-1 pr-2">1</span>
                           <i className="fas fa-comment"></i>
                           <span className="pl-1 pr-2">0</span>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-6 col-md-4 p-2">
                           <img
                              src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                              alt=""
                              width="100%"
                           />
                           <h5 className="newTitle">
                              <a href="#news">
                              Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu
                              </a>
                           </h5>
                           <p>
                           Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong 
                           </p>
                           <i className="fas fa-thumbs-up"></i>
                           <span className="pl-1 pr-2">1</span>
                           <i className="fas fa-comment"></i>
                           <span className="pl-1 pr-2">0</span>
                        </div>
                        <div className="col-6 col-md-4 p-2">
                           <img
                              src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                              alt=""
                              width="100%"
                           />
                           <h5 className="newTitle">
                              <a href="#news">
                              NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC...
                              </a>
                           </h5>
                           <p>
                           Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng
                           </p>
                           <i className="fas fa-thumbs-up"></i>
                           <span className="pl-1 pr-2">1</span>
                           <i className="fas fa-comment"></i>
                           <span className="pl-1 pr-2">0</span>
                        </div>
                        <div className="col-12 col-md-4 p-2">
                           <div className="d-flex align-items-center p-2">
                              <img
                                 src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                                 alt=""
                                 width="60px"
                                 height="60px"
                              />
                              <span className="px-2 newTitle">
                                 <a href="#news">
                                 Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher...
                                 </a>
                              </span>
                           </div>
                           <div className="d-flex align-items-center p-2">
                              <img
                                 src="https://s3img.vcdn.vn/123phim/2020/08/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999321682.png"
                                 alt=""
                                 width="60px"
                                 height="60px"
                              />
                              <span className="px-2 newTitle">
                                 <a href="#news">
                                 Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng
                                 </a>
                              </span>
                           </div>
                           <div className="d-flex align-items-center p-2">
                              <img
                                 src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
                                 alt=""
                                 width="60px"
                                 height="60px"
                              />
                              <span className="px-2 newTitle">
                                 <a href="#news">
                                 Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng
                                 </a>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div
                     className="tab-pane fade"
                     id="discount"
                     role="tabpanel"
                     aria-labelledby="profile-tab"
                  >
                     <h6 className="text-center">Chưa có thông tin</h6>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
