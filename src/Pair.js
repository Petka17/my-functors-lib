/* eslint id-length: "off" */
const Pair = function Pair (x, y) {
    return {
        concat: ({ x: x1, y: y1 }) =>
            Pair.of(x.concat(x1), y.concat(y1)),
        toString: () => `Pair(${x}, ${y})`,
        x,
        y
    };
};

Pair.of = (x, y) => new Pair(x, y);

module.exports = Pair;
