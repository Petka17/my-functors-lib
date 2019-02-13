const Fn = function Fn (morphism) {
    return {
        concat: other =>
            Fn.of(value => morphism(value).concat(other.fold(value))),
        fold: morphism,
        toString: () => `Fn(${morphism})`,
        morphism
    };
};

Fn.of = morphism => new Fn(morphism);

module.exports = Fn;
