/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/
 
function countSmileys(arr) {
    let smilyRegex = /[:;][-~]?[D)]/g
    let strOfSmiley = arr.join(' ')
    let matches = strOfSmiley.match(smilyRegex)
    if(matches === null) return 0;
    return matches.length
  }
  //explanation
  /*
  The square brackets [] define a character set, so the expression will match any of the characters within the brackets.
The : and ; are placed inside the brackets, so the expression will match either of those characters.
The - and ~ are also placed inside the brackets, so the expression will match either of those characters as well.
The ? following the - and ~ characters makes the preceding character optional, so the expression will match any emoticon that has either -, ~ or none of them.
The last )D inside the brackets define the last two characters of the emoticon, so the expression will match either of them and thus complete the emoticon.
The g flag at the end makes the search global, so it will find all matches in the input string, rather than stopping after the first match.
  */

  //other
  function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
  }