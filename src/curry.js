/* eslint-disable */
//const exec = fn => (...args) => fn(...args);

const curry = (fn, length, ...args) =>
    (...argsBase) => {
        const argsLength = (length || fn.length) - argsBase.length - args.length;
        const newArgs = args.concat(argsBase);

        return argsLength > 0
            ? curry(fn, argsLength, ...newArgs)
            : fn(...newArgs)
    };

module.exports = curry;
