import { creactAction } from ".";
import connector from "../../configs/connector";
import { UPDATE_USER } from "../types/type";
import Swal from "sweetalert2";

// async action
export const updateUser = (data, callBack) => {
   return (dispatch) => {
      connector({
         url:
            "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
         method: "PUT",
         data,
      })
         .then((res) => {
            console.log("data", data);

            dispatch(creactAction(UPDATE_USER, data));

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
