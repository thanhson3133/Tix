import { creactAction } from ".";
import { SET_CINEMA_SHOWTIME } from "../types/type";

export const fetchCinemasShowTime = (id) => {
   return (dispatch) => {
      dispatch(creactAction(SET_CINEMA_SHOWTIME, id));
   };
};
