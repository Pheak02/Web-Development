function convertToString() {
    const numberInput = document.getElementById("number").value;
  
    // Convert the number to a string
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