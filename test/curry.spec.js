
const { describe, it } = require('mocha');
const { expect } = require('chai');

const curry = require('../src/curry');

/* eslint id-length: "off"  */
/* eslint no-magic-numbers: "off"  */
/* eslint max-params: "off"  */
describe('Curry', () => {
    it('doesn\'t change origin function', () => {
        const fn = (x, y, z) => x + y + z;

        const actual = curry(fn)(1, 2, 3);
        const expected = 6;

        expect(actual).to.equal(expected);
    });

    it('apply two arguments and then one', () => {
        const fn = (x, y, z) => x + y + z;

        const actual = curry(fn)(1, 2)(3);
        const expected = 6;

        expect(actual).to.equal(expected);
    });

    it('apply one arguments and then two', () => {
        const fn = (x, y, z) => x + y + z;

        const actual = curry(fn)(1)(2, 3);
        const expected = 6;

        expect(actual).to.equal(expected);
    });

    it('apply one argument at a time', () => {
        const fn = (x, y, z) => x + y + z;

        const actual = curry(fn)(1)(2)(3);
        const expected = 6;

        expect(actual).to.equal(expected);
    });

    it('apply one argument at a time with 4 arguments', () => {
        const fn = (x, y, z, i) => x + y + z + i;

        const actual = curry(fn)(1)(2)(3)(4);
        const expected = 10;

        expect(actual).to.equal(expected);
    });

    it('partial apply arguments while curring', () => {
        const fn = (x, y, z, i) => x + y + z + i;

        const actual = curry(fn, 4, 1, 2)(3)(4);
        const expected = 10;

        expect(actual).to.equal(expected);
    });
});
