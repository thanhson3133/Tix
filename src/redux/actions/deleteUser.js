import { creactAction } from ".";
import connector from "../../configs/connector";
import { DELETE_USER } from "../types/type";
import Swal from "sweetalert2";

// async action
export const deleteUser = (user, callBack) => {
   return (dispatch) => {
      connector({
         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,
         method: "DELETE",
      })
         .then((res) => {
            // console.log("data", res.data);

            dispatch(creactAction(DELETE_USER, user));
            callBack();
         })
         .catch((err) => {
            // console.log(err);
            Swal.fire({
               text: "Tài khoản đã đặt vé, không thể xóa!",
               title: "Đã xảy ra lỗi!",
               icon: "error", //error, sucess,warning,question
               confirmButtonText: "Ok",
            });
         });
   };
};
// closure
