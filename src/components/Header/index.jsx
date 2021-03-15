import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "@material-ui/core";
import './style.css'
class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: null,
         idScroll: "",
      };
   }
   handleScroll = (id) => {
      const page = document.getElementById(id);
      if (page) {
         page.scrollIntoView({ behavior: "smooth" });
      }
   };
   handleLogout = () => {
      this.setState({
         ...this.state.user,
         user: localStorage.removeItem("userInfo"),
      });
   };
   render() {
      return (
         <div id="header" className="header">
            <nav className="navbar navbar-expand-sm navbar-light">
               <NavLink to="/" className="navbar-brand" href="./">
                  <img
                     src="https://tix.vn/app/assets/img/icons/web-logo.png"
                     width="50px"
                     alt=""
                  />
               </NavLink>
               <button
                  className="navbar-toggler d-lg-none"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavId"
                  aria-controls="collapsibleNavId"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon" />
               </button>
               <div
                  className="collapse navbar-collapse text-center"
                  id="collapsibleNavId"
               >
                  <ul
                     className={`navbar-nav mr-auto ml-auto mt-2 mt-0  navBar  `}
                  >
                     <li className="nav-item active">
                        <NavLink
                           className="nav-link "
                           to="/"
                           onClick={() => {
                              this.handleScroll("showing");
                           }}
                        >
                           Lịch Chiếu
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink
                           className="nav-link"
                           to="/"
                           onClick={() => {
                              this.handleScroll("cinema");
                           }}
                        >
                           Cụm Rạp
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink
                           className="nav-link"
                           to="/"
                           onClick={() => {
                              this.handleScroll("news");
                           }}
                        >
                           Tin Tức
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink
                           className="nav-link "
                           to="/"
                           onClick={() => {
                              this.handleScroll("app");
                           }}
                        >
                          Ứng Dụng
                        </NavLink>
                     </li>
                  </ul>
                  {this.state.user ? (
                     <div className="account">
                        <p className="text-info m-0">
                           {this.state.user.taiKhoan}
                           <i className="fas fa-user"></i>
                        </p>
                        <div className="myAccount">
                           <Link className="btn btn-danger" to="/accoutDetail">
                              Tài khoản
                           </Link>
                           <Link
                              onClick={this.handleLogout}
                              className="btn btn-danger"
                              to="/"
                           >
                              Đăng xuất
                           </Link>
                        </div>
                     </div>
                  ) : (
                     <NavLink to="/signin" className="m-4 text-danger">
                        Đăng nhập <i className="fas fa-user"></i>
                     </NavLink>
                  )}
               </div>
            </nav>
         </div>
      );
   }
   componentDidMount() {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      if (token) {
         this.setState({ isLogin: true, user: token });
      }
   }
}
const mapStateToProps = (state) => {
   return {
      user: state.auth.user,
   };
};
export default connect(mapStateToProps)(index);
