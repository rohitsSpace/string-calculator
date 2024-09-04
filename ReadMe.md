<h1 align="center">String Calculator</h1>
This little helper function provides help to perform addition of numbers.

## 🎁 Features

- Add two or more numbers from a string
- Support comma delimiter by default
- Supports any kind of custom delimiter
- Only positive numbers allowed

## 🧰 Technology

String Calculator is built using the following technologies:

- JavaScript (JS)
- Node.js
- PNPM
- Jest

## Getting Started

Clone repository

```
git clone https://github.com/rohitsSpace/string-calculator.git
```

go to

```
cd ./string-calculator
```

install dependencies

```
pnpm i

or
yarn

or
npm i

```

Run all the test cases

```
npm test
```

## Examples

You can use the StringCalculator class to perform addition of numbers from a string.

```javascript
// Delimiter: comma
const stringCalculator = require('./stringCalculator');
calculator = new StringCalculator();
console.log(calculator.add('1,2,3')); // Output: 6
```

```javascript
// Delimiter: \n (new line)
const stringCalculator = require('./stringCalculator');
calculator = new StringCalculator();
console.log(calculator.add('1\n2,3')); // Output: 6
```

```javascript
// Delimiter: ; (semi colon)
const stringCalculator = require('./stringCalculator');
calculator = new StringCalculator();
console.log(calculator.add('//;\n1;2')); // Output: 3
```

```javascript
// Delimiters: ** and %%
const stringCalculator = require('./stringCalculator');
calculator = new StringCalculator();
console.log(calculator.add('//[**][%%]\n1**2%%3')); // Output: 6
```

## Explanations of code execution

### Example 1: Simple Addition with Default Delimiters

```js
const calculator = new StringCalculator();
console.log(calculator.add('1,2,3')); // Output: 6
```

Step1:

The input string is `"1,2,3"`.
Since the string is not empty, the method proceeds.

Step 2:

The numbers string does not start with `//`, so it uses the default delimiters **(comma and newline)**.

Step 3:

The numberSequence remains `"1,2,3"`.

Step 4:

The numberSequence is split using the default delimiters (comma and newline), resulting in the array `["1", "2", "3"]`.

Step 5:

Each string in the array is converted to a number

```
"1" becomes 1
"2" becomes 2
"3" becomes 3
```

The numbers are all valid and none exceed `1000`, so they are added to the parsedNumbers array.
No negative numbers are present, so negativeNumbers remains empty.

Step 6: Sum Calculation

The numbers `[1, 2, 3]` are summed up to get 6, using `Array.reduce` method which starts with `0` and returns sum of values i.e `6`

Last Step: output is `6` now

### Example 2: Custom Delimiters with Multiple Characters

```js
const calculator = new StringCalculator();
console.log(calculator.add('//[***]\n1***2***7')); // Output: 10
```

Step 1:
Input string is `"//[***]\n1**_2_**7"`. Since the string is not empty, the method proceeds.

Step 2:

The input string starts with `//`, indicating a custom delimiter.

The substring `[***]` specifies the custom delimiter.

The `_createDelimiterRegex` inner private method processes this delimiter and the delimiter `[***]` is extracted and converted to a regular expression by escaping special characters.

The resulting regex for the delimiter is `\*\*\*`.

Step 3: now the numberSequence is `"1**_2_**7"`.

Step 4:

The numberSequence is split using the custom delimiter `\*\*\*`, resulting in the array `["1", "2", "7"]`.

Each string in the array is converted to a number

```
"1" becomes 1
"2" becomes 2
"7" becomes 7
```

The numbers are all valid and none exceed `1000`, so they are added to the parsedNumbers array.
No negative numbers are present, so negativeNumbers remains empty.

Step 5: Sum Calculation

The numbers `[1, 2, 7]` are summed up to get 10.

Output: result is `10`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or add.

## License

MIT
