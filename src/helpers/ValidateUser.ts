import Joi, { ref } from 'joi'

export const RegistrationSchema= Joi.object({
     Name:Joi.string().required(),
     Email:Joi.string().required().email().messages({
        'string.empty':' Email field cannot be empty',
        'string.email':'This is not a Valid Email'
    }),
    Password:Joi.string().required().pattern(new
         RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')),

    ConfirmPassword:Joi.equal(ref('Password'))
})

export const LoginSchema= Joi.object({
     Email:Joi.string().required().email().messages({
        'string.empty':' Email field cannot be empty',
        'string.email':'This is not a Valid Email'
    }),
    Password:Joi.string().required(),

})