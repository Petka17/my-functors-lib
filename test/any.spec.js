const { describe, it } = require('mocha');
const { expect } = require('chai');

const Any = require('../src/Any');

describe('Any', () => {
    it('has concat method', () => {
        const actual =
            Any.of(true)
                .concat(Any.of(false))
                .toString();
        const expected = Any.of(true).toString();

        expect(actual).to.equal(expected);
    });

});
