const { describe, it } = require('mocha');
const { expect } = require('chai');

const Sum = require('../src/Sum');

/* eslint no-magic-numbers: "off" */
describe('Sum', () => {
    it('has concat method', () => {
        const actual =
            Sum.of(2)
                .concat(Sum.of(3))
                .toString();

        const expected = Sum.of(5).toString();

        expect(actual).to.equal(expected);
    });
});
