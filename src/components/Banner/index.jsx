import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import BannerItem from "../BannerItem";

class index extends Component {
   renderBanner = () => {
      // console.log(this.props.bannerList);
      return this.props.bannerList.map((item, index) => {
         return <BannerItem item={item} index={index} key={index}></BannerItem>;
      });
   };
   render() {
      return (
         <div id="carouselId" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li
                  data-target="#carouselId"
                  data-slide-to={0}
                  className="active"
               />
               <li data-target="#carouselId" data-slide-to={1} />
               <li data-target="#carouselId" data-slide-to={2} />
               <li data-target="#carouselId" data-slide-to={3} />
            </ol>
            <div className="carousel-inner carousel-fade" role="listbox">
               {this.renderBanner()}
            </div>
            <a
               className="carousel-control-prev"
               href="#carouselId"
               role="button"
               data-slide="prev"
            >
               <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
               />
               <span className="sr-only">Previous</span>
            </a>
            <a
               className="carousel-control-next"
               href="#carouselId"
               role="button"
               data-slide="next"
            >
               <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
               />
               <span className="sr-only">Next</span>
            </a>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      bannerList: state.movie.bannerList,
   };
};
export default connect(mapStateToProps)(index);
