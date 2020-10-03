exports.min = function min(array) {
    // if (array.length === 0 ) {
    //     return 0;
    // } 
    // else {
        let minArray = Math.min.apply(null,array);
        return minArray;
    // }
};

exports.max = function max(array) {
    //  if (array.length === 0) {
    //  return 0;} 
    // else {
        let maxArray = Math.max.apply(null, array);
        return maxArray;
    // }
};

exports.avg = function avg([array]) {
    // if (array.length === 0) {
    //     return 0;
    // } else {
        let avgArray1 = array.reduce((a, b)=> a+b),
        avgArray=avgArray1/2
        
        return avgArray;
    // }
};
