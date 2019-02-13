const Box = function Box (value) {
    return {
        chain: morphism => morphism(value),
        fold: morphism => morphism(value),
        map: morphism => Box.of(morphism(value)),
        toString: () => `Box(${value})`
    };
};

Box.of = value => new Box(value);

module.exports = Box;
