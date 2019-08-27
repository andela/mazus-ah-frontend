module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: false,
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/setupTest.js',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: [
    '<rootDir>/cypress/',
    '<rootDir>/__tests__/integration/',
    '<rootDir>/__tests__/setupTest.js',
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|cass|scss|less|css)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
