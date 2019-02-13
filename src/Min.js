const Min = function Min (value) {
    return {
        concat: ({ value: otherValue }) =>
            Min.of(
                value < otherValue
                    ? value
                    : otherValue
            ),
        toString: () => `Min(${value})`,
        value
    };
};

Min.of = value => new Min(value);

Min.empty = () => Min.of(Infinity);

module.exports = Min;
