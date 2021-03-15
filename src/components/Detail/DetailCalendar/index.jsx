import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCheckOut } from "../../../redux/actions/checkout";

class index extends Component {
   render() {
      // console.log("item", this.props.item);
      return (
         <div>
            {this.props.item ? (
               <>
                  <h4>{this.props.item.thongTinRap.tenCumRap}</h4>

                  <Link
                     to={`/checkout/${this.props.item.maLichChieu}`}
                     key={index}
                     className="btn movieTimeBtn"
                     onClick={() => {
                        this.props.dispatch(
                           fetchCheckOut(this.props.item.maLichChieu)
                        );
                     }}
                  >
                     {this.props.item.ngayChieuGioChieu.substr(11, 5)}
                  </Link>
               </>
            ) : (
               "không có lịch"
            )}
         </div>
      );
   }
}
export default connect()(index);
