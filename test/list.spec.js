const { describe, it } = require('mocha');
const { expect } = require('chai');

const List = require('../src/List');
const Sum = require('../src/Sum');

/* eslint no-magic-numbers: "off" */
describe('List', () => {
    it('has fold method', () => {
        const actual =
            List.of(Sum.of(1), Sum.of(2), Sum.of(3))
                .fold(Sum.empty())
                .toString();

        const expected = Sum.of(6).toString();
    
        expect(actual).to.equal(expected);
    });

    it('has foldMap method', () => {
        const actual =
            List.of(1, 2, 3)
                .foldMap(Sum.of, Sum.empty())
                .toString();

        const expected = Sum.of(6).toString();

        expect(actual).to.equal(expected);
    });


});
