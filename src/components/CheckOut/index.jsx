import React, { Component } from "react";
import { connect } from "react-redux";
import LazyLoad from "../LazyLoad";
import ShowChair from "./ShowChair";
import { bookingTicket } from "../../redux/actions/bookingTicket";
import Swal from "sweetalert2";

import "./style.css";

class index extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false,
         time: {},
         seconds: 300,
      };

      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
   }
   secondsToTime(secs) {
      let hours = Math.floor(secs / (60 * 60));

      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);

      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);

      let obj = {
         h: hours,
         m: minutes,
         s: seconds,
      };
      return obj;
   }
   startTimer() {
      if (this.timer === 0 && this.state.seconds > 0) {
         this.timer = setInterval(this.countDown, 1000);
      }
   }

   countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
         time: this.secondsToTime(seconds),
         seconds: seconds,
      });
      // Check if we're at zero.
      if (seconds === 0) {
         clearInterval(this.timer);

         let timerInterval;
         Swal.fire({
            title: "Hết thời gian giữ vé!",
            html: "Trang sẽ load lại sau <b></b>.",
            timer: 2000,
            icon: "error",
            timerProgressBar: true,
            showConfirmButton: false,
            willOpen: () => {
               Swal.showLoading();
               timerInterval = setInterval(() => {
                  const content = Swal.getContent();
                  if (content) {
                     const b = content.querySelector("b");
                     if (b) {
                        b.textContent = Swal.getTimerLeft();
                     }
                  }
               }, 100);
            },
            willClose: () => {
               clearInterval(timerInterval);
            },
         }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
               window.location.reload();
            }
         });
      }
   }
   // điều khiển loading
   handleLazy() {
      return new Promise((resolve) => {
         setTimeout(() => resolve(this.setState({ isLoading: true })), 2000);
      });
   }
   // render danh sách ghế
   renderChairList = () => {
      let vipArr = this.props.checkoutInfo.danhSachGhe.filter((item) => {
         return item.loaiGhe === "Vip";
      });
      let nomalArr = this.props.checkoutInfo.danhSachGhe.filter((item) => {
         return item.loaiGhe === "Thuong";
      });
      return (
         <div className="container">
            <ShowChair
               vipArr={vipArr}
               nomalArr={nomalArr}
               stt={index}
               key={index}
            ></ShowChair>
         </div>
      );
   };
   // đặt vé
   handleBookingTicket = () => {
      Swal.fire({
         title: "Xác nhận đặt vé?",
         showDenyButton: false,
         showCancelButton: true,
         confirmButtonText: `Đồng ý`,
         confirmButtonColor: "#28a745",
         cancelButtonText: "Hủy",
      }).then((result) => {
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
            // nhấn đồng ý sẽ call api đặt vé
            this.props.dispatch(
               bookingTicket(this.props.ticket, () => {
                  Swal.fire({
                     title: "Đặt vé thành công! Bạn có muốn về trang chủ?",
                     icon: "success",
                     showCancelButton: true,
                     confirmButtonColor: "#3085d6",
                     cancelButtonColor: "#d33",
                     confirmButtonText: "Về trang chủ",
                  }).then((result) => {
                     if (result.isConfirmed) {
                        window.location.href = "/";
                     } else {
                        window.location.reload();
                     }
                  });
               })
            );
         }
      });
   };
   render() {
      let totalCount = 0;
      this.props.selectedChair.map((item) => {
         return (totalCount += item.giaVe);
      });
      const formatter = new Intl.NumberFormat("vn-VN");
      const { email, soDT } = JSON.parse(localStorage.getItem("userInfo"));

      const { thongTinPhim, danhSachGhe } = this.props.checkoutInfo;
      //   console.log(danhSachGhe);
      return thongTinPhim && danhSachGhe && this.state.isLoading ? (
         <div className="row checkout  m-0">
            <div className="col-md-9 col-sm-12">
               <div className="text-center py-4">
                  <div className="d-flex justify-content-around">
                     <div className="w-50">
                        <h5>{thongTinPhim.tenCumRap}</h5>
                        <span> {thongTinPhim.tenRap} </span>&ensp;|&ensp;
                        <span>{thongTinPhim.gioChieu}</span>
                     </div>
                     <div className="timer w-50">
                        <p>Thời gian giữ ghế:</p>
                        {this.startTimer()}
                        <span className=" text text-danger">
                           {this.state.time.m}: {this.state.time.s}
                        </span>
                     </div>
                  </div>
                  <img
                     src="https://tix.vn/app/assets/img/icons/screen.png"
                     alt=""
                     width="100%"
                  />
               </div>

               <div>{this.renderChairList()}</div>
               <div className="row justify-content-center">
                  <button className="text-secondary btn chairInfo">
                     <i className="fas fa-couch"></i>:Ghế đã đặt
                  </button>
                  <button className="text-success btn chairInfo">
                     <i className="fas fa-couch"></i>:Ghế đang chọn
                  </button>
                  <button className="text-warning btn chairInfo">
                     <i className="fas fa-couch"></i>:Ghế vip
                  </button>
                  <button className="text-primary btn chairInfo">
                     <i className="fas fa-couch"></i>:Ghế thường
                  </button>
               </div>
            </div>
            <div className="col-md-3 col-sm-12 border p-0">
               <div className="ticket">
                  <div className="ticketTotal">
                     <h2 className="text-success">
                        {formatter.format(totalCount)}đ
                     </h2>
                  </div>
                  <div className="ticketInfo">
                     <div
                        className="w-50 "
                        style={{ display: "grid", justifyItems: "center" }}
                     >
                        <h6 className="text-dark">
                           <span className="badge badge-danger mr-2">C18</span>
                           {thongTinPhim.tenPhim}
                        </h6>
                        <h6>{thongTinPhim.tenCumRap}</h6>
                        <span>{thongTinPhim.ngayChieu}</span>
                        <span>{thongTinPhim.gioChieu}</span>
                        <span>
                           {" "}
                           <strong>{thongTinPhim.tenRap}</strong>{" "}
                        </span>
                     </div>
                     <div className="w-50">
                        <img
                           src={thongTinPhim.hinhAnh}
                           alt={thongTinPhim.tenPhim}
                           width="100%"
                           height="250px"
                        />
                     </div>
                  </div>
                  <hr/>
                  <div className="ticketChair">
                     <p>
                        Ghế:&ensp;
                        {this.props.selectedChair.map((item, index) => {
                           return (
                              <span key={index}>
                                 <strong style={{color:'red'}}>{item.stt} {" "}</strong>
                              </span>
                           );
                        })}
                     </p>
                  </div>
                  <hr/>
                  <div className="accountInfo ">
                     <p>
                        Email: <strong>{email}</strong>
                     </p>
                  </div>
                  <hr/>
                  <div className="accountInfo ">
                     <p>
                        Phone: <strong>{soDT}</strong>
                     </p>
                  </div>
                  <hr/>
                  <div className="ticketRefund">
                     <img
                        src="https://tix.vn/app/assets/img/icons/exclamation.png"
                        alt=""
                        width="30px"
                        height="30px"
                     />
                     <span>
                        {" "}
                        Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi
                        qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.
                     </span>
                  </div>
                  <hr/>
                  {this.props.selectedChair.length !== 0 ? (
                     <button
                        className="btn  datve datve--left"
                        onClick={this.handleBookingTicket}
                        type="button"
                     >
                        Đặt vé
                     </button>
                  ) : (
                     <button className="btn  datve  disabled">Đặt vé</button>
                  )}{" "}
               </div>
            </div>
         </div>
      ) : (
         <LazyLoad></LazyLoad>
      );
   }
   componentDidMount() {
      this.handleLazy();
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
   }
   componentWillUnmount() {
      this.countDown();
   }
}
const mapStateToProps = (state) => {
   return {
      logo: state.cinema.cinemaSystemLogo,
      checkoutInfo: state.checkout.checkoutInfo,
      selectedChair: state.checkout.selectedChair,
      ticket: state.checkout.booked,
   };
};
export default connect(mapStateToProps)(index);
