function convertToString() {
  const numberInput = document.getElementById("number").value;

  // Convert number to string
  const numberAsString = numberInput.toString();

  let outputString = "";
  for (let i = 0; i < numberAsString.length; i++) {
    const digit = numberAsString[i];
    switch (digit) {
      case "0":
        outputString += "zero";
        break;
      case "1":
        outputString += "one";
        break;
      case "2":
        outputString += "two";
        break;
      case "3":
        outputString += "three";
        break;
      case "4":
        outputString += "four";
        break;
      case "5":
        outputString += "five";
        break;
      case "6":
        outputString += "six";
        break;
      case "7":
        outputString += "seven";
        break;
      case "8":
        outputString += "eight";
        break;
      case "9":
        outputString += "nine";
        break;
    }
  }
  document.getElementById("output").innerText = outputString;
}
//task2
function checkPalindrome() {
  const numberInput = document.getElementById("number1").value;

  // Convert number to string
  const numberAsString = numberInput.toString();

  // Reverse string
  const reversedString = numberAsString.split("").reverse().join("");

  let isPalindrome = false;
  if (numberAsString === reversedString) {
    isPalindrome = true;
  }

  const outputElement = document.getElementById("output2");
  if (isPalindrome) {
    outputElement.innerText = "The number is a palindrome!";
  } else {
    outputElement.innerText = "The number is not a palindrome.";
  }
}

//task3
function sortArray() {
  const inputArray = document.getElementById("input-array").value;

  if (inputArray.trim() === "") {
    document.getElementById("sorted-result").textContent =
      "Please enter a valid array.";
    return;
  }

  const array = inputArray.split(",").map((num) => Number(num.trim()));
  const sortedArray = bubbleSort(array);
  document.getElementById("sorted-result").textContent = sortedArray.join(", ");
}

function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

//task4
// Function to sum all values passed to it
function calculateSum() {
  const input = document.getElementById("num-input");
  const numbers = input.value.split(",");

  // Convert each number string to a numeric value and calculate the sum
  const sumTotal = numbers.reduce((total, num) => {
    const parsedNum = parseInt(num.trim(), 10);

    if (!isNaN(parsedNum)) {
      return total + parsedNum;
    } else {
      return total;
    }
  }, 0);

  const sumResult = document.getElementById("sum-result");
  sumResult.textContent = `Sum: ${sumTotal}`;
  input.value = "";
}
