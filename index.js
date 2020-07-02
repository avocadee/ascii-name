'use strict';

let asciiNameTable = require('./ascii-name_en.json');

const getName = (c, returnIndex) => {
    return (returnIndex) ? getNames(c)[returnIndex] : getNames(c)[0];
};

const getNames = (c) => {
    let codeIndex;
    if (typeof c === "string") {
        codeIndex = c.charCodeAt(0);
    } else if (typeof c === "number") {
        codeIndex = c;
    } else {
        return null; //TODO: throw exception
    }

    if (codeIndex < 0 || codeIndex > 255) {
        return null; //TODO: throw exception
    }
    return asciiNameTable[codeIndex];
};

module.exports.getName = getName;
module.exports.getNames = getNames;