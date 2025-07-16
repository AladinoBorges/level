/*
    An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

    Your goal is to find that missing element.

    Write a function:

    function solution(A: number[]): number;

    that, given an array A, returns the value of the missing element.

    For example, given array A such that:

      A[0] = 2
      A[1] = 3
      A[2] = 1
      A[3] = 5
    the function should return 4, as it is the missing element.

    Write an efficient algorithm for the following assumptions:

    N is an integer within the range [0..100,000];
    the elements of A are all distinct;
    each element of array A is an integer within the range [1..(N + 1)].
*/

function permMissingElem(A: number[]): number {
  const sortedArray = A.sort((a, b) => a - b);

  for (let index = 0; index < sortedArray.length; index++) {
    const nextValidValue = sortedArray[index] + 1;

    if (nextValidValue !== sortedArray[index + 1]) {
      return nextValidValue;
    }
  }
}

console.log(permMissingElem([2, 3, 1, 5])); // Output: 4
console.log(permMissingElem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12])); // Output: 11
