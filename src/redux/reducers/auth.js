import { SET_TOKEN } from "../types/type";

let initialState = {
   user: null,
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_TOKEN:
         // console.log(payLoad);
         state.user = payLoad;
         // console.log(state.user);
         return { ...state };
      default:
         return state;
   }
};
export default reducer;
