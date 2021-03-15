import { creactAction } from ".";
import connector from "../../configs/connector";
import { SET_CINEMA } from "../types/type";

export const fetchCinemas = (dispatch) => {
   connector({
      url:
         "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      method: "GET",
   })
      .then((res) => {
         dispatch(creactAction(SET_CINEMA, res.data));
      })
      .catch((err) => {
         console.log(err);
      });
};
