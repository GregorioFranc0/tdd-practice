function reverseString(string) {
  let newString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    newString.push(string[i]);
  }
  let newWord = newString.join('');
  return newWord;
}

// console.log(reverseString("funny"))
// console.log(reverseString("eradicate"))
// console.log(reverseString("annihilation"))

module.exports = reverseString;
