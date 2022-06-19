import 'config/environment/variables';

describe('Database Config', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should export object with correct keys', () => {
    const databaseConfig = require('./database').default;

    expect(databaseConfig).toMatchObject({
      dialect: expect.any(String),
      host: expect.any(String),
      port: expect.any(Number),
      database: expect.any(String),
      user: expect.any(String),
      password: expect.any(String)
    });
  });

  it('should throw when there is a validation error', () => {
    jest.doMock('config/environment/variables', () => ({
      notValidKey: 'notValidKey',
    }));

    expect(() => {
      require('config/environment/database');
    }).toThrowError();
  });
});
