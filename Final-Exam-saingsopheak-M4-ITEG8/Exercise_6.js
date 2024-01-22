function Exercise6(items) {
  const box5 = 5;
  const box3 = 3;

  // Calculate the maximum number of box3 that can be used
  const maxBox3Count = Math.floor(items / box3);

  // Try different combinations of box3 and box5 to maximize the usage of box3
  for (let box3Count = maxBox3Count; box3Count >= 0; box3Count--) {
    const remainingItems = items - box3Count * box3;

    if (remainingItems % box5 === 0) {
      // If the remaining items can be evenly divided by box5, pack them into box5
      const box5Count = remainingItems / box5;
      return Array.from({ length: box3Count }, () => box3).concat(
        Array.from({ length: box5Count }, () => box5)
      );
    }
  }

  // If no valid combination is found, return an empty array
  return [];
}

// Example usage:
let result1 = Exercise6(11);
console.log(result1); // Output: [3, 3, 5]

let result2 = Exercise6(15);
console.log(result2); // Output: [3, 3, 3, 3, 3]

let result3 = Exercise6(17);
console.log(result3); // Output: [3, 3, 3, 3, 5]

let result4 = Exercise6(7);
console.log(result4); // Output: []
