const StringCalculator = require('../index');

describe('StringCalculator Function Test Suite', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
  });
});
