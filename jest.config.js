module.exports = {
    testEnvironment: 'jsdom', // Use jsdom for testing React components
    moduleNameMapper: {
      // Handle static assets imports (e.g., images)
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // For extending jest with jest-dom
    testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignore these folders during testing
  };
  