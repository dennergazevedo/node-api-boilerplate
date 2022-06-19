module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testRegex: '\\.(spec|test)\\.ts?$',
  moduleFileExtensions: ['js', 'ts'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/jest.config.js'],
  clearMocks: true,
  forceExit: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/app.ts',
    '!src/data/**/*.ts',
    '!src/services/database/*.ts',
    '!src/routes/**/*.ts',
    '!src/config/environment/schemas/*.ts',
  ],
  coverageDirectory: "__tests__/coverage",
  coveragePathIgnorePatterns: ['./src/middlewares/error/validationError.*.ts'],
};
