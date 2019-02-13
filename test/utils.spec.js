const { describe, it } = require('mocha');
const { expect } = require('chai');

const { concatUniq } = require('../src/utils');

describe('utils', () => {
    it('has concatUniq method', () => {
        const actual = concatUniq('c', concatUniq('a', ['a', 'b']));
        const expected = ['a', 'b', 'c'];

        expect(actual).to.deep.equal(expected);
    });
});
