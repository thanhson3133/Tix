import connector from "../../configs/connector";
import Swal from "sweetalert2";

// async action
export const signUp = (values, callBack) => {
   return connector({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: values,
   })
      .then((res) => {
         // console.log("data", res);
         callBack();
      })
      .catch((err) => {
         // console.log(err);
         Swal.fire({
            text: "Tài khoản hoặc email đã tồn tại!",
            title: "Đã xảy ra lỗi!",
            icon: "error", //error, sucess,warning,question
            confirmButtonText: "Tiếp tục",
         });
      });
};
// closure
