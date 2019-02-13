const { describe, it } = require('mocha');
const { expect } = require('chai');

const First = require('../src/First');

describe('First', () => {
    it('has concat method', () => {
        const actual =
            First.of('bla')
                .concat(First.of('some other text'))
                .toString();
        const expected = First.of('bla').toString();

        expect(actual).to.equal(expected);
    });
});
