let fibArray = [];

// iterative fibonacci sequence
function fibs(n) {
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      fibArray.push(0);
    } else if (i === 1 || i === 2) {
      fibArray.push(1);
    } else {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
  }
  return fibArray;
}
