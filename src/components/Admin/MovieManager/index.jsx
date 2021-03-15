import React, { Component } from "react";
import LazyLoad from "../../LazyLoad";
import { connect } from "react-redux";

import Search from "./Search";
import ModalAddMovie from "./ModalAddMovie";
import MovieList from "./MovieList";
import { fetchMoives } from "../../../redux/actions/movieList";
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
   handleAddMovie = () => {
      const action = {
         type: "SHOW_MODAL",
      };
      this.props.dispatch(action);
   };
   render() {
      // console.log(this.props.userListItem);
      return this.state.isLoading ? (
         <div className="container-fluid px-5">
            <h1 className="display-4 text-center my-3">Quản lý Phim</h1>
            <div className="d-flex justify-content-between align-items-center">
               <Search></Search>
               <button
                  onClick={this.handleAddMovie}
                  className="btn btn-success"
               >
                  Thêm Phim
               </button>
            </div>
            <MovieList item={this.props.movieList}></MovieList>

            {this.props.isShow && <ModalAddMovie />}
         </div>
      ) : (
         <LazyLoad></LazyLoad>
      );
   }
   componentDidMount = () => {
      this.props.dispatch(fetchMoives());
      this.handleLazy();
   };
}
const mapStateToProps = (state) => {
   return {
      isShow: state.modal,
      movieList: state.movie.movieList,
   };
};
export default connect(mapStateToProps)(index);
