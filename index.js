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
   * @example
   * const calculator = new StringCalculator();
   * calculator.add(""); // returns 0
   * calculator.add("1"); // returns 1
   * calculator.add("1,5"); // returns 6
   * calculator.add("1\n2,3"); // returns 6
   * calculator.add("//;\n1;2"); // returns 3
   * calculator.add("//[*][%]\n1*2%3"); // returns 6
   * calculator.add("//[***]\n15***21***112"); // returns 148
   */
  add(numbers) {
    if (!numbers) return 0;

    const { delimiter, numberSequence } =
      this._extractDelimiterAndNumbers(numbers);

    const { parsedNumbers, negativeNumbers } = this._parseNumbers(
      numberSequence,
      delimiter
    );

    if (negativeNumbers.length) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(', ')}`
      );
    }

    return parsedNumbers.reduce((sum, current) => sum + current, 0);
  }

  /**
   * Extracts the delimiter and number sequence from the input string.
   *
   * @private
   * @param {string} numbers - The input string containing delimiters and numbers.
   * @returns {Object} An object containing the delimiter and the number sequence.
   */
  _extractDelimiterAndNumbers(numbers) {
    let delimiter = /,|\n/;
    let numberSequence = numbers;

    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      const delimiterPart = numbers.substring(2, delimiterEndIndex);

      delimiter = this._createDelimiterRegex(delimiterPart);
      numberSequence = numbers.substring(delimiterEndIndex + 1);
    }

    return { delimiter, numberSequence };
  }

  /**
   * Creates a regex for the delimiter(s) provided.
   *
   * @private
   * @param {string} delimiterPart - The part of the string defining custom delimiters.
   * @returns {RegExp} A regular expression for the custom delimiters.
   */
  _createDelimiterRegex(delimiterPart) {
    if (delimiterPart.includes('[')) {
      const delimiters = delimiterPart.match(/\[([^\]]+)\]/g).map((d) => {
        return this._escapeSpecialChars(d.slice(1, -1));
      });
      return new RegExp(delimiters.join('|'));
    } else {
      return new RegExp(this._escapeSpecialChars(delimiterPart));
    }
  }

  /**
   * Escapes special characters in a delimiter string to create a valid regex pattern.
   *
   * @private
   * @param {string} delimiter - The delimiter string to escape.
   * @returns {string} The escaped delimiter string.
   */
  _escapeSpecialChars(delimiter) {
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Parses the number sequence into an array of numbers and identifies any negatives.
   *
   * @private
   * @param {string} numberSequence - The string containing the numbers.
   * @param {RegExp} delimiter - The regular expression for splitting the numbers.
   * @returns {Object} An object containing the parsed numbers and any negative numbers.
   */
  _parseNumbers(numberSequence, delimiter) {
    const numberArray = numberSequence.split(delimiter);
    const parsedNumbers = [];
    const negativeNumbers = [];

    for (const number of numberArray) {
      const parsedNumber = Number(number);
      if (!isNaN(parsedNumber)) {
        if (parsedNumber > 1000) continue;
        parsedNumbers.push(parsedNumber);
        if (parsedNumber < 0) {
          negativeNumbers.push(parsedNumber);
        }
      }
    }

    return { parsedNumbers, negativeNumbers };
  }
}

module.exports = StringCalculator;
