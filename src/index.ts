export class StringCalculator {
  calculate(input: string): number {
    if (!input) {
      return 0;
    }

    const numberArray = input.split(/[\n,]/).map(Number);

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
