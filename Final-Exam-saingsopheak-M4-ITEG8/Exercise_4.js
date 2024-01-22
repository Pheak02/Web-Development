// rules: rectangle can fit inside the circle only if its root square of sum of sqare of (width & high) is smaller than
// returns true if the diagonal is smaller than or equal to twice the radius of the circle, indicating that the rectangle can fit inside the circle.
function rectangleInCircle(rectangleWidth, rectangleHeight, circleRadius) {
  // Calculate the diagonal of the rectangle
  const diagonal = Math.sqrt(rectangleWidth ** 2 + rectangleHeight ** 2);

  // Check if the diagonal is smaller than or equal to twice the radius of the circle
  return diagonal <= 2 * circleRadius;
}

// Example usage:
console.log(rectangleInCircle(8, 6, 5)); // Output: true
console.log(rectangleInCircle(5, 9, 5)); // Output: false
console.log(rectangleInCircle(4, 7, 4)); // Output: false
