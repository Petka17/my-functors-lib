const { describe, it } = require('mocha');
const { expect } = require('chai');

const ONE = 1;
const LazyBox = require('../src/LazyBox');

describe('LazyBox', () => {
    it('is mapping string', () => {
        const actual =
            LazyBox.of(() => ' 64  ')
                .map(str => str.trim())
                .map(parseInt)
                .map(num => num + ONE)
                .map(String.fromCharCode)
                .fold(str => str.toLowerCase());

        const expected = 'a';

        expect(actual).to.equal(expected);
    });

});
