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

asciiName.getNames('#');    // return an array of ["number sign", "pound"]
asciiName.getNames(35);     // return an array of ["number sign", "pound"]
```

## License

[MIT][license] License © [Heeseong Yoo][avocadee]

<!-------------------- Links ------------------------>
[avocadee]: https://github.com/avocadee
[license]: https://github.com/avocadee/ascii-name/blob/master/license
[ascii-name]: https://github.com/avocadee/ascii-name