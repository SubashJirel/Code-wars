function highestRank(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }

  let maxRepeat = 0;
  let maxNum = -Infinity; // Use -Infinity to handle all negative number arrays

  for (const x in obj) {
    const numX = Number(x);
    if (obj[x] > maxRepeat || (obj[x] === maxRepeat && numX > maxNum)) {
      maxRepeat = obj[x];
      maxNum = numX;
    }
  }

  //   console.log(`maxNum:${maxNum} maxRepeat: ${maxRepeat}`);
  return maxNum;
}

// Test cases
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])); // 3

//another way

function highestRank2(arr) {
  const frequencyMap = new Map();

  // Count the frequency of each number in the array
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let mostFrequent = arr[0];
  let maxFrequency = frequencyMap.get(mostFrequent);

  // Determine the most frequent number and handle ties by choosing the larger number
  for (const [num, frequency] of frequencyMap) {
    if (
      frequency > maxFrequency ||
      (frequency === maxFrequency && num > mostFrequent)
    ) {
      mostFrequent = num;
      maxFrequency = frequency;
    }
  }

  return mostFrequent;
}
