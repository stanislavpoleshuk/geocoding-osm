module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|js)x?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|_spec_|_test_).[jt]s?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(quill-mention)/)'],
  testPathIgnorePatterns: ['<rootDir>/e2e', '<rootDir>/_examples'],
};
