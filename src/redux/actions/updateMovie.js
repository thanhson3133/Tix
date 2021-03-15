import { creactAction } from ".";
import connector from "../../configs/connector";
import { UPDATE_MOVIE } from "../types/type";
import Swal from "sweetalert2";

// async action
export const updateMovie = (data, callBack) => {
   return (dispatch) => {
      connector({
         url:
            "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
         method: "PUT",
         data,
      })
         .then((res) => {
            console.log("data", res.data);

            dispatch(creactAction(UPDATE_MOVIE, res.data));
            callBack();
         })
         .catch((err) => {
            // console.log(err);
            Swal.fire({
               title: "Đã xảy ra lỗi!",
               icon: "error", //error, success,warning,question
               confirmButtonText: "Tiếp tục",
            });
         });
   };
};
// closure
