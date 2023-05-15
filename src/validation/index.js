import * as yup from "yup"

export const BasicFormValidation = yup.object().shape({
 username:yup.string().required("What's your name?").min(5),
 surname:yup.string().required("What's your name?").min(5),
 phone:yup.number().required("You use this when you log in and if you ever need to reset your password").integer(),
 password:yup.string().required().min(6)


})