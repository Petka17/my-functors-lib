const Sum = function Sum (value) {
    return {
        concat: ({ value: otherValue }) =>
            Sum.of(value + otherValue),
        toString: () => `Sum(${value})`,
        value
    };
};

Sum.of = value => new Sum(value);

/* eslint no-magic-numbers: "off" */
Sum.empty = () => Sum.of(0);

module.exports = Sum;
