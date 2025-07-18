/**
 * You are given an integer array nums and an integer val. Your task is to remove all occurrences of val from nums in-place.
 *
 * After removing all occurrences of val, return the number of remaining elements, say k, such that the first k elements of nums do not contain val.
 *
 * Note:
 *
 ** The order of the elements which are not equal to val does not matter.
 ** It is not necessary to consider elements beyond the first k positions of the array.
 ** To be accepted, the first k elements of nums must contain only elements not equal to val.
 *
 * Return k as the final result.
 * @param {*} nums
 * @param {*} val
 */
function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
