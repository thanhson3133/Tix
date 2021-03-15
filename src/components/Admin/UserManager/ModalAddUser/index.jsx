import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../../../redux/actions/updateUser";
import "./style.css";
import Swal from "sweetalert2";
import { addUser } from "../../../../redux/actions/addUser";

// import "sweetalert2/src/sweetalert2.scss";
class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         showPass: true,
         user: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
         },
         resetForm: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
         },
         errors: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
         },
      };
   }
   handleCancel = () => {
      this.props.dispatch({
         type: "HIDE_MODAL",
      });
   };
   handleChange = (event) => {
      let { name, value, type } = event.target;
      // console.log(name, value);
      let newUser = { ...this.state.user, [name]: value };
      let newErrors = { ...this.state.errors };

      if (value.trim() === "") {
         // Hợp lệ
         newErrors[name] = name + " không được để trống!!";
      } else {
         // không hợp lệ
         newErrors[name] = "";
      }

      if (type === "email") {
         const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if (!regexEmail.test(value)) {
            // không hợp lệ

            newErrors[name] = "Email không hợp lệ!!";
         } else {
            // Hợp lệ
            newErrors[name] = "";
         }
      }
      // Kiểm tra pass hợp lệ
      if (name === "matKhau") {
         const regexPassWord = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
         if (!regexPassWord.test(value)) {
            // Hợp lệ
            newErrors[name] =
               "Mật khẩu phải có ít 1 chữ hoa, 1 chữ , 1 số và tối thiểu 8 kí tự!";
         } else {
            // không hợp lệ
            newErrors[name] = "";
         }
      }
      // Kiểm tra phone hợp lệ

      if (name === "soDt") {
         const regexPhoneNumber = /((09|03|07|08|05)+([0-9]{8})\b)/g;
         if (!regexPhoneNumber.test(value)) {
            // Hợp lệ
            newErrors[name] = "Số điện thoại không hợp lệ!";
         } else {
            // không hợp lệ
            newErrors[name] = "";
         }
      }

      this.setState({
         user: newUser,
         errors: newErrors,
      });
   };
   handleSetValue = (event) => {
      // event.preventDefault();

      this.setState({
         user: this.props.selectedUser,
      });
   };
   handleSubmit = (event) => {
      // ngăn trình duyệt reload page
      event.preventDefault();

      let { user, errors } = this.state;
      let contentProfile = "";
      let contentErrors = "";

      // biến xác định form hợp lệ
      let valid = true;

      for (let key in user) {
         if (user[key] === "") {
            contentErrors += `<p className="text-left text-danger"><b>${key}:</b>${user[key]}</p>`;

            valid = false;
         }
         contentProfile += `<p className="text-left"><b>${key}:</b>${user[key]}</p>`;
      }
      for (let key in errors) {
         if (errors[key] !== "") {
            contentErrors += `<p className="text-left text-danger"><b>${key}:</b>${user[key]}</p>`;

            valid = false;
         }
      }
      if (!valid) {
         // dữ liệu chưa hợp lệ
         Swal.fire({
            title: "Xảy ra lỗi!",
            html: contentErrors,
            icon: "error", //error, sucess,warning,question
            confirmButtonText: "Ok",
         });
         return;
      }
      // thành công
      if (this.props.selectedUser) {
         //kiểm tra props selectedUser có dữ liệu thì thực hiện update
         Swal.fire({
            title: "Bạn có chắc chắn muốn lưu những thay đổi?",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: `Lưu`,
            confirmButtonColor: "#28a745",
            cancelButtonText: "Hủy",
            html: contentProfile,
         }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
               // nhấn xóa sẽ call api cập nhật
               this.props.dispatch(
                  updateUser(this.state.user, () => {
                     Swal.fire({
                        title: "Cập nhật thành công!",
                        icon: "success", //error, sucess,warning,question
                        confirmButtonText: "Tiếp tục",
                     });
                     this.props.dispatch({
                        type: "HIDE_MODAL",
                     });
                  })
               );
            }
         });
      } else {
         // selectedUser k có dữ liệu nên sẽ thêm user mới
         Swal.fire({
            title: "Bạn có chắc chắn muốn thêm người dùng này?",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: `Thêm`,
            confirmButtonColor: "#28a745",
            cancelButtonText: "Hủy",
            html: contentProfile,
         }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
               // nhấn xóa sẽ call api cập nhật
               this.props.dispatch(
                  addUser(this.state.user, () => {
                     Swal.fire({
                        title: "Thêm người dùng thành công!",
                        icon: "success", //error, sucess,warning,question
                        confirmButtonText: "Tiếp tục",
                     });
                     this.props.dispatch({
                        type: "HIDE_MODAL",
                     });
                  })
               );
               // this.props.dispatch({
               //    type: "HIDE_MODAL",
               // });
            }
         });
      }
   };
   render() {
      return (
         <div
            style={{
               background: "rgba(0,0,0,0.7)",
               position: "absolute",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
               display: "flex",
               alignItems: "center",
               zIndex: 4,
            }}
         >
            <div className="bg-white w-50 mx-auto px-5 pb-3 rounded ">
               <h1 className="text-center display-4 m-0">Form User</h1>
               <form id="formModal" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                     <label>Tài khoản</label>
                     <input
                        onChange={this.handleChange}
                        name="taiKhoan"
                        disabled={!!this.props.selectedUser}
                        value={this.state.user.taiKhoan}
                        type="text"
                        className="form-control"
                        required
                     />
                     <span className="badge badge-danger alarm">
                        {this.state.errors.taiKhoan}
                     </span>
                  </div>
                  <div className="form-group">
                     <label>Mật khẩu</label>
                     <div className="input-group flex-nowrap">
                        <input
                           onChange={this.handleChange}
                           name="matKhau"
                           // disabled={!!this.props.selectedUser}
                           value={this.state.user.matKhau}
                           type={this.state.showPass ? "password" : "text"}
                           className="form-control"
                           aria-label="matKhau"
                           aria-describedby="addon-wrapping"
                           required
                        />
                        <div className="input-group-prepend">
                           <button
                              type="button"
                              className="input-group-text"
                              id="addon-wrapping"
                              onClick={() => {
                                 this.setState({
                                    showPass: !this.state.showPass,
                                 });
                              }}
                           >
                              Hiển thị
                           </button>
                        </div>
                     </div>
                     <span className="badge badge-danger alarm">
                        {this.state.errors.matKhau}
                     </span>
                  </div>
                  <div className="form-group">
                     <label>Họ tên</label>
                     <input
                        onChange={this.handleChange}
                        name="hoTen"
                        value={this.state.user.hoTen}
                        type="text"
                        className="form-control"
                        required
                     />
                     <span className="badge badge-danger alarm">
                        {this.state.errors.hoTen}
                     </span>
                  </div>
                  <div className="form-group">
                     <label>Email</label>
                     <input
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.user.email}
                        type="email"
                        className="form-control"
                        required
                     />
                     <span className="badge badge-danger alarm">
                        {this.state.errors.email}
                     </span>
                  </div>
                  <div className="form-group">
                     <label>Số điện thoại</label>
                     <input
                        onChange={this.handleChange}
                        name="soDt"
                        value={this.state.user.soDt}
                        type="tel"
                        className="form-control"
                        required
                     />
                     <span className="badge badge-danger alarm">
                        {this.state.errors.soDt}
                     </span>
                  </div>
                  <div className="form-group">
                     <label>Mã Nhóm</label>
                     <select
                        value={this.state.user.maNhom}
                        onChange={this.handleChange}
                        name="maNhom"
                        className="form-control required"
                        required
                     >
                        {/* <option selected>
                           -----Vui lòng chọn mã nhóm-----
                        </option> */}
                        <option>GP01</option>
                        <option>GP02</option>
                        <option>GP03</option>
                        <option>GP04</option>
                        <option>GP05</option>
                        <option>GP06</option>
                        <option>GP07</option>
                        <option>GP08</option>
                        <option>GP09</option>
                        <option>GP10</option>
                     </select>
                     <span className="badge badge-danger alarm">
                        {this.state.errors.maNhom}
                     </span>
                  </div>
                  <div className="form-group">
                     <label>Mã Loại Người Dùng</label>
                     <select
                        value={this.state.user.maLoaiNguoiDung}
                        onChange={this.handleChange}
                        name="maLoaiNguoiDung"
                        className="form-control"
                        required
                     >
                        {/* <option selected>-----Chọn loại người dùng-----</option> */}
                        <option>KhachHang</option> <option>QuanTri</option>
                     </select>
                     <span className="badge badge-danger alarm">
                        {this.state.errors.maNhom}
                     </span>
                  </div>
                  <button className="btn btn-success">Submit</button>
                  <button
                     onClick={this.handleCancel}
                     type="button"
                     className="btn btn-light ml-3"
                  >
                     Cancel
                  </button>
                  {this.props.selectedUser && (
                     <button
                        type="button"
                        className="btn btn-danger float-md-right"
                        onClick={this.handleSetValue}
                     >
                        Nhập lại
                     </button>
                  )}
               </form>
            </div>
         </div>
      );
   }
   componentDidMount() {
      // console.log("selectedUser", this.props.selectedUser);
      this.props.selectedUser &&
         this.setState({
            user: this.props.selectedUser,
         });
   }
   componentWillUnmount() {
      // xoa dư lieu data trong modal khi dong
      this.props.dispatch({
         type: "SELECTED_USER",
         payload: null,
      });
   }
}
const mapStateToProps = (state) => {
   return {
      selectedUser: state.userManager.selectedUser,
   };
};
export default connect(mapStateToProps)(index);
