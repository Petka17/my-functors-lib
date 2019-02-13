const { describe, it } = require('mocha');
const { expect } = require('chai');

const Product = require('../src/Product');

/* eslint no-magic-numbers: "off" */
describe('Product', () => {
    it('has concat method', () => {
        const actual =
            Product.of(2)
                .concat(Product.of(3))
                .toString();

        const expected = Product.of(6).toString();

        expect(actual).to.equal(expected);
    });
});
