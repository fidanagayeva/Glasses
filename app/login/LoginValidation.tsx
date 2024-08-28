import * as yup from "yup";

export const LoginValidation = yup.object().shape({
    email: yup.string().trim().email().required("Email is required"),
    password: yup.string().trim().required("Password is required"),
});