import { creactAction } from ".";
import connector from "../../configs/connector";
import { SET_TOKEN } from "../types/type";
import Swal from "sweetalert2";

// async action
export const signIn = (data, callBack) => {
   return (dispatch) => {
      connector({
         url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
         method: "POST",
         data,
      })
         .then((res) => {
            dispatch(creactAction(SET_TOKEN, res.data));
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            // luu token vao local

            callBack();
         })
         .catch((err) => {
            Swal.fire({
               text: "Tài khoản hoặc mật khẩu không đúng!",
               title: "Đã xảy ra lỗi!",
               icon: "error", //error, sucess,warning,question
               confirmButtonText: "Tiếp tục",
            });
         });
   };
};
// closure
