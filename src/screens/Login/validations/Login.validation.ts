import * as yup from "yup";

const loginValidation = yup
    .object({
        email: yup
            .string()
            .required('Email is required')
            .min(3, 'Email must be greater than 2 characters')
            .matches(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                'Email is invalid, please enter a valid email'
            ),
        password: yup
            .string()
            .required('Password is required')
            .max(12, 'Password must be at least 6 characters')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                'Password must be alphanumeric, contains min 1 uppercase letter, 1 special character and have at least 6 characters.'
            )
    })
    .required();

export default loginValidation;

