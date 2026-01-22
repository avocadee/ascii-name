import asciiText from './index.js';

describe('getName', () => {
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
    beforeEach(async () => {
        await asciiText.setLanguage('en');
    });

    test('default', () => {
        expect(asciiText.getLanguage()).toBe('en');
    });

    test('en', async () => {
        await asciiText.setLanguage('en');
        expect(asciiText.getLanguage()).toBe('en');
        expect(asciiText.getName(':')).toBe('colon');
    });

    test('ko', async () => {
        await asciiText.setLanguage('ko');
        expect(asciiText.getLanguage()).toBe('ko');
        expect(asciiText.getName(':')).toBe('콜론');
        expect(asciiText.getName(0)).toBe('null');
    });

    test('fr', async () => {
        await asciiText.setLanguage('fr');
        expect(asciiText.getLanguage()).toBe('fr');
        expect(asciiText.getName(':')).toBe('deux-points');
    });

    test('zh', async () => {
        await asciiText.setLanguage('zh');
        expect(asciiText.getLanguage()).toBe('zh');
        expect(asciiText.getName(':')).toBe('冒号');
    });

    test('ja', async () => {
        await asciiText.setLanguage('ja');
        expect(asciiText.getLanguage()).toBe('ja');
        expect(asciiText.getName(':')).toBe('コロン');
    });

    test('invalid', async () => {
        expect(asciiText.getLanguage()).toBe('en');

        await asciiText.setLanguage('invalid');
        expect(asciiText.getLanguage()).toBe('en');

        await asciiText.setLanguage('ko');
        expect(asciiText.getLanguage()).toBe('ko');

        await asciiText.setLanguage('invalid');
        expect(asciiText.getLanguage()).toBe('ko');
    });
});