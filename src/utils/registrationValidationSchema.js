import Joi from "joi"

const registrationValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

function validateUserInput(user) {
  const result = registrationValidationSchema.validate(user, { abortEarly: false });
  // if (result.error) {
  //   // const errors = {};
  //   // result.error.details.forEach((err) => {
  //   //   errors[err.path[0]] = err.message;
  //   // });
  //   // return errors;
  //   return result
  // }
  // return null;
}

const userInput = {
  email: 'snn@gmail.com',
  password: '123222',
};

const validationErrors = validateUserInput(userInput);

if (validationErrors) {
  console.error('Validation errors:', validationErrors);
} else {
  console.log('User input is valid.');
}

export default registrationValidationSchema;