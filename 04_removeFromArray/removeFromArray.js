function removeFromArray (arr, ...selections) {
    return arr.filter(i => !selections.includes(i)) 
}
// Do not edit below this line
module.exports = removeFromArray;
