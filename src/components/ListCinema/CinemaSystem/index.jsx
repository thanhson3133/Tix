import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchCinemasShowTime } from "../../../redux/actions/cinemaShowTime";

class index extends PureComponent {
   // renderCinemaSystemLogo=()=>{

   // }
   handleimg = () => {
      const logo = this.props.cinemaSystemLogo.filter((logo) => {
         return logo.maHeThong === this.props.item.maHeThongRap;
      });

      return logo.map((item, index) => {
         // console.log(item.img);
         return (
            <img alt="" src={item.img} key={index} width="50px" height="50px" />
         );
      });
   };
   renderCinemaSystem() {
      // console.log("item", this.props.item);
      // console.log(this.props.cinemaSystemLogo.maHeThong);
      return this.props.item.lstCumRap.map((item, index) => {
         return (
            <div
               className="tab-pane fade show active"
               id={item.tenCumRap}
               role="tabpanel"
               aria-labelledby="v-pills-home-tab"
               key={index}
            >
               <img src="" alt="" />
               <button
                  className="btn btn-light w-100"
                  onClick={() => {
                     console.log("macumrap", item.maCumRap);

                     this.props.dispatch(fetchCinemasShowTime(item.maCumRap));
                  }}
               >
                  <div className="row">
                     <div className="col-3">{this.handleimg()}</div>
                     <div className="col-9 text-left">
                        <span className="cinemaNameColor">
                           {item.tenCumRap.slice(
                              0,
                              item.tenCumRap.indexOf(" ")
                           )}
                        </span>
                        <strong>
                           {item.tenCumRap.slice(item.tenCumRap.indexOf(" - "))}
                        </strong>
                        <p>{item.diaChi}</p>
                     </div>
                  </div>
               </button>
            </div>
         );
      });
   }
   render() {
      return <div>{this.renderCinemaSystem()}</div>;
   }
   componentDidMount() {
      this.props.dispatch(
         fetchCinemasShowTime(this.props.item.lstCumRap[0].maCumRap)
      );
   }
}
const mapStateToProps = (state) => {
   return {
      cinemaSystemLogo: state.cinema.cinemaSystemLogo,
   };
};
export default connect(mapStateToProps)(index);
