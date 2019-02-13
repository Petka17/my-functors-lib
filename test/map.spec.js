const { describe, it } = require('mocha');
const { expect } = require('chai');

const Map = require('../src/Map');
const Sum = require('../src/Sum');

/* eslint no-magic-numbers: "off" */
describe('Map', () => {
    it('has fold method', () => {
        const actual =
            Map.of(
                {
                    brain: Sum.of(1),
                    sara: Sum.of(2)
                })
                .fold(Sum.empty())
                .toString();

        const expected = Sum.of(3).toString();

        expect(actual).to.equal(expected);
    });

    it('has foldMap method', () => {
        const actual =
            Map.of(
                {
                    brain: 1,
                    sara: 2
                })
                .foldMap(Sum.of, Sum.empty())
                .toString();

        const expected = Sum.of(3).toString();

        expect(actual).to.equal(expected);
    });


});
