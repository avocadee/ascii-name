![Node.js Package](https://github.com/avocadee/ascii-name/workflows/Node.js%20Package/badge.svg)

[![License][license-image]][license-url]
[![npm](https://img.shields.io/npm/dt/ascii-name.svg)](https://www.npmjs.com/package/ascii-name)

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/make-coverage-badge.svg


# ascii-name
Return name of ascii code

## Important

Feel free to use it.
Now it supports English only.
Make a Pull Request [ascii-name] if needed. (e.g. Multiple language)


## Install

```
$ npm install ascii-name
```

## Usage

```js
const asciiName = require('ascii-name');

// string is supported
asciiName.getName(':');     //return 'colon'

// ascii code index is supported (Decimal)
asciiName.getName(53);      //return 'colon'

// multiple names supported
asciiName.getName('#');     //return 'number sign'
asciiName.getName('#', 0);  //return 'number sign'
asciiName.getName('#', 1);  //return 'pound' (see ascii-name_en.json)

// multi language supported
asciiName.setLanguage('ko') // set language code
asciiName.getLanguage();    // return current language code (Default: en)

asciiText.getName(':')      // return '콜론' from ascii-name_ko.json
asciiText.getName(0)        // return 'null' from ascii-name_en.json (default) as ascii-name_ko.json does not have the value of 0

```

## License

[MIT][license] License © [Heeseong Yoo][avocadee]

<!-------------------- Links ------------------------>
[avocadee]: https://github.com/avocadee
[license]: https://github.com/avocadee/ascii-name/blob/master/license
[ascii-name]: https://github.com/avocadee/ascii-name
