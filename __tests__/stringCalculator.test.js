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
  it('should return the sum of multiple comma-separated numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1,2,3,4,5')).toBe(15);
  });
  it('should handle new lines between numbers', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('1\n2,3')).toBe(6);
  });
  it('should support different delimiters', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
  });
  it('should throw an exception for negative numbers', () => {
    const calculator = new StringCalculator();
    expect(() => calculator.add('1,-2,3,-4')).toThrow(
      'Negative numbers not allowed: -2, -4'
    );
  });
});
