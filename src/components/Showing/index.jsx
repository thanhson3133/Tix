import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import ShowingItem from "../ShowingItem";
class index extends Component {
   renderMovieList = () => {
      console.log(this.props.movieList);
      return this.props.movieList.map((item, index) => {
         console.log(item);
         return <ShowingItem key={index} movie={item}></ShowingItem>;
      });
   };
   render() {
      const settings = {
         rows: 2,
         dots: true,
         infinite: true,
         speed: 1000,
         slidesToShow: 5,
         slidesToScroll: 3,
         autoplay: true,
         arrows: true,
         responsive: [
            {
               breakpoint: 1199,
               settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
               },
            },
            {
               breakpoint: 991,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
               },
            },
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
               },
            },
            {
               breakpoint: 568,
               settings: {
                  rows: 1,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: false,
               },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
         ],
      };

      return (
         <div id="showing" className="showing">
            <div className="container py-5 ">
               <ul className="nav nav-tabs navCenter" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                     <a
                        className="nav-link nav__unactive  active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                     >
                        Đang Chiếu
                     </a>
                  </li>
                  <li className="nav-item" role="presentation">
                     <a
                        className="nav-link nav__unactive"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                     >
                        Sắp Chiếu
                     </a>
                  </li>
               </ul>
               <div className="tab-content" id="myTabContent">
                  <div
                     className="tab-pane fade show active"
                     id="home"
                     role="tabpanel"
                     aria-labelledby="home-tab"
                  >
                     <Slider {...settings}>{this.renderMovieList()}</Slider>
                  </div>
                  <div
                     className="tab-pane fade"
                     id="profile"
                     role="tabpanel"
                     aria-labelledby="profile-tab"
                  >
                     <Slider {...settings}>{this.renderMovieList()}</Slider>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      movieList: state.movie.movieList,
   };
};
export default connect(mapStateToProps)(index);
