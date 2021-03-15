import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
export default class index extends Component {
   render() {
      const settings1 = {
         rows: 1,
         dots: false,
         infinite: true,
         speed: 1000,
         arrows: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
      };
      return (
         <div className="aboutApp" id="app">
            <div className="container">
               <div className="row">
                  <div className="col-6 aboutLeft">
                     <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                     <p className="my-4">
                        Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm
                        điểm rạp và đổi quà hấp dẫn.
                     </p>
                     <button className=" btn my-4 app-free">
                        App miễn phí - Tải về ngay!
                     </button>
                     <p>
                        TIX có hai phiên bản: {" "} 
                        <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">
                           IOS & {" "}
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                           Android
                        </a>
                     </p>
                  </div>
                  <div className="col-6 aboutRight">
                     <img
                        src="https://tix.vn/app/assets/img/icons/mobile.png"
                        alt=""
                        width="100%"
                        className="rearPhone img-responsive"
                     />
                     <div className="slideScreen">
                        <Slider {...settings1}>
                           <div>
                              <img
                                 src="https://tix.vn/app/assets/img/icons/slide/slide1.jpg"
                                 alt=""
                                 width="100%"
                              />
                           </div>
                           <div>
                              <img
                                 src="https://tix.vn/app/assets/img/icons/slide/slide10.jpg"
                                 alt=""
                                 width="100%"
                              />
                           </div>{" "}
                           <div className="radiusImg">
                              <img
                                 src="https://tix.vn/app/assets/img/icons/slide/slide11.jpg"
                                 alt=""
                                 width="100%"
                              />
                           </div>
                        </Slider>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
