![Node.js Package](https://github.com/avocadee/ascii-name/workflows/Node.js%20Package/badge.svg)
[![License][license-image]][license-url]
[![npm](https://img.shields.io/npm/dt/ascii-name.svg)](https://www.npmjs.com/package/ascii-name)

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/make-coverage-badge.svg

# ascii-name
Return name(s) of ASCII code characters in multiple languages.

> **Note**: As of version **2.0.0**, this package is **Pure ESM**.  
> If you are using `require()` (CommonJS), please stay on version **1.x.x**.

## Install

```bash
$ npm install ascii-name
```

## Usage

Usage
Since v2.0.0, you should use import and handle setLanguage as an asynchronous function.

```javascript
import asciiName from 'ascii-name';

// String is supported
asciiName.getName(':');     // returns 'colon'

// ASCII decimal value is supported
asciiName.getName(58);      // returns 'colon'

// Multiple names supported (if available in JSON)
asciiName.getName('#');        // returns 'number sign' (default index 0)
asciiName.getName('#', 1);     // returns 'pound'

// Multi-language support (Async)
await asciiName.setLanguage('ko');   // set language code (Korean)
asciiName.getLanguage();             // returns 'ko' (Default: 'en')

asciiName.getName(':');        // returns '콜론'
```

## Supported Languages

- **en**: English
- **de**: German (Added in v2.0.0)
- **es**: Spanish
- **fr**: French
- **it**: Italian (Added in v2.0.0)
- **pt**: Portuguese (Added in v2.0.0)
- **ru**: Russian (Added in v2.0.0)
- **hi**: Hindi
- **ar**: Arabic
- **ko**: Korean
- **ja**: Japanese
- **zh**: Chinese

## Legacy Support (v1.x.x)
If your project does not support ESM, install the legacy version:

```
npm install ascii-name@1
```

```javascript
const asciiName = require('ascii-name');
asciiName.setLanguage('ko'); // Synchronous in v1.x
console.log(asciiName.getName(':'));
```

## Contributing

Feel free to contribute by adding more languages or reporting issues!
Make a Pull Request at [ascii-name](https://github.com/avocadee/ascii-name) if needed.

## License

[MIT][license] License © [Heeseong Yoo][avocadee]

<!-------------------- Links ------------------------>
[avocadee]: https://github.com/avocadee
[license]: https://github.com/avocadee/ascii-name/blob/master/license
[ascii-name]: https://github.com/avocadee/ascii-name
