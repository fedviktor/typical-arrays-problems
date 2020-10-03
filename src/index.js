exports.min = function min(array) {
    if (!Array.isArray(array) || array.length == 0  ) {
        return 0;
    } 
    
        let minArray = Math.min.apply(null,array);
        return minArray;
    // }
};

exports.max = function max(array) {
     if (!Array.isArray(array) || array.length == 0 ) {
     return 0;} 
    // else {
        let maxArray = Math.max.apply(null, array);
        return maxArray;
    // }
};

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length == 0  ) {
        return 0;
    }
    //  else {
        let avgArray = array.reduce((a, b )=>  a+b, 0)/array.length
        
        
        return avgArray;
    // }
};
