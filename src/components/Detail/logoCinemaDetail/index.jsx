import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetailCal } from "../../../redux/actions/movieCalendar";

class index extends Component {
   handleHeThongRap = () => {
      this.props.dispatch(fetchDetailCal(this.props.logo.maHeThongRap));
   };
   render() {
      return (
         <a
            className={`cinema__logo ${this.props.stt === 0 ? "active" : ""}`}
            id="v-pills-home-tab"
            data-toggle="pill"
            href={`#${this.props.logo.maHeThongRap}`}
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            onClick={this.handleHeThongRap}
         >
            <img
               src={this.props.logo.logo}
               id={this.props.logo.maHeThongRap}
               alt=""
               className="w-100"
            />
         </a>
      );
   }
   componentDidMount() {
      this.props.dispatch(fetchDetailCal("BHDStar"));
   }
}

export default connect()(index);
