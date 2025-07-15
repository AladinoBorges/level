/*
 * A binary gap within a positive integer N is any maximal sequence of
 * consecutive zeros that is surrounded by ones at both ends in the binary
 * representation of N.
 *
 * For example, number 9 has binary representation 1001 and contains a binary
 * gap of length 2. The number 529 has binary representation 1000010001 and
 * contains two binary gaps: one of length 4 and one of length 3.
 *
 * The number 20 has binary representation 10100 and contains one binary gap of
 * length 1. The number 15 has binary representation 1111 and has no binary
 * gaps.
 *
 * The number 32 has binary representation 100000 and has no binary gaps.
 *
 * Write a function:
 *
 * function solution(N);
 *
 * that, given a positive integer N, returns the length of its longest binary
 * gap. The function should return 0 if N doesn't contain a binary gap.
 *
 * For example, given N = 1041 the function should return 5, because N has
 * binary representation 10000010001 and so its longest binary gap is of
 * length 5. Given N = 32 the function should return 0, because N has binary
 * representation '100000' and thus no binary gaps.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [1..2,147,483,647].
 */

function convertToBinary(value: number): string {
  /* number.toString(2) has problems when representing negative numbers, to fix that we should use the 'unsigned right shift bitwise operator (>>>)' to coerce the number into an unsigned integer. */

  return (value >>> 0).toString(2);
}

function binaryGap(N: number = null): number {
  const binaryValue = convertToBinary(N);

  if (binaryValue.length <= 2) {
    return 0;
  }

  const occurrences: number[] = [];
  let index = null;
  let currentCounter = 0;

  for (const value of binaryValue) {
    if (index === null && value === '1') {
      index = 0;

      continue;
    }

    if (value === '1') {
      if (currentCounter) {
        occurrences.push(currentCounter);
      }

      index += 1;
      currentCounter = 0;

      continue;
    }

    if (value === '0') {
      currentCounter += 1;
    }
  }

  const occurrencesSize = occurrences.length;

  if (!index || !occurrencesSize) {
    return 0;
  }

  return occurrences.sort().pop();
}

console.log(binaryGap(9));
console.log(binaryGap(529));
console.log(binaryGap(20));
console.log(binaryGap(15));
console.log(binaryGap(32));

console.log(binaryGap(6));
console.log(binaryGap(51712));
console.log(binaryGap(561892));
console.log(binaryGap(6291457));
console.log(binaryGap(805306373));
console.log(binaryGap(74901729));
console.log(binaryGap(1610612737));
