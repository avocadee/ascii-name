import asciiText from './src/index.js';
import { jest } from '@jest/globals';

describe('getName', () => {
    // ESM 환경에서는 모듈이 싱글톤처럼 동작하므로 
    // 매번 새로 import할 필요 없이 초기화 로직만 신경 쓰면 됩니다.
    beforeEach(() => {
        asciiText.setLanguage('en');
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
    beforeEach(() => {
        asciiText.setLanguage('en');
    });

    test('default', () => {
        expect(asciiText.getLanguage()).toBe('en');
    });

    test('en', () => {
        asciiText.setLanguage('en');
        expect(asciiText.getLanguage()).toBe('en');
        expect(asciiText.getName(':')).toBe('colon');
    });

    test('ko (Korean)', () => {
        asciiText.setLanguage('ko');
        expect(asciiText.getLanguage()).toBe('ko');
        expect(asciiText.getName(':')).toBe('콜론');
        // Fallback check
        expect(asciiText.getName(1)).toBe('start of heading');
    });

    test('fr (French)', () => {
        asciiText.setLanguage('fr');
        expect(asciiText.getLanguage()).toBe('fr');
        expect(asciiText.getName(':')).toBe('deux-points');
    });

    test('zh (Chinese)', () => {
        asciiText.setLanguage('zh');
        expect(asciiText.getLanguage()).toBe('zh');
        expect(asciiText.getName(':')).toBe('冒号');
    });

    test('ja (Japanese)', () => {
        asciiText.setLanguage('ja');
        expect(asciiText.getLanguage()).toBe('ja');
        expect(asciiText.getName(':')).toBe('コロン');
    });

    test('invalid language should keep previous language', () => {
        asciiText.setLanguage('en');
        expect(asciiText.getLanguage()).toBe('en');

        asciiText.setLanguage('invalid');
        expect(asciiText.getLanguage()).toBe('en');

        asciiText.setLanguage('ko');
        asciiText.setLanguage('invalid');
        expect(asciiText.getLanguage()).toBe('ko');
    });
});