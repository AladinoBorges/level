/*
    A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

    Count the minimal number of jumps that the small frog must perform to reach its target.

    Write a function:

    function solution(X: number, Y: number, D: number): number;

    that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

    For example, given:

      X = 10
      Y = 85
      D = 30
    the function should return 3, because the frog will be positioned as follows:

    after the first jump, at position 10 + 30 = 40
    after the second jump, at position 10 + 30 + 30 = 70
    after the third jump, at position 10 + 30 + 30 + 30 = 100
    Write an efficient algorithm for the following assumptions:

    X, Y and D are integers within the range [1..1,000,000,000];
    X ≤ Y.
 */

function frogJump(X: number, Y: number, D: number): number {
  return Math.ceil((Y - X) / D);
}

console.log(frogJump(10, 85, 30)); // Output: 3
console.log(frogJump(1, 5, 2)); // Output: 2
console.log(frogJump(1, 1000000000, 1)); // Output: 999999999
console.log(frogJump(1, 1000000000, 1000000000)); // Output: 1
console.log(frogJump(1, 1000000000, 999999999)); // Output: 1
console.log(frogJump(1, 1000000000, 500000000)); // Output: 2
console.log(frogJump(1, 1000000000, 333333333)); // Output: 3
console.log(frogJump(1, 1000000000, 250000000)); // Output: 4
