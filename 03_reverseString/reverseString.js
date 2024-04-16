function reverseString(string) {

    letters = string.split("");
    reversedLetters = letters.reverse();
    reversedString = reversedLetters.join('');

    return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
