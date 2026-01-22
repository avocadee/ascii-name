'use strict';

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// ESM environment path helpers
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper to load JSON from the project root (one level up from src)
const loadJson = (fileName) => {
    try {
        // When running from src/index.js, root is '../'
        // When running from dist/index.js, root is also '../'
        const fullPath = join(__dirname, '..', fileName);
        return JSON.parse(readFileSync(fullPath, 'utf8'));
    } catch (err) {
        return null;
    }
};

const asciiNameDefaultTable = loadJson('ascii-name_en.json');
let asciiNameMultiLanguageTable = null;
let currentLanguage = "en";

export const setLanguage = (lang) => {
    if (lang === 'en') {
        asciiNameMultiLanguageTable = null;
        currentLanguage = 'en';
        return;
    }

    const table = loadJson(`ascii-name_${lang}.json`);
    if (table) {
        asciiNameMultiLanguageTable = table;
        currentLanguage = lang;
    } else {
        console.error(`${lang} is not supported or failed to load.`);
    }
};

export const getLanguage = () => {
    return currentLanguage;
};

export const getName = (c, returnIndex = 0) => {
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

    if (codeIndex < 0 || codeIndex > 255) return null;
    return _getNameFromTables(codeIndex);
};

const _getNameFromTables = (codeIndex) => {
    if (asciiNameMultiLanguageTable) {
        const nameArray = asciiNameMultiLanguageTable[codeIndex];
        if (nameArray && nameArray.length > 0) return nameArray;
    }
    return asciiNameDefaultTable ? asciiNameDefaultTable[codeIndex] : null;
};

export default {
    getName,
    setLanguage,
    getLanguage
};