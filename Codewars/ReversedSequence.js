/*
Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reverse();
};

console.log(reverseSeq(5));

/*
This code creates a function called reverseSeq which takes in a number (n) as an argument. 
It then creates an empty array called arr. 
A for loop is used to iterate through the numbers from 1 to n and push each number into the arr array. 
Finally, the arr array is reversed and returned.
*/
