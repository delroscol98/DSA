/**
 * You are given an integer array nums sorted in non-decreasing order. Your task is to remove duplicates from nums in-place so that each element appears only once.
 *
 * After removing the duplicates, return the number of unique elements, denoted as k, such that the first k elements of nums contain the unique elements.
 *
 * Note:
 *
 ** The order of the unique elements should remain the same as in the original array.
 **It is not necessary to consider elements beyond the first k positions of the array.
 **To be accepted, the first k elements of nums must contain all the unique elements.
 *
 * Return k as the final result.
 *
 * Test Case 1
 ** Input: nums = [1,1,2,3,4]
 ** Output: [1,2,3,4]
 *
 * Test Case 2
 ** Input: nums = [2,10,10,30,30,30]
 ** Output: [2,10,30]
 * @param {number[]} nums
 * @returns {number}
 */
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) continue;
    let count = 0;
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] == nums[j]) {
        count++;
      } else {
        nums.splice(i, count);
      }
    }
  }
  return nums.length;
}

function removeDuplicates(nums) {
  const unique = Array.from(new Set(nums));
  for (let i = 0; i < nums.length; i++) {
    nums[i] = unique[i];
  }
  return unique.length;
}

function removeDuplicates(nums) {
  let l = 0;
  let r = 0;
  let n = nums.length;

  while (r < n) {
    nums[l] = nums[r];
    while (r < n && nums[l] == nums[r]) {
      r++;
    }
    l++;
  }
  return l;
}

function removeDuplicates(nums) {
  let l = 1;
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r];
      l++;
    }
  }
}
