import { creactAction } from ".";
import connector from "../../configs/connector";
import { SET_CHECKOUT } from "../types/type";

export const fetchCheckOut = (id) => {
   return (dispatch) => {
      connector({
         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
         method: "GET",
      })
         .then((res) => {
            // console.log("data:", res.data);
            dispatch(creactAction(SET_CHECKOUT, res.data));
         })
         .catch((err) => {
            console.log(err);
         });
   };
};
