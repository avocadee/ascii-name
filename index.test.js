const asciiText = require('./index');

describe('getName', () => {
    test('code index', () => {
        expect(asciiText.getName(58)).toBe('colon');
    });
    test('code index & return index', () => {
        expect(asciiText.getName(58, 0)).toBe('colon');
    });
    test('character', () => {
        debugger;
        expect(asciiText.getName(':')).toBe('colon');
    });
    test('character & return index', () => {
        expect(asciiText.getName(':', 0)).toBe('colon');
    });
});

describe('getNames', () => {
    test('code index', () => {
        expect(asciiText.getNames(58)[0]).toBe('colon');
    });
    test('character', () => {
        expect(asciiText.getNames(':')[0]).toBe('colon');
    });
});
