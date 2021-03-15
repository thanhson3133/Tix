import { creactAction } from ".";
import connector from "../../configs/connector";
import { SET_CINEMA_LIST } from "../types/type";

export const fetchCinemasList = (id) => {
   return (dispatch) => {
      connector({
         // https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}
         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`,
         method: "GET",
      })
         .then((res) => {
            // console.log("data:", res.data);
            dispatch(creactAction(SET_CINEMA_LIST, res.data));
         })
         .catch((err) => {
            console.log(err);
         });
   };
};
