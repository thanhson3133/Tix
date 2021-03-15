import React, { PureComponent } from "react";
import { connect } from "react-redux";

import "./style.css";
import Swal from "sweetalert2";

import { addMovie } from "../../../../redux/actions/addMovie";
import { updateMovie } from "../../../../redux/actions/updateMovie";

// import "sweetalert2/src/sweetalert2.scss";
class index extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         showPass: true,
         imgBase64: "",
         movie: {
            maPhim: 0,
            tenPhim: "",
            biDanh: "",
            trailer: "",
            hinhAnh: {},
            moTa: "",
            maNhom: "GP01",
            ngayKhoiChieu: "01/01/2020",
            danhGia: 0,
         },
         resetForm: {
            maPhim: 0,
            tenPhim: "",
            biDanh: "",
            trailer: "",
            hinhAnh: "",
            moTa: "",
            maNhom: "GP01",
            ngayKhoiChieu: "01/01/2020",
            danhGia: 0,
         },
         errors: {
            maPhim: "",
            tenPhim: "",
            biDanh: "",
            trailer: "",
            hinhAnh: "",
            moTa: "",
            maNhom: "",
            ngayKhoiChieu: "",
            danhGia: "",
         },
      };
   }
   handleCancel = () => {
      this.props.dispatch({
         type: "HIDE_MODAL",
      });
   };
   formatDate = (string) => {
      // console.log(string, "stringdate");
      var today = new Date(string);
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = dd + "-" + mm + "-" + yyyy;
      // console.log("today", today);
      return today;
   };
   handleChange = (event) => {
      let { name, value } = event.target;
      // console.log(name, value);
      // console.log("ngaykhoichieu:", value);
      let newMovies = {
         ...this.state.movie,
         [name]: value,
      };
      // if (name === "ngayKhoiChieu") {
      //    this.setState({
      //       ...this.state.movie,
      //       ngayKhoiChieu: this.formatDate(value),
      //    });
      //    console.log(this.formatDate(value), "11111111111");
      // }
      // console.log(this.state.movie.ngayKhoiChieu, "ngayyyyyyyyy");
      if (name === "hinhAnh") {
         newMovies = { ...this.state.movie, hinhAnh: event.target.files[0] };
         const fileReader = new FileReader();
         fileReader.readAsDataURL(event.target.files[0]);
         fileReader.onloadend = (e) => {
            // console.log("haha", e.target.result);
            this.setState({ imgBase64: e.target.result });
         };
      }

      let newErrors = { ...this.state.errors };

      if (value.trim() === "") {
         // Hợp lệ
         newErrors[name] = name + " không được để trống!!";
      } else {
         // không hợp lệ
         newErrors[name] = "";
      }

      this.setState({
         movie: newMovies,
         errors: newErrors,
      });
      console.log(this.state.movie);
   };
   handleSetValue = (event) => {
      // event.preventDefault();

      this.setState({
         user: this.props.selectedMovie,
      });
   };
   handleSubmit = (event) => {
      // ngăn trình duyệt reload page
      event.preventDefault();

      let { movie, errors } = this.state;
      let contentProfile = "";
      let contentErrors = "";

      // biến xác định form hợp lệ
      let valid = true;
      let frmData = new FormData();
      for (let key in movie) {
         if (movie[key] === "") {
            contentErrors += `<p className="text-left text-danger"><b>${key}:</b>${movie[key]}</p>`;
            valid = false;
         }
         // console.log(movie[key], "keyyyyyy");
         frmData.append(key, movie[key]);
         // console.log("key", frmData.get(key));
         // console.log(frmData, "datafrm");
         contentProfile += `<p className="text-left"><b>${key}:</b>${movie[key]}</p>`;
      }
      for (let key in errors) {
         if (errors[key] !== "") {
            contentErrors += `<p className="text-left text-danger"><b>${key}:</b>${movie[key]}</p>`;

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
               // nhấn lưu sẽ call api cập nhật
               this.props.dispatch(
                  updateMovie(frmData, () => {
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
               // nhấn thêm sẽ call api thêm phim
               this.props.dispatch(
                  addMovie(frmData, () => {
                     Swal.fire({
                        title: "Thêm phim thành công!",
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
      }
   };
   render() {
      console.log("state:", this.state.movie);
      // const dateFormat =
      //    this.state.movie.ngayKhoiChieu.substr(8, 2) +
      //    "-" +
      //    this.state.movie.ngayKhoiChieu.substr(5, 2) +
      //    "-" +
      //    this.state.movie.ngayKhoiChieu.substr(0, 4);
      return (
         console.log(this.state.movie.ngayKhoiChieu, "hahaha"),
         (
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
                  <form id="formModalMovie" onSubmit={this.handleSubmit}>
                     <div className="form-group">
                        <label>Tên phim</label>

                        <input
                           onChange={this.handleChange}
                           name="tenPhim"
                           // disabled={!!this.props.selectedUser}
                           value={this.state.movie.tenPhim}
                           type="text"
                           className="form-control"
                           aria-label="tenPhim"
                           aria-describedby="addon-wrapping"
                           required
                        />

                        <span className="badge badge-danger alarm">
                           {this.state.errors.tenPhim}
                        </span>
                     </div>
                     <div className="form-group">
                        <label>Bí danh</label>
                        <input
                           onChange={this.handleChange}
                           name="biDanh"
                           value={this.state.movie.biDanh}
                           type="text"
                           className="form-control"
                           required
                        />
                        <span className="badge badge-danger alarm">
                           {this.state.errors.biDanh}
                        </span>
                     </div>
                     <div className="form-group">
                        <label>Trailer</label>
                        <input
                           onChange={this.handleChange}
                           name="trailer"
                           value={this.state.movie.trailer}
                           type="text"
                           className="form-control"
                           required
                        />
                        <span className="badge badge-danger alarm">
                           {this.state.errors.trailer}
                        </span>
                     </div>{" "}
                     <div className="form-group">
                        <label>Đánh giá</label>
                        <input
                           onChange={this.handleChange}
                           name="danhGia"
                           value={this.state.movie.danhGia}
                           type="text"
                           className="form-control"
                           required
                        />
                        <span className="badge badge-danger alarm">
                           {this.state.errors.trailer}
                        </span>
                     </div>
                     <div className="form-group">
                        <label htmlFor="ngayKhoiChieu">Ngày Khởi chiếu</label>

                        <input
                           type="text"
                           id="ngayKhoiChieu"
                           name="ngayKhoiChieu"
                           value={this.formatDate(
                              this.state.movie.ngayKhoiChieu.substr(0, 10)
                           )}
                           // date-date-format="dd/MM/yyyy"
                           onChange={this.handleChange}
                        ></input>

                        <span className="badge badge-danger alarm">
                           {this.state.errors.trailer}
                        </span>
                     </div>
                     <div className="form-group">
                        <label>Hình ảnh</label>
                        <div className="d-flex align-items-center">
                           <input
                              onChange={this.handleChange}
                              name="hinhAnh"
                              type="file"
                              className="form-control"
                              width="50px"
                              required
                           />
                           <img
                              src={this.state.imgBase64}
                              width="200px"
                              height="100px"
                              alt=""
                           />
                        </div>
                        <span className="badge badge-danger alarm">
                           {this.state.errors.hinhAnh}
                        </span>
                     </div>
                     <div className="form-group">
                        <label>Mô tả</label>
                        <textarea
                           width="100%"
                           value={this.state.movie.moTa}
                           name="moTa"
                           form="formModalMovie"
                           onChange={this.handleChange}
                           rows="5"
                           cols="96"
                        ></textarea>
                        <span className="badge badge-danger alarm">
                           {this.state.errors.moTa}
                        </span>
                     </div>
                     <div className="form-group">
                        <label>Mã Nhóm</label>
                        <select
                           value={this.state.movie.maNhom}
                           onChange={this.handleChange}
                           name="maNhom"
                           className="form-control"
                           required
                        >
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
                     <button className="btn btn-success">Submit</button>
                     <button
                        onClick={this.handleCancel}
                        type="button"
                        className="btn btn-light ml-3"
                     >
                        Cancel
                     </button>
                     {this.props.selectedMovie && (
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
         )
      );
   }
   componentDidMount() {
      // nếu selectedMovie có dữ liệu thì setState =selectedMovie
      this.props.selectedMovie &&
         this.setState({
            movie: this.props.selectedMovie,
         });
   }
   componentWillUnmount() {
      // xoa dư lieu data trong modal khi dong
      this.props.dispatch({
         type: "SELECTED_MOVIE",
         payload: null,
      });
   }
}
const mapStateToProps = (state) => {
   return {
      selectedMovie: state.movie.selectedMovie,
   };
};
export default connect(mapStateToProps)(index);
