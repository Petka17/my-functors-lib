
const { fromNullable } = require('./Either');

const FIRST = 0;

const concatUniq = (newElement, list) =>
    fromNullable(
        list.filter(elem => elem === newElement)[FIRST]
    ).fold(
        () => list.concat(newElement),
        () => list
    );

module.exports = { concatUniq };
