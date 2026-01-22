// src/index.js
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var loadJson = (fileName) => {
  try {
    const fullPath = join(__dirname, "..", fileName);
    return JSON.parse(readFileSync(fullPath, "utf8"));
  } catch (err) {
    return null;
  }
};
var asciiNameDefaultTable = loadJson("ascii-name_en.json");
var asciiNameMultiLanguageTable = null;
var currentLanguage = "en";
var setLanguage = (lang) => {
  if (lang === "en") {
    asciiNameMultiLanguageTable = null;
    currentLanguage = "en";
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
var getLanguage = () => {
  return currentLanguage;
};
var getName = (c, returnIndex = 0) => {
  const nameArray = _getNames(c);
  return nameArray ? nameArray[returnIndex] : null;
};
var _getNames = (c) => {
  let codeIndex;
  if (c === void 0) return null;
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
var _getNameFromTables = (codeIndex) => {
  if (asciiNameMultiLanguageTable) {
    const nameArray = asciiNameMultiLanguageTable[codeIndex];
    if (nameArray && nameArray.length > 0) return nameArray;
  }
  return asciiNameDefaultTable ? asciiNameDefaultTable[codeIndex] : null;
};
var index_default = {
  getName,
  setLanguage,
  getLanguage
};
export {
  index_default as default,
  getLanguage,
  getName,
  setLanguage
};
