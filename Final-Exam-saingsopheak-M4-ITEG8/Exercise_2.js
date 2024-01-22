function Exercise2(str) {
  if (typeof str !== "string") return "Input is not a string";

  // Split string
  const numbers = str.split(/[, ]+/).map((item) => parseFloat(item));

  // Filter out invalid numbers
  const validNumbers = numbers.filter((num) => !isNaN(num));

  return validNumbers.reduce((acc, current) => acc + current, 0);
}

const numbersString1 = "1, 2 3, 4 5";
const numbersString2 = "100, 20 300, 300 50";

const result1 = Exercise2(numbersString1);
const result2 = Exercise2(numbersString2);

console.log(result1); // Output: 15
console.log(result2); // Output: 15
