/**
 * You are given an integer array nums sorted in non-decreasing order. Your task is to remove duplicates from nums in-place so that each element appears only once.
 *
 * After removing the duplicates, return the number of unique elements, denoted as k, such that the first k elements of nums contain the unique elements.
 *
 * Note:
 *
 ** The order of the unique elements should remain the same as in the original array.
 ** It is not necessary to consider elements beyond the first k positions of the array.
 ** To be accepted, the first k elements of nums must contain all the unique elements.
 *
 * Return k as the final result.
 * */
export function removeDuplicates(nums) {
  let l = 1;
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r];
      l++;
    }
  }
  return l;
}
