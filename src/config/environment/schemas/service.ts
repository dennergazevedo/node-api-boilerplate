/* eslint-disable @typescript-eslint/naming-convention */
import Joi from 'joi';

import { defaultSchema } from 'config/environment/schemas';

export const serviceSchema = defaultSchema.append({
  NODE_ENV: Joi.string().valid('test', 'development', 'production').default('development'),
  PORT: Joi.number().default(3000),
  DB_HOST: Joi.string().default('localhost'),
  DB_PORT: Joi.number().default(3306),
  DB_NAME: Joi.string(),
  DB_USER: Joi.string(),
  DB_PASS: Joi.string(),
});
