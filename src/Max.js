const Max = function Max (value) {
    return {
        concat: ({ value: otherValue }) =>
            Max.of(
                value > otherValue
                    ? value
                    : otherValue
            ),
        toString: () => `Max(${value})`,
        value
    };
};

Max.of = value => new Max(value);

Max.empty = () => Max.of(-Infinity);

module.exports = Max;
