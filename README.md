![Node.js Package](https://github.com/avocadee/ascii-name/workflows/Node.js%20Package/badge.svg)

[![License][license-image]][license-url]
[![npm](https://img.shields.io/npm/dt/ascii-name.svg)](https://www.npmjs.com/package/ascii-name)

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/make-coverage-badge.svg


# ascii-name
Return name(s) of ASCII code characters in multiple languages.

## Install

```bash
$ npm install ascii-name
```

## Usage

```javascript
const asciiName = require('ascii-name');

// String is supported
asciiName.getName(':');     // returns 'colon'

// ASCII decimal value is supported
asciiName.getName(58);      // returns 'colon'

// Multiple names supported (if available in JSON)
asciiName.getName('#');        // returns 'number sign' (default index 0)
asciiName.getName('#', 0);     // returns 'number sign'
asciiName.getName('#', 1);     // returns 'pound' (see ascii-name_en.json)

// Multi-language support
asciiName.setLanguage('ko');   // set language code (Korean)
asciiName.getLanguage();       // returns 'ko' (Default: 'en')

asciiName.getName(':');        // returns '콜론' from ascii-name_ko.json
asciiName.getName(0);          // returns 'null' from ascii-name_en.json (fallback to default language if not in current)
```

## Supported Languages

- **en**: English
- **de**: German
- **es**: Spanish
- **fr**: French
- **it**: Italian
- **pt**: Portuguese
- **ru**: Russian
- **hi**: Hindi
- **ar**: Arabic
- **ko**: Korean
- **ja**: Japanese
- **zh**: Chinese

## Contributing

Feel free to contribute by adding more languages or reporting issues!
Make a Pull Request at [ascii-name](https://github.com/avocadee/ascii-name) if needed.

## License

[MIT][license] License © [Heeseong Yoo][avocadee]

<!-------------------- Links ------------------------>
[avocadee]: https://github.com/avocadee
[license]: https://github.com/avocadee/ascii-name/blob/master/license
[ascii-name]: https://github.com/avocadee/ascii-name
