// Input: nums = [2, 20, 4, 10, 3, 4, 5];
// Output: 4;

// Input: nums = [0, 3, 2, 5, 4, 6, 1, 1];
// Output: 7;

/**
 * Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.
 * A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.
 * You must write an algorithm that runs in O(n) time.
 * @param {number[]} nums
 * @returns {number}
 */
function longestConsecutive(nums) {
  let orderedNums = nums.sort((a, b) => a - b);
  orderedNums = orderedNums.filter((num, i, array) => array.indexOf(num) === i);

  let count = 1;
  let max = 1;
  for (let i = 0; i < orderedNums.length; i++) {
    if (orderedNums[i + 1] - orderedNums[i] === 1) {
      count++;
      if (count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
  }

  return max;
}

longestConsecutive([2, 20, 4, 10, 3, 4, 5]);
