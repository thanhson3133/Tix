import React, { PureComponent } from "react";
import { connect } from "react-redux";
import CinemaLogo from "./CinemaLogo";
import CinemaSystem from "./CinemaSystem";
import ShowTime from "./ShowTime";
import "./style.css";
class index extends PureComponent {
   renderLogoCinema = () => {
      // console.log("logoCInema", this.props.cinemaLogoList);
      return this.props.cinemaLogoList.map((item, index) => {
         return <CinemaLogo logo={item} stt={index} key={index}></CinemaLogo>;
      });
   };
   renderCinemaList() {
      // console.log(this.props.cinemaList);
      return this.props.cinemaList.map((item, index) => {
         return (
            <CinemaSystem item={item} index={index} key={index}></CinemaSystem>
         );
      });
   }
   renderShowTime = () => {
      // console.log("showtime", this.props.cinemaShowTimes);
      return this.props.cinemaShowTimes.map((item, index) => {
         return <ShowTime item={item} index={index} key={index}></ShowTime>;
      });
   };
   render() {
      return (
         <div id="cinema" className="container container-sm container-md mb-5">
            <div className="text-center">
               <img
                  width="100%"
                  height="100px"
                  src="https://tix.vn/app/assets/img/icons/back-news.png"
                  alt=""
               />
            </div>
            <div className="row">
               <div className="col-2 col-md-2 col-lg-1 border p-2 crollBar">
                  <div
                     className="nav flex-column nav-pills"
                     id="v-pills-tab"
                     role="tablist"
                     aria-orientation="vertical"
                  >
                     {this.renderLogoCinema()}
                  </div>
               </div>
               <div className="col-6 col-md-6 col-lg-5 border p-2 crollBar">
                  <div className="tab-content" id="v-pills-tabContent">
                     {this.renderCinemaList()}
                  </div>
               </div>
               <div className="col-4 col-md-4 col-lg-6 p-0 crollBar">
                  {this.renderShowTime()}
               </div>
            </div>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      cinemaLogoList: state.cinema.listCinemas,
      cinemaList: state.cinema.cinema,
      cinemaShowTimes: state.cinema.showTime,
   };
};
export default connect(mapStateToProps)(index);
