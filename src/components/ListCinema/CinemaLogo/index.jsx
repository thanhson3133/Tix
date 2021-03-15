import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchCinemasList } from "../../../redux/actions/cinema";


class index extends PureComponent {
   handleHeThongRap = (e) => {
      // console.log("logoprops", this.props.logo);
      this.props.dispatch(fetchCinemasList(e.target.id));
   };

   render() {
      // console.log(this.props.logo);
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
            <hr/>
         </a>
      );
   }
   componentDidMount() {
      this.props.dispatch(fetchCinemasList("BHDStar"));
   }
}

export default connect()(index);
