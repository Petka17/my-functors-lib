const LazyBox = function LazyBox (func) {
    return {
        fold: morphism => morphism(func()),
        map: morphism => LazyBox.of(() => morphism(func()))
    };
};

LazyBox.of = func => new LazyBox(func);

module.exports = LazyBox;
