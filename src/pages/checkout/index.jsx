import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import CheckOut from "../../components/CheckOut";
import { fetchCheckOut } from "../../redux/actions/checkout";

class index extends Component {
   render() {
      const token = JSON.parse(localStorage.getItem("userInfo"));
      return (
         <div>
            <Header></Header>

            {token ? (
               <CheckOut></CheckOut>
            ) : (
               this.props.history.replace("/signin")
            )}

            <Footer></Footer>
         </div>
      );
   }
   componentDidMount() {
      this.props.dispatch(fetchCheckOut(this.props.match.params.checkoutId));
      window.scrollTo(0, 0);
   }
}

export default connect()(index);
