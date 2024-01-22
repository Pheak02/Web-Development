function exercise1(arr) {
  const resultArray = arr.filter(
    (item) => typeof item === "number" && item >= 0
  );
  return resultArray;
}
notFilterArray1 = [1, 2, "s", "p", 10];
notFilterArray2 = [223, 100, "w", "z", 9];

const filteredArray1 = exercise1(notFilterArray1);
const filteredArray2 = exercise1(notFilterArray2);
console.log(filteredArray1);
console.log(filteredArray2);
