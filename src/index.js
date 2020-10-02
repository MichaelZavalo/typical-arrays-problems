exports.min = function min(array) {
    let result = 0;
    if (array === [] || array.length === 0) {
        result = 0;
    } else {
        result = Math.min(...array);
    }
    return result;
}

exports.max = function max(array) {
    let result = 0;
    if (array === [] || array.length === 0) {
        result = 0;
    } else {
        result = Math.max(...array);
    }
    return result;
}

exports.avg = function avg(array) {
    let result = 0;
    if (array === [] || array.length === 0) {
        result = 0;
    } else {
        let reducer = (accum, currVal) => accum + currVal;
        result = array.reduce((reducer)) / array.length;
    }
    return result;
}
