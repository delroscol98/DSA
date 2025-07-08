// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first.

// Input: (nums = [3, 4, 5, 6]), (target = 7);
// Output: [0, 1];

// Input: (nums = [4, 5, 6]), (target = 10);
// Output: [0, 2];

// Input: (nums = [5, 5]), (target = 10);
// Output: [0, 1];

/**
 * @param {Array<number>} nums
 * @param {number} target
 * @returns {Array<number>}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) return [i, j];
    }
  }
  return [];
}

function twoSum(nums, target) {
  let numsArr = [];

  for (let i = 0; i < nums.length; i++) {
    numsArr.push([nums[i], i]);
  }

  numsArr = numsArr.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let j = numsArr.length - 1;

  while (i < j) {
    const currSum = numsArr[i][0] + numsArr[j][0];

    if (currSum === target) {
      return [
        Math.min(numsArr[i][1], numsArr[j][1]),
        Math.max(numsArr[i][1], numsArr[j][1]),
      ];
    } else if (currSum < target) {
      i++;
    } else {
      j--;
    }
  }

  return [];
}

function twoSum(nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];

    if (obj[comp] == undefined) {
      obj[nums[i]] = i;
    } else {
      return [obj[comp], i];
    }
  }

  return [];
}

function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];

    if (!map.has(comp)) {
      map.set(nums[i], i);
    } else {
      return [map.get(comp), i];
    }
  }

  return [];
}
