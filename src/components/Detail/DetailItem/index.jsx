import React, { PureComponent } from "react";
import { connect } from "react-redux";

import DetailCalendar from "../DetailCalendar";
import CinemaLogo from "../logoCinemaDetail";
import LazyLoad from "../../LazyLoad";

import "./style.css";
class index extends PureComponent {
   handleBook = () => {
      document.getElementById("myTab").scrollIntoView({ behavior: "smooth" });
   };
   renderLogoCinema = () => {
      // console.log("logoCInema", this.props.cinemaLogoList);
      return this.props.cinemaLogoList.map((item, index) => {
         return <CinemaLogo logo={item} stt={index} key={index}></CinemaLogo>;
      });
   };
   renderCalendar = () => {
      console.log(this.props.calendar);
      return this.props.calendar.length !== 0 ? (
         this.props.calendar.map((item, index) => {
            return <DetailCalendar item={item} key={index}></DetailCalendar>;
         })
      ) : (
         <h5 className="text-center mt-5 text-danger font-weight-bold">
            Không có lịch,vui lòng chọn rạp khác
         </h5>
      );
   };
   render() {
      const {
         tenPhim,
         hinhAnh,
         trailer,
         ngayKhoiChieu,

         moTa,
      } = this.props.item;

      // console.log("lichChieuFilter:", lichChieu);
      return tenPhim ? (
         <div className="detail">
            <div className=" movieDetailInfo">
               <img src={hinhAnh} alt="" className="blurImg" />
               <div className="container detailInfo">
                  <div className="row">
                     <div className="  col-4">
                        <div className="card border-0 ">
                           <img
                              className="card-img-top"
                              src={hinhAnh}
                              alt={tenPhim}
                           />
                           <div className="film__overlay">
                              <a
                                 className="venobox trailerimg"
                                 data-autoplay="true"
                                 data-vbtype="video"
                                 href={trailer}
                              >
                                 <img
                                    className="w-100"
                                    src="https://tix.vn/app/assets/img/icons/play-video.png"
                                    alt=""
                                 />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-8 text-light">
                        <div className="">
                           <p className=" m-0">
                              <strong>
                                 {ngayKhoiChieu
                                    ? ngayKhoiChieu.substr(0, 10)
                                    : ""}
                              </strong>
                           </p>
                        </div>
                        <div className="">
                           <h2>
                              <span className="badge  mr-2">
                                 C18
                              </span>
                              {tenPhim}
                           </h2>
                        </div>
                        <p>100 phút - 0 IMDb - 2D/Digita</p>
                        <button
                           onClick={this.handleBook}
                           className="btn " style={{backgroundColor:'#fb4226', color:'white'}}
                        >
                           Mua vé
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="movieDetailCalendar">
               <div className="container detailCal">
                  <div className="container py-1 text-info ">
                     <ul
                        className="nav nav-tabs navCenter text-info"
                        id="myTab"
                        role="tablist"
                     >
                        <li className="nav-item p-3" role="presentation">
                           <a
                              className="text-decoration-none nav__unactive  active"
                              id="home-tab"
                              data-toggle="tab"
                              href="#home"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                           >
                              Lịch Chiếu
                           </a>
                        </li>
                        <li className="nav-item p-3" role="presentation">
                           <a
                              className=" text-decoration-none nav__unactive"
                              id="profile-tab"
                              data-toggle="tab"
                              href="#profile"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                           >
                              Thông tin
                           </a>
                        </li>
                     </ul>
                     <div className="tab-content" id="myTabContent">
                        <div
                           className="tab-pane fade show active"
                           id="home"
                           role="tabpanel"
                           aria-labelledby="home-tab"
                        >
                           <div className="row bg-light">
                              <div className="col-2 col-md-2 col-lg-1 border p-2">
                                 <div
                                    className="nav flex-column nav-pills"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                 >
                                    {this.renderLogoCinema()}
                                 </div>
                              </div>
                              <div className="col-10 col-md-10 col-lg-11 border p-2 crollBar">
                                 <div
                                    className="tab-content"
                                    id="v-pills-tabContent"
                                 >
                                    {this.renderCalendar()}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div
                           className="tab-pane fade"
                           id="profile"
                           role="tabpanel"
                           aria-labelledby="profile-tab"
                        >
                           <div className="container">
                              <div className="row my-5">
                                 <div className="col-sm-6 ">
                                    <div className="d-flex justify-content-between">
                                       <p>Ngày Khởi Chiếu: &ensp;</p>
                                       <p className="w-50">
                                          {ngayKhoiChieu
                                             ? ngayKhoiChieu.substr(0, 10)
                                             : ""}
                                       </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                       <p>Tên Phim:</p>
                                       <p className="w-50">{tenPhim}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                       <p>Thể Loại:</p>
                                       <p className="w-50">PhimHay</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                       <p>Định dạng:</p>
                                       <p className="w-50">2D/Digital</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                       <p>Quốc gia:</p>
                                       <p className="w-50">Mỹ</p>
                                    </div>
                                 </div>
                                 <div className="col-sm-6">
                                    <p>Nội dung:</p>
                                    <p>{moTa}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      ) : (
         <LazyLoad></LazyLoad>
      );
   }
   componentDidMount() {
      window.scrollTo(0, 0);
   }
}
const mapStateToProps = (state) => {
   return {
      cinemaLogoList: state.cinema.listCinemas,
      calendar: state.movie.detailCal,
   };
};
export default connect(mapStateToProps)(index);
