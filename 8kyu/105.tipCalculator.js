/*
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
*/
function calculateTip(amount, rating) {
  // Convert the rating to lowercase for case-insensitive comparison
  const lowerCaseRating = rating.toLowerCase();

  // Calculate tip based on the rating
  switch (lowerCaseRating) {
    case 'terrible':
      return Math.ceil(amount * 0);
    case 'poor':
      return Math.ceil(amount * 0.05);
    case 'good':
      return Math.ceil(amount * 0.1);
    case 'great':
      return Math.ceil(amount * 0.15);
    case 'excellent':
      return Math.ceil(amount * 0.2);
    default:
      // Return an error message for unrecognized ratings
      return 'Rating not recognised';
  }
}
