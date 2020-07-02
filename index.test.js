describe('getName', () => {
    let asciiText;
    beforeEach(() => {
        asciiText = require('./index');
    });

    afterEach(() => {
        jest.resetModules();
    });

    test('code index', () => {
        expect(asciiText.getName(58)).toBe('colon');
    });
    test('code index & return index', () => {
        expect(asciiText.getName(58, 0)).toBe('colon');
    });
    test('code index not in range 0 to 255', () => {
        expect(asciiText.getName(-1)).toBe(null);
        expect(asciiText.getName(256)).toBe(null);
    });
    test('code index not string nor numeric', () => {
        expect(asciiText.getName()).toBe(null);
        expect(asciiText.getName(true)).toBe(null);
    });
    test('character', () => {
        expect(asciiText.getName(':')).toBe('colon');
    });
    test('character & return index', () => {
        expect(asciiText.getName(':', 0)).toBe('colon');
    });
});

describe('setLanguage', () => {
    let asciiText;
    beforeEach(() => {
        asciiText = require('./index');
    });

    afterEach(() => {
        jest.resetModules();
    });

    test('default', () => {
        expect(asciiText.getLanguage()).toBe('en');
    });

    test('en', () => {
        asciiText.setLanguage('en');
        expect(asciiText.getLanguage()).toBe('en');
        expect(asciiText.getName(':')).toBe('colon');
    });
    test('kr', () => {
        asciiText.setLanguage('ko');
        expect(asciiText.getLanguage()).toBe('ko');
        expect(asciiText.getName(':')).toBe('콜론');
        expect(asciiText.getName(0)).toBe('null');
        expect(asciiText.getName(1)).toBe('start of heading');
    });
    test('invalid', () => {
        expect(asciiText.getLanguage()).toBe('en');
        asciiText.setLanguage('invalid');
        expect(asciiText.getLanguage()).toBe('en');
        expect(asciiText.getName(':')).toBe('colon');
        asciiText.setLanguage('ko');
        expect(asciiText.getLanguage()).toBe('ko');
        expect(asciiText.getName(':')).toBe('콜론');
        asciiText.setLanguage('invalid');
        expect(asciiText.getLanguage()).toBe('ko');
        expect(asciiText.getName(':')).toBe('콜론');
    });
});
