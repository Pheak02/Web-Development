function Exercise6(items) {
  const box5 = 5;
  const box3 = 3;

  const maxBox3Count = Math.floor(items / box3);

  for (let box3Count = maxBox3Count; box3Count >= 0; box3Count--) {
    const remainingItems = items - box3Count * box3;

    if (remainingItems % box5 === 0) {
      const box5Count = remainingItems / box5;
      return Array.from({ length: box3Count }, () => box3).concat(
        Array.from({ length: box5Count }, () => box5)
      );
    }
  }

  return [];
}

// sample input:
let result1 = Exercise6(11);
console.log(result1); // Output: [3, 3, 5]

let result2 = Exercise6(15);
console.log(result2); // Output: [3, 3, 3, 3, 3]

let result3 = Exercise6(17);
console.log(result3); // Output: [3, 3, 3, 3, 5]

let result4 = Exercise6(7);
console.log(result4); // Output: []

let result5 = Exercise6(10);
console.log(result4); // Output: []
