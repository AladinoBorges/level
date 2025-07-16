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
  let result = 1;

  if (A.length <= result) {
    const value = A[0] || 0;

    return value > result ? value - result : value + result;
  }

  const sortedArray = A.sort((a, b) => a - b);

  for (let index = 0; index < sortedArray.length; index++) {
    const nextValue = sortedArray[index + 1];

    const nextValidIsInvalid = nextValue - sortedArray[index] == 2;

    if (nextValidIsInvalid) {
      result = nextValue - 1;

      break;
    }
  }

  return result;
}

console.log(permMissingElem([])); // Output: 1
console.log(permMissingElem([0])); // Output: 1
console.log(permMissingElem([1])); // Output: 2
console.log(permMissingElem([2])); // Output: 1
console.log(permMissingElem([3])); // Output: 2
console.log(permMissingElem([1, 3])); // Output: 2
console.log(permMissingElem([2, 3, 1, 5])); // Output: 4
console.log(permMissingElem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12])); // Output: 11
console.log(permMissingElem([7, 8, 9, 5, 10, 12])); // Output: 6
console.log(permMissingElem([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // Output: 1
