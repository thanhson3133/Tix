import { creactAction } from ".";
import { SET_MOVIE_DETAIL_CAL } from "../types/type";

export const fetchDetailCal = (id) => {
   return (dispatch) => {
      dispatch(creactAction(SET_MOVIE_DETAIL_CAL, id));
   };
};
