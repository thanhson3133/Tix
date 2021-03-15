import { creactAction } from ".";
import { SET_SELECTED_CHAIR } from "../types/type";

export const fetchSelectedChair = (chair) => {
   return (dispatch) => {
      dispatch(creactAction(SET_SELECTED_CHAIR, chair));
   };
};
