'use strict';

const assert = require('assert');
const packageTransformer = require('./package');

describe('Package transformer', () => {
  it('should work with an empty package.json', () => {
    assert.deepEqual(
      packageTransformer({}),
      {
        author: 'Nicolas Froidure',
        dependencies: {
          debug: '1.0.0',
        },
        devDependencies: {
          coveralls: '2.11.15',
          eslint: '3.4.0',
          'eslint-config-simplifield': '4.1.1',
          istanbul: '0.4.5',
          mocha: '3.2.0',
          'mocha-lcov-reporter': '1.2.0',
        },
        engines: {
          node: '>=4.2.0',
        },
        license: 'MIT',
        scripts: {
          cli: 'env NODE_ENV=${NODE_ENV:-cli}',
          preversion: 'npm t && npm run lint && npm run compile',
        },
        version: '0.0.0',
      }
    );
  });
});
