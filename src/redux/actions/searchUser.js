import { creactAction } from ".";
import connector from "../../configs/connector";
import { SET_USERLIST } from "../types/type";
// create async action
export const SearchUser = (tukhoa) => {
   return (dispatch) => {
      connector({
         // url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=test01&soTrang=${current}&soPhanTuTrenTrang=10`,
         url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${tukhoa}`,
         method: "GET",
      })
         .then((res) => {
            console.log(res.data);
            dispatch(creactAction(SET_USERLIST, res.data));
         })
         .catch((err) => {
            console.log(err);
         });
   };
};
