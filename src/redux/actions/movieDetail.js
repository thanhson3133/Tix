import { creactAction } from ".";
import connector from "../../configs/connector";
import { SET_MOVIE_DETAIL } from "../types/type";

export const fetchMovieDetail = (id) => {
   return (dispatch) => {
      connector({
         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
         method: "GET",
      })
         .then((res) => {
            // console.log("data:", res.data);
            dispatch(creactAction(SET_MOVIE_DETAIL, res.data));
         })
         .catch((err) => {
            console.log(err);
         });
   };
};
