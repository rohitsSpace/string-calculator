/**
 * StringCalculator class to perform sum operations on a string of numbers.
 */
class StringCalculator {
  /**
   * Adds up numbers in a given string.
   *
   * @param {string} numbers - A string containing comma-separated numbers, possibly with custom delimiters.
   * @returns {number} The sum of the numbers in the string.
   * @throws Will throw an error if the string contains negative numbers.
   */
  add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    let numberSequence = numbers;

    // Check for custom delimiter
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
      numberSequence = numbers.substring(delimiterEndIndex + 1);
    }

    const numberArray = numberSequence.split(delimiter);
    const parsedNumbers = [];
    const negativeNumbers = [];

    for (const number of numberArray) {
      const parsedNumber = Number(number);
      if (!isNaN(parsedNumber)) {
        if (parsedNumber < 0) {
          negativeNumbers.push(parsedNumber);
        } else {
          parsedNumbers.push(parsedNumber);
        }
      }
    }

    if (negativeNumbers.length) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(', ')}`
      );
    }

    return parsedNumbers.reduce((sum, current) => sum + current, 0);
  }
}

module.exports = StringCalculator;
