const {
   SET_CINEMA,
   SET_CINEMA_LIST,
   SET_CINEMA_SHOWTIME,
} = require("../types/type");

let initialState = {
   listCinemas: [],
   cinema: [],
   showTime: [], //tìm vị trí của danh sach phim rồi push vào
   cinemaSystemLogo: [
      {
         maHeThong: "BHDStar",
         img:
            "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
      },
      {
         maHeThong: "CGV",
         img:
            "https://s3img.vcdn.vn/123phim/2018/09/cgv-aeon-binh-tan-15380175062534.jpg",
      },
      {
         maHeThong: "CineStar",
         img:
            "https://s3img.vcdn.vn/123phim/2018/09/cinestar-quoc-thanh-15379636956745.jpg",
      },
      {
         maHeThong: "Galaxy",
         img:
            "https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg",
      },
      {
         maHeThong: "LotteCinima",
         img:
            "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-phu-tho-15383865322515.jpg",
      },
      {
         maHeThong: "MegaGS",
         img:
            "https://s3img.vcdn.vn/123phim/2018/09/mega-gs-cao-thang-15380164745357.jpg",
      },
   ],
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_CINEMA:
         state.listCinemas = payLoad;
         return { ...state };
      case SET_CINEMA_LIST:
         // console.log("payload", payLoad);
         state.cinema = payLoad;
         state.showTime = payLoad[0].lstCumRap[0].danhSachPhim;
         return { ...state };
      case SET_CINEMA_SHOWTIME:
         const index = state.cinema[0].lstCumRap.findIndex((item) => {
            return item.maCumRap === payLoad;
         });

         let show = [];
         if (index !== -1) {
            let movieList = state.cinema[0].lstCumRap[index].danhSachPhim;
            show = movieList;
            state.showTime = show;
            return { ...state };
         } else {
            return { ...state };
         }

      default:
         return state;
   }
};
export default reducer;
