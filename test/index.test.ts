import { expect } from "chai";
import { StringCalculator } from "../src/index";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("should return 0 for an empty string", () => {
    expect(calculator.calculate("")).to.equal(0);
  });

  it("should return the number for a single number input", () => {
    expect(calculator.calculate("1")).to.equal(1);
  });

  it("should return the sum of two numbers", () => {
    expect(calculator.calculate("1,2")).to.equal(3);
  });

  it("should handle new lines as delimiters", () => {
    expect(calculator.calculate("1\n2,3")).to.equal(6);
  });

  it("should support custom delimiters", () => {
    expect(calculator.calculate("//;\n1;2;3")).to.equal(6);
  });

  it("should throw an error when a negative number is provided", () => {
    expect(() => calculator.calculate("1,-2,3")).to.throw(
      "Negative numbers are not allowed: -2"
    );
  });

  it("should throw an error listing all negative numbers when multiple negatives are provided", () => {
    expect(() => calculator.calculate("1,-2,-3,4")).to.throw(
      "Negative numbers are not allowed: -2, -3"
    );
  });

  it("should handle multiple custom delimiters", () => {
    expect(calculator.calculate("//[*][%]\n1*2%3")).to.equal(6);
  });

  it("should handle multiple complex custom delimiters", () => {
    expect(calculator.calculate("//[***][%%%]\n1***2%%%3")).to.equal(6);
  });

  it("Numbers bigger than 1000 should be ignored", () => {
    expect(calculator.calculate("//;\n1;1001;3")).to.equal(4);
  });
});
