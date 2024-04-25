function sumAll (a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        if (a > 0 && b > 0) {
            const start = Math.min(a,b);
            const end = Math.max(a,b);
            let sum = 0;
            for (i = start; i <= end; i++) {
                sum += i;
            }
            return sum;
        }
        else {
            return "ERROR";
        }
    }
    else {
        return "ERROR";
    };
}


// Do not edit below this line
module.exports = sumAll;
