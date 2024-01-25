/*
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
*/
function nearestSq(n) {
  // your code
  // Calculate the square root of n
  const sqrtN = Math.sqrt(n);

  // Calculate the lower and upper bounds of the nearest square
  const lowerBound = Math.floor(sqrtN);
  const upperBound = Math.ceil(sqrtN);

  // Calculate the squares of the bounds
  const lowerSquare = Math.pow(lowerBound, 2);
  const upperSquare = Math.pow(upperBound, 2);

  // Determine the nearest square by comparing distances
  const distanceToLower = n - lowerSquare;
  const distanceToUpper = upperSquare - n;

  // Return the nearest square
  return distanceToLower < distanceToUpper ? lowerSquare : upperSquare;
}
