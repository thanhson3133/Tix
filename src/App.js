import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //ho tro chia page cho ung dung
// import "../node_modules/react-modal-video/scss/modal-video.scss";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import Home from "../src/pages/home";
import DetailMovie from "../src/pages/detailMovie";
import CheckOut from "./pages/checkout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import { SET_TOKEN } from "./redux/types/type";
import { creactAction } from "./redux/actions/";
import { connect } from "react-redux";
import Admin from "./pages/Admin";

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <Switch>
               <Route exact path="/detail/:movieId" component={DetailMovie} />

               <Route exact path="/checkout/:checkoutId" component={CheckOut} />
               <Route exact path="/signup/" component={SignUp} />
               <Route exact path="/signin/" component={SignIn} />
               <Route exact path="/admin/" component={Admin} />

               <Route exact path="/" component={Home} />
            </Switch>
         </BrowserRouter>
      );
   }
   componentDidMount() {
      const token = JSON.parse(localStorage.getItem("userInfo"));

      if (token) {
         // console.log("hahaha");
         this.props.dispatch(creactAction(SET_TOKEN, token));
      }
   }
}
export default connect()(App);
