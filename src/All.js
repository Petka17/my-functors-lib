const All = function All (value) {
    return {
        concat: ({ value: otherValue }) =>
            All.of(value && otherValue),
        toString: () => `All(${value})`,
        value
    };
};

All.of = value => new All(value);

All.empty = () => All.of(true);

module.exports = All;
