class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    let numberSequence = numbers;

    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
      numberSequence = numbers.substring(delimiterEndIndex + 1);
    }

    const numberArray = numberSequence.split(delimiter);
    const parsedNumbers = [];
    const negativeNumbers = [];

    for (const number of numberArray) {
      const parsedNumber = parseInt(number);
      if (!isNaN(parsedNumber)) {
        parsedNumbers.push(parsedNumber);
        if (parsedNumber < 0) {
          negativeNumbers.push(parsedNumber);
        }
      }
    }

    if (negativeNumbers.length > 0) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(', ')}`
      );
    }

    return parsedNumbers.reduce((sum, current) => sum + current, 0);
  }
}

module.exports = StringCalculator;
