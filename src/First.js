const { Left } = require('./Either');

const First = function First (value) {
    return {
        concat: either =>
            value.isLeft
                ? either
                : First.of(value),
        fold: morphism => morphism(value),
        toString: () => `First(${value})`,
        value
    };
};

First.of = value => new First(value);

First.empty = () => First.of(Left.of());

module.exports = First;
