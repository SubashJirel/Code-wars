/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption
 */
function longestConsec(strarr, k) {
    // your code
    if(k<=0 || strarr.length<k) {
      return ""
    }
    let combined =[]
    for(let i=0;i<strarr.length;i++) {
      combined.push(strarr.slice(i,i+k).join(''))
  
    }
    let lengthOfAll = combined.map(val =>val.length)
    let max = Math.max(...lengthOfAll)
    /*
    can find max lenght word this way
    let maxLengthWord = words.reduce(function(prevWord, currentWord) {
    return (prevWord.length > currentWord.length) ? prevWord : currentWord;
    });
    */
    return combined.find(val=>val.length==max)
    
  }
  
  //console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
  console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))
  longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)
  
  /*
  sliding window approach
  function longestConsec(strarr, k) {
      var n = strarr.length;
      
      if (n == 0 || k > n || k <= 0) {
        return "";
      }
      
      var longest = {val: 0, idx: 0};
      var sum = 0;
      
      for (let i = 0; i < k; i++) {
        sum += strarr[i].length;
      }
      
      longest.val = sum;
      
      for (let i = k; i < n; i++) {
        sum += strarr[i].length - strarr[i-k].length;
        
        if (sum > longest.val) {
          longest.val = sum;
          longest.idx = i-k+1;
        }
      }
      
      return strarr.slice(longest.idx, longest.idx + k)
          
  */