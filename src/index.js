exports.min = function min([array]) {
    if (array.length === 0 || array===undefined) {
        return 0;
    } 
    else {
        let minArray = Math.min(array);
        return minArray;
    }
};

exports.max = function max(array) {
    if (array.length === 0) {
        return 0;} 
    // else {
    //     let maxArray = Math.max(array);
    //     return maxArray;
    // }
};

exports.avg = function avg([array]) {
    if (array.length === 0) {
        return 0;
    } else {
        let avgArray = array.reduce() / 2;
        return avgArray;
    }
};
