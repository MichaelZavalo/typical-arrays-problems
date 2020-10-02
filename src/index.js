exports.min = function min(array) {
    let result = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return result = Math.min(...array);
    }
}

exports.max = function max(array) {
    let result = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return result = Math.max(...array);
    }
}

exports.avg = function avg(array) {
    let result = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let reducer = (accum, currVal) => accum + currVal;
        return result = array.reduce((reducer),0) / array.length;
    }
}
