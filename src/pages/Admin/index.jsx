import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import MovieManager from "../../components/Admin/MovieManager";
import UserManager from "../../components/Admin/UserManager";
import "./style.css";
import Swal from "sweetalert2";

export default class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
         loadingOrder: true,
      };
   }
   handleLazy() {
      return new Promise((resolve) => {
         setTimeout(() => resolve(this.setState({ isLoading: true })), 1000);
      });
   }
   chuyenHuongAdmin() {
      Swal.fire({
         title: "Bạn không phải là quản trị!",
         text: "Vui lòng đăng nhập bằng tài khoản quản trị",
         icon: "error", //error, success,warning,question
         confirmButtonText: "Đăng nhập",
      });
      localStorage.removeItem("userInfo");
      this.props.history.replace("/signin");
   }
   render() {
      const token = JSON.parse(localStorage.getItem("userInfo"));

      return (
         <div>
            {token && token.maLoaiNguoiDung === "QuanTri" ? (
               <div className="row m-0 ">
                  <div className="col-2 p-0 leftBar">
                     <NavLink
                        to="/"
                        className=" w-100 badge badge-danger"
                        href="./"
                     >
                        <span>ADMIN</span>
                        <img
                           src="https://i.imgur.com/lC22izJ.png"
                           width="50px"
                           alt=""
                        />
                     </NavLink>
                     <div
                        className="nav flex-column effect1 nav-pills bg-navy"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                     >
                        <a
                           className={` effect ${
                              this.state.loadingOrder ? "active" : ""
                           }`}
                           id="v-pills-profile-tab"
                           data-toggle="pill"
                           href="#v-pills-profile"
                           role="tab"
                           aria-controls="v-pills-profile"
                           aria-selected="false"
                        >
                           Quản lý người dùng
                        </a>
                        <a
                           className=" effect"
                           id="v-pills-messages-tab"
                           data-toggle="pill"
                           href="#v-pills-messages"
                           role="tab"
                           aria-controls="v-pills-messages"
                           aria-selected="false"
                           onClick={() => {
                              this.setState({
                                 loadingOrder: false,
                              });
                           }}
                        >
                           Quản lý phim
                        </a>
                     </div>
                  </div>
                  <div className="col-10">
                     <div className="tab-content" id="v-pills-tabContent">
                        {/* <div
                           class="tab-pane fade show active"
                           id="v-pills-home"
                           role="tabpanel"
                           aria-labelledby="v-pills-home-tab"
                        >
                           Trang Chủ
                        </div> */}
                        <div
                           className="tab-pane fade show active"
                           id="v-pills-profile"
                           role="tabpanel"
                           aria-labelledby="v-pills-profile-tab"
                        >
                           <UserManager></UserManager>
                        </div>
                        <div
                           className="tab-pane fade "
                           id="v-pills-messages"
                           role="tabpanel"
                           aria-labelledby="v-pills-messages-tab"
                        >
                           <MovieManager></MovieManager>
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
               this.chuyenHuongAdmin()
            )}
         </div>
      );
   }
   componentDidMount() {
      this.handleLazy();
   }
}
