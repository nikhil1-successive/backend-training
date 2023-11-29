import express from 'express';
import bodyParser from 'body-parser';
import { validate, ValidationError, Joi } from 'express-validation';
// import Joi from 'joi';
// import registrationValidationSchema from './registrationValidationSchema';
const registrationValidationSchema = {
  body: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required(),
  }),
};
const validateRegistrationInput = validate(registrationValidationSchema, {}, {});

// app.get('/userregister', (req, res) => {
//   res.send(`
//     <h2>User Registration</h2>
//     <form method="post" action="/register">
//       <label for="email">Email:</label>
//       <input type="email" id="email" name="email" required><br>

//       <label for="password">Password:</label>
//       <input type="password" id="password" name="password" required><br>

//       <button type="submit">Register</button>
//     </form>
//   `);
// });
export default validateRegistrationInput
