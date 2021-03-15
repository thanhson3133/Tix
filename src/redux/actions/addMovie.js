import { creactAction } from ".";
import connector from "../../configs/connector";
import { ADD_MOVIE } from "../types/type";
import Swal from "sweetalert2";
// create async action
export const addMovie = (frmData, callback) => {
   return (dispatch) => {
      connector({
         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh`,
         method: "POST",
         data: frmData,
      })
         .then((res) => {
            console.log(res.data);
            dispatch(creactAction(ADD_MOVIE, res.data));
            callback();
         })
         .catch((err) => {
            Swal.fire({
               title: "Đã xảy ra lỗi!Xin thử lại",
               icon: "error", //error, sucess,warning,question
               confirmButtonText: "Tiếp tục",
            });
         });
   };
};
