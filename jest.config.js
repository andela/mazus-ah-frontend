module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: false,
  setupFilesAfterEnv: [
    '<rootDir>/__tests__/setupTest.js',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/utils',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/cypress/',
    '<rootDir>/__tests__/integration/',
    '<rootDir>/__tests__/setupTest.js',
  ],
  coverageThreshold: {
    global: {
      branches: 81,
      functions: 81,
      lines: 81,
    },
  },
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|cass|scss|less|css)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@Redux/(.*)$': '<rootDir>/src/redux/$1',
    '^@Common/(.*)$': '<rootDir>/src/components/common/$1',
    '^@Utils/(.*)$': '<rootDir>/utils/$1',
  },
};
