/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of
each sock, determine how many pairs of socks with matching colors there are.

ar = (1,2,1,2,1,3, 2]

There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number
of pairs is 2.

*/


function sockMerchant(n, ar) {
    // Write your code here
    let socksObj = {}
    for(let x of ar) {
        if(!socksObj[x]) {
            socksObj[x] = 1
        }
        else {
            socksObj[x] ++
        }
    }
    let pairs = 0
    for(let num in socksObj) {
        pairs += Math.trunc(socksObj[num]/2)
    }
    return pairs
}

console.log(sockMerchant(6,[1,2,1,2,4,5,4,5,5,4,1])) // 4 pairs
