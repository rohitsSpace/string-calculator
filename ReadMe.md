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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change or add.

## License

MIT
