// Input: nums = [1, 2, 3, 3]
// Output: true

// Input: nums = [1, 2, 3, 4]
// Output: false

/**
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 * @param {number[]} nums
 * @returns {boolean}
 */
function hasDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) return true;
    }
  }
  return false;
}

function hasDuplicate(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] == undefined) {
      obj[nums[i]] = true;
    } else {
      return obj[nums[i]];
    }
  }
  return false;
}

function hasDuplicate(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], true);
    } else {
      return map.get(nums[i]);
    }
  }

  return false;
}

function hasDuplicate(nums) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  return nums.length !== set.size;
}
