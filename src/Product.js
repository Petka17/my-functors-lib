const Product = function Product (value) {
    return {
        concat: ({ value: otherValue }) =>
            Product.of(value * otherValue),
        toString: () => `Product(${value})`,
        value
    };
};

Product.of = value => new Product(value);

/* eslint no-magic-numbers: "off" */
Product.empty = () => Product.of(1);

module.exports = Product;
