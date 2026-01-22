"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  getLanguage: () => getLanguage,
  getName: () => getName,
  setLanguage: () => setLanguage
});
module.exports = __toCommonJS(index_exports);
var import_fs = require("fs");
var import_path = require("path");
var import_url = require("url");
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = (0, import_path.dirname)(__filename);
var loadJson = (fileName) => {
  try {
    const fullPath = (0, import_path.join)(__dirname, "..", fileName);
    return JSON.parse((0, import_fs.readFileSync)(fullPath, "utf8"));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getLanguage,
  getName,
  setLanguage
});
