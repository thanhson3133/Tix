import React, { Component } from "react";
import LazyLoad from "../../LazyLoad";
import { connect } from "react-redux";
import { fetchUserList } from "../../../redux/actions/userList";
import UserList from "./UserList";
import Search from "./Search";
import ModalAddUser from "./ModalAddUser";
import "./style.css";
class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
         currentPage: 1,
      };
   }
   handleLazy() {
      return new Promise((resolve) => {
         setTimeout(() => resolve(this.setState({ isLoading: true })), 2000);
      });
   }
   handleAddUser = () => {
      const action = {
         type: "SHOW_MODAL",
      };
      this.props.dispatch(action);
   };
   render() {
      // console.log(this.props.userListItem);
      return this.state.isLoading ? (
         <div className="container-fluid px-5">
            <h1 className="display-4 text-center my-3">Quản lý người dùng</h1>
            <div className="d-flex justify-content-between align-items-center">
               <Search></Search>
               <button onClick={this.handleAddUser} className="btn btn-success">
                  Thêm người dùng
               </button>
            </div>
            <UserList item={this.props.userListItem}></UserList>

            {this.props.isShow && <ModalAddUser />}
         </div>
      ) : (
         <LazyLoad></LazyLoad>
      );
   }
   componentDidMount = () => {
      this.props.dispatch(fetchUserList());
      this.handleLazy();
   };
}
const mapStateToProps = (state) => {
   return {
      isShow: state.modal,
      userList: state.userManager.userList,
      userListItem: state.userManager.userListItem,
   };
};
export default connect(mapStateToProps)(index);
