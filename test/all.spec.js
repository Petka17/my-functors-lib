const { describe, it } = require('mocha');
const { expect } = require('chai');

const All = require('../src/All');

describe('All', () => {
    it('has concat method', () => {
        const actual =
            All.of(true)
                .concat(All.of(false))
                .toString();
        const expected = All.of(false).toString();
    
        expect(actual).to.equal(expected);
    });
});
