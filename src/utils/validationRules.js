import Joi from "joi";

const validationRules = {
  login: {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  },
};

const validateRequest = (route) => {
  return (req, res, next) => {
    if (!validationRules[route]) {
      return next();
    }
    const schema = Joi.object(validationRules[route]);
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorDetails = error.details.map((detail) => detail.message);
      return res.status(400).json({ error: "Validation error", details: errorDetails });
    }
    next();
  };
};

export default validateRequest;

