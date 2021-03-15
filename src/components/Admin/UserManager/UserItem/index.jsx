import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../../../redux/actions/deleteUser";
import Swal from "sweetalert2";

class index extends PureComponent {
   handleEditUser = () => {
      const action = {
         type: "SHOW_MODAL",
      };
      this.props.dispatch(action);
      //dispatch action set selectedUser
      // console.log(this.props.data, "item");
      //api danh sách phân trang lỗi Mã nhóm lấy về bị null nên gán mặc đình GP01
      const data = { ...this.props.data, maNhom: "GP01" };
      // console.log("data", data);
      this.props.dispatch({
         type: "SELECTED_USER",
         payLoad: data,
      });
   };
   handleDeleteUser = () => {
      Swal.fire({
         showDenyButton: false,
         showCancelButton: true,
         icon: "warning",
         title: "Bạn có chắc chắn muốn xóa người dùng này?",
         confirmButtonText: `Xóa`,
         confirmButtonColor: "#dc3545",
         cancelButtonText: "Hủy",
      }).then((result) => {
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
            // nhấn xóa sẽ call api xóa
            this.props.dispatch(
               deleteUser(this.props.data.taiKhoan, () => {
                  Swal.fire(
                     "Đã xóa thành công!",
                     "Tài khoản: " + this.props.data.taiKhoan,
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
      const { hoTen, taiKhoan, email, soDt, maLoaiNguoiDung } = this.props.data;
      return (
         <tr>
            <td>{hoTen}</td>
            <td>{taiKhoan}</td>
            <td>{email}</td>
            <td>{soDt}</td>

            <td>{maLoaiNguoiDung}</td>

            <td>
               <button
                  onClick={this.handleEditUser}
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
