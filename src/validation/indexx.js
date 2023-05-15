import * as yup from "yup"

export const SignInFormValidation = yup.object().shape({
 username:yup.string().required("What's your name?").min(5),
 password:yup.string().required().min(6)
})