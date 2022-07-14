function getFrequencyTable(word) {
  return word.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});
}

export function checkGuess(guess, solution) {
  const frequencyTable = getFrequencyTable(solution);

  const result = {};

  // Check for green
  [...guess].forEach((letter, i) => {
    if (frequencyTable[letter] && solution[i] == letter) {
      result[i] = 'green';
      frequencyTable[letter]--;
    }
  });

  // Check for yellow
  [...guess].forEach((letter, i) => {
    if (result[i]) return;

    if (frequencyTable[letter]) {
      result[i] = 'yellow';
      frequencyTable[letter]--;
    }
  })

  return result;
}
