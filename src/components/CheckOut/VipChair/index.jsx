import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSelectedChair } from "../../../redux/actions/selectedChair";
import Swal from "sweetalert2";

class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isBooking: false,
      };
   }
   render() {
      return this.props.vipChair.daDat ? (
         <button
            className="btn text-secondary disabled btnChair"
            onClick={() => {
               Swal.fire({
                  title: "Ghế đã đặt vui lòng chọn ghế khác!",

                  icon: "error", //error, sucess,warning,question
                  confirmButtonText: "Tiếp tục",
               });
            }}
         >
            <i className="fas fa-couch"></i>
         </button>
      ) : (
         <button
            className={`btn btnChair ${
               this.state.isBooking ? "text-success" : "text-warning"
            }`}
            onClick={() => {
               this.setState({
                  ...this.state.isBooking,
                  isBooking: !this.state.isBooking,
               });
               this.props.dispatch(fetchSelectedChair(this.props.vipChair));
            }}
         >
            <i className="fas fa-couch"></i>
         </button>
      );
   }
}
export default connect()(index);
