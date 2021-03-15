import {
   ADD_MOVIE,
   DELETE_MOVIE,
   SET_MOVIE,
   SET_MOVIE_DETAIL,
   SET_MOVIE_DETAIL_CAL,
   UPDATE_MOVIE,
} from "../types/type";

let initialState = {
   movieList: [],
   bannerList: [
      {
         TenPhim: "Bố Già",
         ChiTiet:
            "Bố già là một bộ phim điện ảnh hài tình cảm do Trấn Thành Town, HKFilm và Galaxy Studio sản xuất, dựa trên bộ phim chiếu mạng cùng tên của Trấn Thành được phát hành vào dịp Tết Nguyên Đán 2020 ",
         HinhAnh:
            "https://s3img.vcdn.vn/123phim/2021/03/bo-gia-16146819941008.png",
         TraiLer: "https://www.youtube.com/watch?v=jluSu8Rw6YE&ab_channel=TR%E1%BA%A4NTH%C3%80NHTOWN",
      },
      {
         TenPhim: "Gái Già Lắm Chiêu",
         ChiTiet:
            "Phần mới của loạt Gái già lắm chiêu xoay quanh mâu thuẫn ba chị em nhà họ Lý. Lệ Hà là chị cả dòng họ quyền quý ở Huế chuyên sưu tập cổ vật, trong đó có Phượng Hoàng tam vĩ - bộ áo trị giá hàng chục triệu USD",
         HinhAnh:
            "https://s3img.vcdn.vn/123phim/2021/03/gai-gia-lam-chieu-v-16152893212536.jpg",
         TraiLer: "https://youtu.be/SwwlFvOwkhA",
      },
      {
         TenPhim: "Mở mắt thấy hôm qua",
         ChiTiet:
            "Phần mới của loạt Gái già lắm chiêu xoay quanh mâu thuẫn ba chị em nhà họ Lý. Lệ Hà là chị cả dòng họ quyền quý ở Huế chuyên sưu tập cổ vật, trong đó có Phượng Hoàng tam vĩ - bộ áo trị giá hàng chục triệu USD ",
         HinhAnh:
            "https://s3img.vcdn.vn/123phim/2021/03/palm-springs-16146820863959.jpg",
         TraiLer: "https://youtu.be/SwwlFvOwkhA",
      },
      
   ],
   detailItem: {},
   detailCal: [],
   selectedMovie: null,
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_MOVIE:
         state.movieList = payLoad;
         state.detailItem = {};
         return { ...state };
      case SET_MOVIE_DETAIL:
         state.detailItem = payLoad;
         return { ...state };
      case SET_MOVIE_DETAIL_CAL:
         // console.log("payload", payLoad);
         let calFilter = [];
         if (state.detailItem.lichChieu) {
            calFilter = state.detailItem.lichChieu.filter((item) => {
               return (
                  item.thongTinRap.maHeThongRap === payLoad &&
                  item.ngayChieuGioChieu.substr(0, 10) === "2019-01-01"
               );
            });
         }
         state.detailCal = calFilter;
         // console.log("detailCal", state.detailCal);
         return { ...state };
      case "SELECTED_MOVIE":
         state.selectedMovie = payLoad;
         return { ...state };
      case ADD_MOVIE:
         const indexAddMovie = state.movieList.findIndex((item) => {
            return item.maPhim !== payLoad.maPhim;
         });
         let cloneMovie = [...state.movieList];
         if (indexAddMovie !== -1) {
            cloneMovie = [...cloneMovie, payLoad];
            state.movieList = cloneMovie;
         }
         return { ...state };
      case DELETE_MOVIE:
         const indexDeleteMovie = state.movieList.findIndex((item) => {
            return item.maPhim === payLoad;
         });
         let cloneMovieList = [...state.movieList];
         if (indexDeleteMovie !== -1) {
            cloneMovieList.splice(indexDeleteMovie, 1);
            [...state.movieList] = cloneMovieList;
         }
         return { ...state };
      case UPDATE_MOVIE:
         const indexUpdate = state.userListItem.findIndex(
            (item) => item.taiKhoan === payLoad.taiKhoan
         );
         let cloneMovieListUpdate = [...state.movieList];
         if (indexUpdate !== -1) {
            cloneMovieListUpdate[indexUpdate] = payLoad;
            state.movieList = cloneMovieListUpdate;
         }
         return { ...state };

      default:
         return state;
   }
};
export default reducer;
