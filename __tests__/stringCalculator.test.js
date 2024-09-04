const StringCalculator = require('../index');

describe('StringCalculator Function Test Suite', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it('should return 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  it('should return the value for a single number', () => {
    expect(calculator.add('1')).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(calculator.add('1,2')).toBe(3);
  });

  it('should return the sum of multiple comma-separated numbers', () => {
    expect(calculator.add('1,2,3,4,5')).toBe(15);
  });

  it('should handle newlines as delimiters', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  it('should handle custom (;) delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  it('should handle custom (x) delimiters', () => {
    expect(calculator.add('//x\n1x2')).toBe(3);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => calculator.add('1,-2,-3,5')).toThrow(
      'Negative numbers not allowed: -2, -3'
    );
  });
  
  it('should ignore numbers greater than 1000', () => {
    expect(calculator.add('5,1001')).toBe(5);
  });

  it('should allow delimiters of any length', () => {
    expect(calculator.add('//[***]\n1***2***3')).toBe(6);
  });

  it('should allow multiple delimiters with length longer than one char', () => {
    expect(calculator.add('//[*][%]\n1*2%3')).toBe(6);
    expect(calculator.add('//[**][%%]\n1**2%%3')).toBe(6);
  });
});
