function rowSumOddNumbers(n) { //n =3
	// TODO
    let firstTerm = (n-1)*(n) +1 // firstTerm = 7
    let nextTerm = firstTerm // nextTerm = 7
    for(let i =1; i<n;i++) {
         nextTerm = nextTerm+2 // nextTerm = 9
        firstTerm += nextTerm // (7+9)+11
    }
    return firstTerm
}
console.log(rowSumOddNumbers(42))

//kill me
function rowSumOddNumbers_other(n) {
    return n*n*n;
  }