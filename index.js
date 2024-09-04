class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    const numberArray = numbers.split(/,|\n/);
    return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
}

module.exports = StringCalculator;
