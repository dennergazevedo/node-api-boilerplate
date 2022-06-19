import config from 'config/environment/variables';
import { serviceSchema } from 'config/environment/schemas';
import { Dialect } from 'sequelize/types';

const { error, value: env } = serviceSchema.validate(config);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  dialect: process.env.NODE_ENV === 'test' ? 'sqlite' : 'mysql' as Dialect,
  host: env.DB_HOST || 'localhost',
  port: env.DB_PORT || 3306,
  database: env.DB_NAME || 'test',
  user: env.DB_USER || 'root',
  password: env.DB_PASS || 'Password12!',
  logging: false,
};
