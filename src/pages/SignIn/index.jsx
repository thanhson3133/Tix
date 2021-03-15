import React, { Component } from "react";
import Header from "../../components/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../SignUp/style.css";
import { signIn } from "../../redux/actions/signIn";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
const signInSchema = yup.object().shape({
   taiKhoan: yup.string().required("*Bắt buộc nhập!"),
   matKhau: yup.string().required("**Bắt buộc nhập!"),
});
class index extends Component {
   _handleSubmit = (values) => {
      console.log(values);
      this.props.dispatch(
         signIn(values, () => {
            Swal.fire({
               title: "Đăng nhập thành công!",
               icon: "success", //error, success,warning,question
               confirmButtonText: "Tiếp tục",
            });
            this.props.history.replace("/");
         })
      );
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
                     }}
                     validationSchema={signInSchema}
                     onSubmit={this._handleSubmit}
                     render={(formikProps) => (
                        <Form>
                           <div className="row justify-content-center">
                              <div className="form-group m-3 w-50">
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
                              <div className="form-group m-3 w-50">
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
                           <div className="d-flex justify-content-center">
                              <p>Chưa có tài khoản? &nbsp;</p>
                              <NavLink className="p-0" to="/signup">
                                 Đăng Ký
                              </NavLink>
                           </div>
                           <button
                              type="submit"
                              onClick={this.handleHiddenLogin}
                              className="btn btn-success w-50"
                           >
                              Đăng Nhập
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
export default connect()(index);
