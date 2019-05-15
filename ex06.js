function countWords(inputWords) {
  return inputWords.reduce((accumulator, word) => {
    if (accumulator[word]) {
      accumulator[word]++;
    } else {
      accumulator[word] = 1;
    }
    return accumulator;
  }, {});
}

module.exports = countWords
