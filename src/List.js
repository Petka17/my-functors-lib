const { List } = require('immutable');

/* eslint no-extend-native: "off" */
/* eslint id-length: "off" */
/* eslint func-names: "off" */

// List.of = arr => new List(arr);

// Monad
List.prototype.chain = List.prototype.flatMap;

// Monoid
List.empty = List.of([]);
List.prototype.empty = List.empty;

// Traversable
List.prototype.traverse = function (point, f) {
    return this.reduce((ys, x) =>
        f(x).map(x => y => y.concat([x]))
            .ap(ys), point(List.empty));
};

List.prototype.sequence = function (point) {
    return this.traverse(point, x => x);
};

// Foldable
List.prototype.fold = function (empty) {
    return empty === null || typeof empty === 'undefined'
        ? this.reduce((acc, x) => acc.concat(x))
        : this.reduce((acc, x) => acc.concat(x), empty);
};

List.prototype.foldMap = function (f, empty) {
    return this.map(f).fold(empty);
};

// Applicative
List.prototype.ap = function (other) {
    return this.map(f => other.map(x => f(x))).flatten();
};


module.exports = List;
