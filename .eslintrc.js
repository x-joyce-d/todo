module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true,
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "legacyDecorators": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "mocha",
  ],
  "globals": {
  },
  "rules": {
    "no-unused-vars": 0,
    "no-fallthrough": 0,
    "no-constant-condition": 0,
  }
};
