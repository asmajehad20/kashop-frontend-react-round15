import * as yup from "yup"

export const registerSchema = yup.object({
    userName: yup.string().required("userName is required").min(3, "userName must be at least 3 charaters").matches(/^[a-zA-Z0-9_-]+$/,"username must containe only letters, numbers and _ or -"),
    fullName: yup.string().required("full name is required"),
    email: yup.string().email("email must be valid").required("email is required"),
    password: yup.string().required("password is required").min(6, "password must be at least 6 charaters")
    .matches(/[A-Z]/, "password must containe at least one uppercase letter")
    .matches(/[a-z]/, "password must containe at least one lowercase letter")
    .matches(/[\d]/,"password must containe at least one number")
    .matches(/[@$!%*?&]/,"password must containe at least one special charater"),
    phoneNumber: yup.string().required("phonenumber is required"),
  });