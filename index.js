'use strict';

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper function to load JSON files
const loadJson = (path) => {
    try {
        const fullPath = join(__dirname, path);
        return JSON.parse(readFileSync(fullPath, 'utf8'));
    } catch (err) {
        return null;
    }
};

const asciiNameDefaultTable = loadJson('./ascii-name_en.json');
let asciiNameMultiLanguageTable;
let currentLanguage = "en";

const setLanguage = async (lang) => {
    if (lang === 'en') {
        asciiNameMultiLanguageTable = null;
        currentLanguage = 'en';
        return;
    }

    const table = loadJson(`./ascii-name_${lang}.json`);
    if (table) {
        asciiNameMultiLanguageTable = table;
        currentLanguage = lang;
    } else {
        console.error(`${lang} is not supported or failed to load.`);
    }
};

const getLanguage = () => {
    return currentLanguage;
};

const getName = (c, returnIndex = 0) => {
    const nameArray = _getNames(c);
    return (nameArray) ? nameArray[returnIndex] : null;
};

const _getNames = (c) => {
    let codeIndex;

    if (c === undefined) return null;

    if (typeof c === "string") {
        codeIndex = c.charCodeAt(0);
    } else if (typeof c === "number") {
        codeIndex = c;
    } else {
        return null;
    }

    if (codeIndex < 0 || codeIndex > 255) {
        return null;
    }
    return _getNameFromTables(codeIndex);
};

const _getNameFromTables = (codeIndex) => {
    if (asciiNameMultiLanguageTable) {
        const nameArray = asciiNameMultiLanguageTable[codeIndex];
        if (nameArray && nameArray.length > 0) {
            return nameArray;
        }
    }
    return asciiNameDefaultTable[codeIndex];
};

export default {
    getName,
    setLanguage,
    getLanguage
};