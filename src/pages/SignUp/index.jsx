import React, { Component } from "react";
import Header from "../../components/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./style.css";
import { signUp } from "../../redux/actions/signUp";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
const signUpSchema = yup.object().shape({
   taiKhoan: yup.string().required("*Bắt buộc nhập!"),
   matKhau: yup.string().required("**Bắt buộc nhập!"),
   email: yup
      .string()
      .required("**Bắt buộc nhập!")
      .email("*Email chưa đúng định dạng!"),
   soDt: yup
      .string()
      .required("**Bắt buộc nhập!")
      .matches(/^[0-9]+$/),
   hoTen: yup.string().required("**Bắt buộc nhập!"),
   maNhom: yup.string().required("**Bắt buộc nhập!"),
});
class index extends Component {
   _handleSubmit = (values) => {
      // console.log(values);
      signUp(values, () => {
         // đăng ký thành công sẽ xuất ra thông báo vào chuyển về trang đăng nhập
         Swal.fire({
            title: "Đăng ký thành công!",
            icon: "success", //error, success,warning,question
            confirmButtonText: "Tiếp tục",
         });
         this.props.history.replace("/signin");
      });
   };
   render() {
      return (
         <div>
            <Header></Header>
            <div className="auth">
               <div className="container signInSignUp">
                  <Formik
                     initialValues={{
                        taiKhoan: "",
                        matKhau: "",
                        email: "",
                        soDt: "",
                        maNhom: "GP01",
                        maLoaiNguoiDung: "KhachHang",
                        hoTen: "",
                     }}
                     validationSchema={signUpSchema}
                     onSubmit={this._handleSubmit}
                     render={(formikProps) => (
                        <Form>
                           <div className="row justify-content-center">
                              <div className="form-group m-3 w-25">
                                 <label>Tài Khoản</label>
                                 <Field
                                    type="text"
                                    name="taiKhoan"
                                    id="taiKhoan"
                                    className="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                    onChange={formikProps.handleChange}
                                 />
                                 <ErrorMessage name="taiKhoan">
                                    {(msg) => (
                                       <div className="text-danger">{msg}</div>
                                    )}
                                 </ErrorMessage>
                              </div>
                              <div className="form-group m-3 w-25">
                                 <label>Mật Khẩu</label>
                                 <Field
                                    type="password"
                                    name="matKhau"
                                    id="matKhau"
                                    className="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                    onChange={formikProps.handleChange}
                                 />
                                 <ErrorMessage name="matKhau">
                                    {(msg) => (
                                       <div className="text-danger">{msg}</div>
                                    )}
                                 </ErrorMessage>
                              </div>
                           </div>
                           <div className="row justify-content-center">
                              <div className="form-group m-3 w-25">
                                 <label>Email</label>
                                 <Field
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                    onChange={formikProps.handleChange}
                                 />
                                 <ErrorMessage name="email">
                                    {(msg) => (
                                       <div className="text-danger">{msg}</div>
                                    )}
                                 </ErrorMessage>
                              </div>
                              <div className="form-group m-3 w-25">
                                 <label>Số Điện Thoại</label>
                                 <Field
                                    type="phone"
                                    name="soDt"
                                    id="soDt"
                                    className="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                    onChange={formikProps.handleChange}
                                 />
                                 <ErrorMessage name="soDt">
                                    {(msg) => (
                                       <div className="text-danger">{msg}</div>
                                    )}
                                 </ErrorMessage>
                              </div>
                           </div>
                           <div className="row justify-content-center">
                              {" "}
                              <div className="form-group m-3 w-25">
                                 <label>Họ Tên</label>
                                 <Field
                                    type="text"
                                    name="hoTen"
                                    id="hoTen"
                                    className="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                    onChange={formikProps.handleChange}
                                 />
                                 <ErrorMessage name="hoTen">
                                    {(msg) => (
                                       <div className="text-danger">{msg}</div>
                                    )}
                                 </ErrorMessage>
                              </div>
                              <div className="form-group m-3 w-25">
                                 <label>Mã Nhóm</label>
                                 <Field
                                    component="select"
                                    className="form-control"
                                    name="maNhom"
                                    id="maNhom"
                                 >
                                    <option>GP01</option>
                                    <option>GP02</option>
                                    <option>GP03</option>
                                    <option>GP04</option>
                                    <option>GP05</option>
                                    <option>GP06</option>
                                    <option>GP07</option>
                                    <option>GP08</option>
                                    <option>GP09</option>
                                    <option>GP10</option>
                                 </Field>
                                 <ErrorMessage name="maNhom">
                                    {(msg) => (
                                       <div className="text-danger">{msg}</div>
                                    )}
                                 </ErrorMessage>
                              </div>
                           </div>
                           <div className="d-flex justify-content-center">
                              <p>Đã có tài khoản? &nbsp;</p>
                              <NavLink className="p-0" to="/signin">
                                 Đăng nhập
                              </NavLink>
                           </div>
                           <button
                              type="submit"
                              onClick={this.handleHiddenLogin}
                              className="btn btn-success m-0 w-50"
                           >
                              Đăng ký
                           </button>
                        </Form>
                     )}
                  />
               </div>
            </div>
         </div>
      );
   }
}
export default index;
