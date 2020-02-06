export const getIncrementor = function () {
    let i = 0;
    return function (inc) {
        return i += inc;
    };
};