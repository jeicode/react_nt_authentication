import * as yup from 'yup'

const emailValidation = yup.string().email().required()
const passwordValidation = yup.string().required().max(300).min(6)

const loginSchema = yup.object().shape({
    identifier: emailValidation,
    password: yup.string().required()
})



const registerSchema = yup.object().shape({
    email: emailValidation,
    fullName: yup.string().required(),
    identification: yup.string().required(),
    password: passwordValidation,
    repeatPassword: passwordValidation.test(
        'passwords-are-equal',
        'Passwords not match',
        (value, context) => {
            return value == context.parent.password
        },
    )
})





export { registerSchema, loginSchema }