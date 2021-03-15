import connector from "../../configs/connector";
import Swal from "sweetalert2";

// async action
export const bookingTicket = (data, callBack) => {
   return (dispatch) => {
      connector({
         url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
         method: "POST",
         data: data,
      })
         .then((res) => {
            callBack();
         })
         .catch((err) => {
            console.log(err);
            Swal.fire({
               text: "Đặt vé thất bại, vui lòng kiểm tra lại vé!",
               title: "Đã xảy ra lỗi!",
               icon: "error", //error, sucess,warning,question
               confirmButtonText: "Tiếp tục",
            });
         });
   };
};
// closure
