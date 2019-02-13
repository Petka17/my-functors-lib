
const { describe, it } = require('mocha');
const { expect } = require('chai');

const ONE = 1;
const Box = require('../src/Box');

describe('Box', () => {
    it('is mapping string', () => {
        const actual =
            Box.of(' 64  ')
                .map(str => str.trim())
                .map(parseInt)
                .map(num => num + ONE)
                .map(String.fromCharCode)
                .toString();

        const expected = Box.of('A').toString();

        expect(actual).to.equal(expected);
    });

});
