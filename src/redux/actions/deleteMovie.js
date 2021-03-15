import { creactAction } from ".";
import connector from "../../configs/connector";
import { DELETE_MOVIE } from "../types/type";
import Swal from "sweetalert2";

// async action
export const deleteMovie = (movie, callBack) => {
   return (dispatch) => {
      connector({
         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${movie}`,
         method: "DELETE",
      })
         .then((res) => {
            // console.log("data", res.data);

            dispatch(creactAction(DELETE_MOVIE, movie));
            callBack();
         })
         .catch((err) => {
            // console.log(err);
            Swal.fire({
               text: "Phim đã xếp lịch chiếu không thể xóa!",
               title: "Đã xảy ra lỗi!",
               icon: "error", //error, sucess,warning,question
               confirmButtonText: "Ok",
            });
         });
   };
};
// closure
