react-native-google-analytics-bridge-mock
=========================================

![build status](https://circleci.com/gh/CureApp/react-native-google-analytics-bridge-mock.png?circle-token=81f00ea7ab3ea5098ca9641c352d7a4b634d40d6)

Mock for react-native-google-analytics-bridge, used for testing.

[react-native-google-analytics-bridge](https://github.com/idehub/react-native-google-analytics-bridge) is a great package to use Google Analytics from [React Native](https://facebook.github.io/react-native/) apps.

We would like to mock react-native-google-analytics-bridge for developing and testing.

, but not to send tracking data at test. This package provides mocked classes "GoogleAnalytics" and "GoogleTagManager", that do nothing.

Installation
------------

```sh
npm install --save react-native-google-analytics-bridge-mock
```

Usage
-----

### with mocha

Create a compiler that uses `babel-register` at the path you like. For example, create a file that contains below codes at `test/lib/babel-register.js`.

```js:babel-register.js
module.exports = require('babel-register')({
    plugins: ['react-native-google-analytics-bridge-mock/transform']
})
```

And then, you can test with:

```sh
mocha --compilers js:./test/lib/babel-register test
```

Or, you can use [mocha.opts](https://mochajs.org/#mochaopts)

```sh
 --compilers js:./test/lib/babel-register
```

### with babel

You can mock at development phase. Create a `.babelrc` file in your project root.

```json:.babelrc
{
  "presets": [
    "react-native"
  ],
  "env": {
    "development": {
      "plugins": [
        "react-native-google-analytics-bridge-mock/transform"
      ]
    }
  }
}
```

[babel-presets-react-native](https://github.com/facebook/react-native/tree/master/babel-preset) is required when you use custom `.babelrc` at react-native.

You may need to reset bundle cache to enable settings. Run `npm start -- --reset-cache`.

How it works
------------

react-native-google-analytics-bridge-mock/transform is a babel-plugin to transform the following code

```js
import GoogleAnalytics from `react-native-google-analytics-bridge`
```

into

```js
import GoogleAnalytics from `react-native-google-analytics-bridge-mock`
```

`react-native-google-analytics-bridge-mock` provides class definitions that has mocked methods provided by `react-native-google-analytics-bridge`.

License
-------

MIT
