import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
  },
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@global/(.*)$': '<rootDir>/src/global/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

export default createJestConfig(config);
