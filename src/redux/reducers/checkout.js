import { SET_CHECKOUT, SET_SELECTED_CHAIR } from "../types/type";

let initialState = {
   checkoutInfo: {},
   selectedChair: [],
   booked: { maLichChieu: 0, danhSachVe: [], taiKhoanNguoiDung: "" },
};
const reducer = (state = initialState, { type, payLoad }) => {
   switch (type) {
      case SET_CHECKOUT:
         const user = JSON.parse(localStorage.getItem("userInfo"));
         state.checkoutInfo = payLoad;
         state.booked.maLichChieu = payLoad.thongTinPhim.maLichChieu;
         state.booked.taiKhoanNguoiDung = user.taiKhoan;
         return { ...state };
      case SET_SELECTED_CHAIR:
         const cloneSelectedChair = [...state.selectedChair];
         const cloneTicketList = [...state.booked.danhSachVe];
         const index = cloneSelectedChair.findIndex((item) => {
            return item.maGhe === payLoad.maGhe;
         });
         const indexTicket = cloneTicketList.findIndex((item) => {
            return item.maGhe === payLoad.maGhe;
         });
         if (index !== -1) {
            cloneSelectedChair.splice(index, 1);
         } else {
            console.log(payLoad);

            cloneSelectedChair.push(payLoad);
         }
         if (indexTicket !== -1) {
            cloneTicketList.splice(indexTicket, 1);
         } else {
            const ticket = { maGhe: payLoad.maGhe, giaVe: payLoad.giaVe };
            cloneTicketList.push(ticket);
         }
         // console.log("clone", cloneSelectedChair);

         state.selectedChair = cloneSelectedChair;
         state.booked.danhSachVe = cloneTicketList;
         // console.log(payLoad);
         // console.log("checkoutstate:", state.checkoutInfo);
         console.log("booked", state.booked);
         return { ...state };
      default:
         return state;
   }
};
export default reducer;
