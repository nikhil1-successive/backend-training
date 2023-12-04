"use strict";
// import Joi from 'joi'
// const validateRegistration = (req, res, next) => {
//   const userSchema = Joi.object({
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).required(),
//   });
//   const validationResult = userSchema.validate(req.body, { abortEarly: false });
//   if (validationResult.error) {
//     const errors = validationResult.error.details.map((detail) => detail.message);
//     return res.status(400).json({ errors });
//   }
//   next();
// };
// export default validateRegistration;
