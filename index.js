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
    return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
}

module.exports = StringCalculator;
