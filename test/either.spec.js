
const { describe, it } = require('mocha');
const { expect } = require('chai');

const ONE = 1;
const Either = require('../src/Either');

describe('Either', () => {
    it('is has try method', () => {
        const actual = Either.try(param => {
            throw new Error(`Some Error with param ${param}`);
        })('word').toString();

        const expected = 'Left(Error: Some Error with param word)';

        expect(actual).to.equal(expected);
    });

    it('is has fromNullable method', () => {
        const findColor = name =>
            Either.fromNullable({
                blue: '#3b5998',
                red: '#ff4444',
                yellow: '#fff68f'
            }[name]);

        const actual =
            findColor('red')
                .map(str => str.slice(ONE))
                .fold(() => 'no color', str => str.toUpperCase());

        const expected = 'FF4444';

        expect(actual).to.equal(expected);
    });

});
