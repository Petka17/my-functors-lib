const Any = function Any (value) {
    return {
        concat: ({ value: otherValue }) =>
            Any.of(value || otherValue),
        toString: () => `Any(${value})`,
        value
    };
};

Any.of = value => new Any(value);

Any.empty = () => Any.of(false);

module.exports = Any;
