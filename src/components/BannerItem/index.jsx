import React, { Component } from "react";
import "./style.css";
import ModalVideo from "react-modal-video";
// import Carousel from "react-bootstrap/Carousel";
class index extends Component {
   constructor() {
      super();
      this.state = {
         isOpen: false,
      };
      this.openModal = this.openModal.bind(this);
   }
   openModal() {
      this.setState({ isOpen: true });
   }
   render() {
      // const index = "first";

      const { HinhAnh, TraiLer } = this.props.item;

      var videoid = TraiLer.match(
         /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
      );

      return (
         <div
            className={`carousel-item ${
               this.props.index === 0 ? "active" : ""
            }`}
         >
            <img
               data-src={HinhAnh}
               src={HinhAnh}
               alt="First slide"
               className="w-100"
            />
            <div className="carousel-overlay">
               <ModalVideo
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId={videoid[1]}
                  onClose={() => this.setState({ isOpen: false })}
               />

               <a className="play-trailer" onClick={this.openModal} href>
                  <img
                     className="w-100" style={{height:'500px'}}
                     src="https://tix.vn/app/assets/img/icons/play-video.png"
                     alt=""
                  />
               </a>
            </div>
         </div>
      );
   }
}

export default index;
