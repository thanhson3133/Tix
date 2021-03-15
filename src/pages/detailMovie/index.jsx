import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailItem from "../../components/Detail/DetailItem";
import { fetchMovieDetail } from "../../redux/actions/movieDetail";

import { connect } from "react-redux";
import { fetchCinemas } from "../../redux/actions/cinemaList";
import "../../components/ShowingItem/style.css";
import "../../components/Showing/style.css";
import "../../components/ListCinema/style.css";
import { creactAction } from "../../redux/actions";
import { SET_TOKEN } from "../../redux/types/type";

class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
      };
   }
   handleLazy() {
      return new Promise((resolve) => {
         setTimeout(() => resolve(this.setState({ isLoading: true })), 2000);
      });
   }
   render() {
      return (
         <div>
            <Header></Header>
            <DetailItem item={this.props.detailItem}></DetailItem>
            <Footer></Footer>
         </div>
      );
   }
   componentDidMount = () => {
      this.props.dispatch(fetchMovieDetail(this.props.match.params.movieId));

      this.props.dispatch(fetchCinemas);
      this.handleLazy();
      window.scrollTo(0, 0);
      const token = JSON.parse(localStorage.getItem("userInfo"));

      if (token) {
         // console.log("hahaha");
         this.props.dispatch(creactAction(SET_TOKEN, token));
      }
   };
}
const mapStateToProps = (state) => {
   return {
      detailItem: state.movie.detailItem,
   };
};
export default connect(mapStateToProps)(index);
