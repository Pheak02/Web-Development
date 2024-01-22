function Exercise5(str) {
  // Input must be a string of length 3
  if (typeof str !== "string" || str.length !== 3) {
    return false;
  }

  const vowels = "aeiouAEIOU";
  const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

  const firstChar = str[0];
  const middleChar = str[1];
  const lastChar = str[2];

  // Check if the first and last characters are consonants
  const isFirstAndLastConsonant =
    consonants.includes(firstChar) && consonants.includes(lastChar);

  // Check if the middle character is a vowel
  const isMiddleVowel = vowels.includes(middleChar);

  // Return true if all conditions are satisfied, otherwise false
  return isFirstAndLastConsonant && isMiddleVowel;
}

// sample input
console.log(Exercise5("bat")); // Output: true
console.log(Exercise5("dog")); // Output: false
console.log(Exercise5("ace")); // Output: false
console.log(Exercise5("ear")); // Output: false
