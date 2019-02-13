const Task = function Task (func) {
    return {
        chain: morphism => (rej, res) => {
            func(rej, value => res(morphism(value)));
        },
        fork: func,
        map: morphism => new Task(
            (rej, res) => {
                func(rej, value => res(morphism(value)));
            }
        )
    };
};

Task.of = value => new Task((rej, res) => res(value));
Task.reject = value => new Task(rej => rej(value));

module.exports = Task;
