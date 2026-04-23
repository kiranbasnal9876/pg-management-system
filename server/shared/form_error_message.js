import { validationResult } from 'express-validator';

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const uniqueErrors = {};
    errors.array().forEach(err => {
      if (!uniqueErrors[err.path]) {
        uniqueErrors[err.path] = err.msg;
      }
    });

    const errorMessages = Object.values(uniqueErrors).join(', ');
    return res.status(400).json({statusCode:400 , message: errorMessages });
  }

  next();
};

export default validateRequest;
