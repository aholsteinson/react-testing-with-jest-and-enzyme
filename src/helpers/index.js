/**
  * @method getLetterMatchCount
  * @param {string} guessedWord - Guessed word
  * @param {string} secretWord - Secret word
  * @returns {number} - Number of letters matches between guessed word and secret word
*/

export function getLetterMatchCount(guessedWord, secretWord)  {
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedWordSet = new Set(guessedWord.split(''));

    return [...secretLetterSet].filter(letter => guessedWordSet.has(letter)).length;    
};