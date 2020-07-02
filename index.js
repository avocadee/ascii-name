'use strict';

const asciiNameDefaultTable = require('./ascii-name_en.json');

let asciiNameMultiLanguageTable;
let currentLanguage = "en";

// Support ISO 639-1 Language Codes https://www.w3schools.com/tags/ref_language_codes.asp
const setLanguage = (lang) => {
    let prev = asciiNameMultiLanguageTable;
    try {
        asciiNameMultiLanguageTable = require('./ascii-name_' + lang + '.json');
        currentLanguage = lang;
    } catch (err){
        asciiNameMultiLanguageTable = prev;
        console.log(lang + " is not supported.");
    }
}

const getLanguage = () => {
    return currentLanguage;
}

const getName = (c, returnIndex) => {
    if (returnIndex === undefined) {
        returnIndex = 0;
    }
    const nameArray = _getNames(c);
    return (nameArray) ? nameArray[returnIndex] : null;
};

const _getNames = (c) => {
    let codeIndex;

    if (c === undefined) {
        return null;
    }
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
    return _getNameFromTables(codeIndex);
};

const _getNameFromTables = (codeIndex) => {
    if (asciiNameMultiLanguageTable) {
        const nameArray = asciiNameMultiLanguageTable[codeIndex];
        if (nameArray && nameArray.length > 0) {
            return nameArray;
        }
    };
    return asciiNameDefaultTable[codeIndex];
};

// module.exports.getName = getName;
// module.exports.getNames = getNames;
// module.exports.setLanguage = setLanguage;
// module.exports.getLanguage = getLanguage;

module.exports = {
    getName: getName,
    setLanguage: setLanguage,
    getLanguage: getLanguage
}