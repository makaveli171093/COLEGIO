import Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().integer().min(1).max(65535).default(3000),
  API_PREFIX: Joi.string().trim().pattern(/^\S+$/).required(),
  DATABASE_URL: Joi.string()
    .trim()
    .pattern(/^postgresql:\/\//)
    .required(),
  JWT_SECRET: Joi.string().trim().min(32).required(),
  JWT_EXPIRES_IN: Joi.string()
    .trim()
    .pattern(/^\d+[smhd]$/)
    .required(),
  BCRYPT_SALT_ROUNDS: Joi.number().integer().min(8).max(14).default(10),
  SCHOOL_NAME: Joi.string().trim().min(3).max(80).required(),
  MIN_PASSING_GRADE: Joi.number().integer().min(1).max(100).default(51),
  MAX_STUDENTS_PER_COURSE: Joi.number().integer().min(5).max(60).required(),
})
  .unknown(false)
  .prefs({ abortEarly: false, allowUnknown: false });
