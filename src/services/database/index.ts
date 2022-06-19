import { Sequelize } from 'sequelize';

import config from 'config/environment/database';

const { host, port, user, password, database, dialect, logging } = config;

export const databaseService = new Sequelize(database, user, password, {
  host,
  port,
  dialect,
  logging,
  define: {
    timestamps: true,
    underscored: true
  }
});
