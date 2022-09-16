import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Vui lòng nhập đầy đủ thông tin")
    .max(30, "Họ không được dài quá 30 kí tự"),
  lastName: yup
    .string()
    .required("Vui lòng nhập đầy đủ thông tin")
    .max(30, "Tên của bạn không được dài quá 30 kí tự"),
  email: yup
    .string()
    .email("Địa chỉ email bạn đang sử dụng không hợp lệ, vui lòng nhập lại")
    .required("Vui lòng nhập địa chỉ email"),
  phoneNumber: yup
    .number("Số điện thoại chỉ được có ký tự số")
    .required("Vui lòng nhập vào số điện thoại")
    .max(15, "Số điện thoại không được dài quá 15 kí tự"),
  address: yup.string().required("Vui lòng nhập vào địa chỉ của bạn"),
  username: yup
    .string()
    .required("Vui lòng nhập vào tên đăng nhập")
    .max(15, "Tên đăng nhập không được dài quá 15 ký tự"),
  password: yup
    .string()
    .required("Vui lòng nhập vào mật khẩu")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Mật khẩu cần có ít nhất 8 kí tự, 1 ký tự in hoa,1 ký tự số"
    ),
});
