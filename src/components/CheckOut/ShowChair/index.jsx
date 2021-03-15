import React, { Component } from "react";
import { connect } from "react-redux";

import VipChair from "../VipChair/";
import NormalChair from "../NormalChair/";
class index extends Component {
   render() {
      return (
         <div className="row">
            <div className="col-1 ">
               <div className="row  text-left">
                  {this.props.nomalArr.slice(0, 18).map((item, index) => {
                     return (
                        <div className="col-6 p-0" key={index}>
                           <NormalChair normalChair={item}></NormalChair>
                        </div>
                     );
                  })}
               </div>
            </div>
            <div className="col-10 px-5 text-center">
               <div className="row px-2">
                  {this.props.nomalArr.slice(18, 54).map((item, index) => {
                     return (
                        <div className="col-1" key={index}>
                           <NormalChair normalChair={item}></NormalChair>
                        </div>
                     );
                  })}
               </div>
               <div className="row px-2">
                  {this.props.vipArr.slice(0, 60).map((item, index) => {
                     return (
                        <div className="col-1" key={index}>
                           <VipChair vipChair={item}></VipChair>
                        </div>
                     );
                  })}
               </div>
               <div className="row px-2">
                  {this.props.nomalArr.slice(24, 36).map((item, index) => {
                     return (
                        <div className="col-1" key={index}>
                           <NormalChair normalChair={item}></NormalChair>
                        </div>
                     );
                  })}
               </div>
            </div>
            <div className="col-1 ">
               <div className="row text-right">
                  {this.props.nomalArr.slice(54, 72).map((item, index) => {
                     return (
                        <div className="col-6 p-0" key={index}>
                           <NormalChair normalChair={item}></NormalChair>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      );
   }
}
export default connect()(index);
