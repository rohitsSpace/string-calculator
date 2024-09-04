const StringCalculator = require('../index');

describe('StringCalculator Function Test Suite', () => {
  it('should return 0 for an empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
  });
  it('should return the number itself for a single number', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1')).toBe(1);
  });
  it('should return the sum of two comma-separated numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,5')).toBe(6);
  });
});
