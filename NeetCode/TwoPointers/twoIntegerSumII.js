/**
 * Given an array of integers numbers that is sorted in non-decreasing order.
 *
 * Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
 *
 * There will always be exactly one valid solution.
 *
 * Your solution must use O(1) additional space.
 *
 ** Input: numbers = [1,2,3,4], target = 3
 ** Output: [1,2]
 *
 * @param {number[]} numbers
 * @param {number} target
 */
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + number[j] == target) {
        return [i + 1, j + 1];
      }
    }
  }
}

function twoSum(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    if (numbers[i] + numbers[j] == target) {
      return [i + 1, j + 1];
    } else if (number[i] + numbers[j] > target) {
      j--;
    } else {
      i++;
    }
  }
}
