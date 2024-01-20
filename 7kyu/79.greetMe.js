/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/
var greet = function (name) {
  // Capitalize the first letter and convert the rest to lowercase
  const capitalized =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  // Create the greeting message
  const greeting = 'Hello ' + capitalized + '!';

  // Return the result
  return greeting;
};
