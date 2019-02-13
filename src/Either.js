
/* eslint no-use-before-define: "off" */
const Right = function Right (value) {
    return {
        concat: either =>
            either.fold(
                err => Left.of(err),
                result => Right.of(value.concat(result))
            ),
        flatMap: morphism => morphism(value),
        fold: (leftMorphism, rightMorphism) => rightMorphism(value),
        isLeft: false,
        map: morphism => Right.of(morphism(value)),
        toString: () => `Right(${value})`
    };
};

Right.of = value => new Right(value);

const Left = function Left (value) {
    return {
        concat: () => Left.of(value),
        flatMap: () => value,
        fold: leftMorphism => leftMorphism(value),
        isLeft: true,
        map: () => Left.of(value),
        toString: () => `Left(${value})`
    };
};

Left.of = value => new Left(value);

const Either = {
    Left,
    Right
};

Either.of = Right.of;

Either.empty = empty => Right.of(empty);

Either.fromNullable = value =>
    value === null || typeof value === 'undefined'
        ? Left.of(null)
        : Right.of(value);

Either.try = (func, errorMessage) => (...args) => {
    try {
        return Right.of(func(...args));
    } catch (error) {
        return errorMessage
            ? Left.of(`${errorMessage}: ${error}`)
            : Left.of(error);
    }
};

module.exports = Either;
