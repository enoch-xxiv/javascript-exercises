const repeatString = function(string, repeats) {
    let array = [];
    if (repeats >= 0) {
        for (let i = 0; i < repeats; i++) {
            array.push(string)
        };
        let newString = array.join('');
        return newString; 
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
