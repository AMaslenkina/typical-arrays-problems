exports.min = function min(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let min = array[0];
        for (let j of array) {
            if (j < min) {
                min = j;
            }
        }
        return min;
    }
    return 0;
}

exports.avg = function avg(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let sum = 0;
        for (let j of array) {
            sum += j;
        }
        return (sum / array.length).toFixed(2);
    }
    return 0;
}

exports.max = function max(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let max = 0;
        for (let j of array) {
            if (j > max) {
                max = j;
            }
        }
        return max;
    }
    return 0;
}
