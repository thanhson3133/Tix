import { creactAction } from ".";
import connector from "../../configs/connector";
import { ADD_USER } from "../types/type";
import Swal from "sweetalert2";
// create async action
export const addUser = (data, callback) => {
   return (dispatch) => {
      connector({
         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
         method: "POST",
         data,
      })
         .then((res) => {
            console.log(res.data);
            dispatch(creactAction(ADD_USER, data));
            callback();
         })
         .catch((err) => {
            Swal.fire({
               text: "Tài khoản hoặc Email đã tồn tại!",
               title: "Đã xảy ra lỗi!",
               icon: "error", //error, sucess,warning,question
               confirmButtonText: "Tiếp tục",
            });
         });
   };
};
