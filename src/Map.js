const { Map } = require('immutable');

/* eslint no-extend-native: "off" */
/* eslint id-length: "off" */
/* eslint func-names: "off" */

Map.of = object => new Map(object);

// Monad
Map.prototype.chain = Map.prototype.flatMap;

// Semigroup
Map.prototype.concat = function (other) {
    return this.mergeWith((prev, next) => prev.concat(next), other);
};

// Monoid
Map.empty = Map.of({});
Map.prototype.empty = Map.empty;

// Foldable
Map.prototype.fold = function (empty) {
    return empty === null || typeof empty === 'undefined'
        ? this.reduce((acc, x) => acc.concat(x))
        : this.reduce((acc, x) => acc.concat(x), empty);
};

Map.prototype.foldMap = function (f, empty) {
    return this.map(f).fold(empty);
};

// Traverable
Map.prototype.traverse = function (point, f) {
    return this.reduce(
        (acc, v, k) =>
            f(v, k)
                .map(x => y => y.merge({ [k]: x }))
                .ap(acc), point(Map.empty));
};

Map.prototype.sequence = function (point) {
    return this.traverse(point, x => x);
};


module.exports = Map;
