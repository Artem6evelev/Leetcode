//? You might know some pretty large perfect squares. But what about the NEXT one?
//? Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//? If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

//* Examples: (Input --> Output)
//* 121 --> 144
//* 625 --> 676
//* 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let num;
  let nextNum;
  // 1. if 144 wihch is a perfect square of 12, we are checking if it is a perfect square or not
  if (Math.sqrt(sq) % 1 === 0) {
    num = Math.sqrt(sq);
    nextNum + 1;
  } else {
    return -1;
  }
  return nextNum * nextNum;
}

console.log("findNextSquare()", findNextSquare(144));
