const { describe, it } = require('mocha');
const { expect } = require('chai');

const Task = require('../src/Task');


describe('Task', () => {
    it('has fork method', () => {
        let actual = '';

        new Task((rej, res) => res('10'))
            .map(str => `${str}!`)
            .fork(
                error => {
                    actual = `err ${error}`;
                },
                result => {
                    actual = `success ${result}`;
                }
            );

        expect(actual).to.equal('success 10!');
    });

    it('has of method', () => {
        let actual = '';

        Task.reject('5')
            .map(str => `${str}!!!`)
            .fork(
                error => {
                    actual = `err ${error}`;
                },
                result => {
                    actual = `success ${result}`;
                }
            );

        const expected = 'success 5!!!';

        expect(actual).to.equal(expected);
    });

    it('has of method 2', () => {
        let actual = '';

        Task.of('Test').fork(
            e => actual = e,
            x => actual = x
        );


        const expected = 'Test';

        expect(actual).to.equal(expected);
    });
});
