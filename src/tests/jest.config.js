// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transformIgnorePattern: ["node_modules/(?!axios)/"],
     moduleNameMapper: {
      '^axios$': require.resolve('axios'),
    }
  };
  
  
  