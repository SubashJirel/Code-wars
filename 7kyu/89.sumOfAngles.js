/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/
function angle(n) {
  //code here
  if (n <= 2) {
    return 'Number of sides must be greater than 2.';
  }
  return (n - 2) * 180;
}
