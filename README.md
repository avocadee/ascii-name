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