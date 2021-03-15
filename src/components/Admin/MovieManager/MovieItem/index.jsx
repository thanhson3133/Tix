import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { deleteMovie } from "../../../../redux/actions/deleteMovie";
import Swal from "sweetalert2";

class index extends PureComponent {
   handleEditMovie = () => {
      const action = {
         type: "SHOW_MODAL",
      };
      this.props.dispatch(action);
      // dispatch action set selectedUser
      console.log(this.props.data, "item");

      this.props.dispatch({
         type: "SELECTED_MOVIE",
         payLoad: this.props.data,
      });
   };
   handleDeleteUser = () => {
      Swal.fire({
         showDenyButton: false,
         showCancelButton: true,
         icon: "warning",
         title: "Bạn có chắc chắn muốn xóa mã phim này?",
         confirmButtonText: `Xóa`,
         confirmButtonColor: "#dc3545",
         cancelButtonText: "Hủy",
      }).then((result) => {
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
            // nhấn xóa sẽ call api xóa
            this.props.dispatch(
               deleteMovie(this.props.data.maPhim, () => {
                  Swal.fire(
                     "Đã xóa thành công!",
                     "Mã phim: " + this.props.data.maPhim,
                     "success"
                  );
               })
            );
         } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
         }
      });
   };
   render() {
      // console.log(this.props.data, "item");
      const {
         maPhim,
         tenPhim,
         trailer,
         hinhAnh,

         danhGia,
         moTa,
         ngayKhoiChieu,
      } = this.props.data;
      const dateFormat =
         ngayKhoiChieu.substr(8, 2) +
         "-" +
         ngayKhoiChieu.substr(5, 2) +
         "-" +
         ngayKhoiChieu.substr(0, 4);
      // 2020 / 11 / 20;
      return (
         <tr>
            <td>{maPhim}</td>
            <td>{tenPhim}</td>
            <td>{trailer}</td>
            <td>
               <img src={hinhAnh} width="100px" height="65px" alt={tenPhim} />
            </td>
            <td>{danhGia}</td>
            <td className="trBreak">{moTa}</td>
            <td>{dateFormat}</td>
            <td>
               <button
                  onClick={this.handleEditMovie}
                  className="btn btn-info mr-2 showBtn"
               >
                  Sửa
               </button>
               <button
                  className="btn btn-danger showBtn"
                  onClick={this.handleDeleteUser}
               >
                  Xóa
               </button>
            </td>
         </tr>
      );
   }
}
export default connect()(index);
