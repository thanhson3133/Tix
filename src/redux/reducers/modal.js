//Giá trị khởi tạo của showModal
let initialState = false;

const reducer = (state = initialState, action) => {
   const { type } = action;

   switch (type) {
      case "SHOW_MODAL":
         return true;
      case "HIDE_MODAL":
         return false;
      default:
         return state;
   }
};

export default reducer;
