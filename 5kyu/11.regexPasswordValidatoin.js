/*
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
*/
// assign your RegExp to REGEXP:
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

/*
^ asserts the start of the string.
(?=.*[a-z]) checks for at least one lowercase letter.
(?=.*[A-Z]) checks for at least one uppercase letter.
(?=.*\d) checks for at least one digit.
[A-Za-z\d]{6,} ensures that the password is at least 6 characters long and contains only alphanumeric characters.
$ asserts the end of the string.
*/
