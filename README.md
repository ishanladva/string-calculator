# String Calculator Kata

This is a simple implementation of the **String Calculator Kata** using **Node.js**, **TypeScript**, and following the **Test-Driven Development (TDD)** approach. The goal of this Kata is to develop a string calculator that can handle various arithmetic operations from a string input.

## Features

- The calculator can handle an empty string input (returns `0`).
- The calculator can handle simple string inputs containing numbers separated by commas (e.g., `"1,2,3"`).
- The calculator will add the numbers together and return the sum.
- The project is developed using **TypeScript** and tested with **Mocha** and **Chai** for unit testing.

## Requirements

- **Node.js** version 14 or higher
- **TypeScript** version 4.x or higher
- **Mocha** (for testing)
- **Chai** (for assertions)
- **ts-node** (for running TypeScript files directly)

## Setup Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/string-calculator-kata.git
cd string-calculator-kata
```

### 2. Install Dependencies

Run the following command to install the required dependencies:

```bash
npm install
```

### 3. TypeScript Configuration

The project is configured to use TypeScript. Make sure the tsconfig.json file is set up correctly, which is provided in this project.

### 4. Running Tests

You can run tests using Mocha with ts-node to handle TypeScript files.

```bash
npm test
```

### Project Structure

```bash
string-calculator/
├── src/
│   └── index.ts               # String calculator implementation
├── test/
│   └── index.test.ts          # Test file for the string calculator
├── tsconfig.json              # TypeScript configuration file
├── package.json               # Project dependencies and scripts
```

### Test-Driven Development (TDD)

This project follows the Test-Driven Development approach. Here's the process:

1. Write a Test: Start by writing a failing test case that specifies the desired behavior of the code.
2. Run the Test: Run the test suite to see the test fail.
3. Write the Code: Implement the minimal code necessary to pass the test.
4. Refactor the Code: Clean up the code while ensuring all tests continue to pass.
5. Repeat: Continue to add tests and implement the functionality step by step.

### Notes

- The Kata is implemented with TDD in mind, meaning each feature is tested and developed incrementally.
- Feel free to extend the functionality of the calculator by adding more complex operations (like subtraction, multiplication, or handling negative numbers) and writing tests for them.
