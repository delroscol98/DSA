/**
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
 *
 * The output should not contain any duplicate triplets. You may return the output and the triplets in any order.
 * @param {number[]} nums
 * @returns {number[][]}
 */
function threeSum(nums) {
  let res = new Set();
  nums = nums.sort((a, b) => a - b);

  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        if (nums[a] + nums[b] + nums[c] == 0) {
          res.add(JSON.stringify([nums[a], nums[b], nums[c]]));
        }
      }
    }
  }

  return Array.from(res).map((item) => JSON.parse(item));
}

function threeSum(nums) {
  let res = new Set();

  nums = nums.sort();

  for (let a = 0; a < nums.length; a++) {
    if (nums[a] == nums[a - 1]) continue;

    let b = a + 1;
    let c = nums.length - 1;

    while (b < c) {
      let sum = nums[a] + nums[b] + nums[c];

      if (sum > 0) {
        c--;
      } else if (sum < 0) {
        b++;
      } else {
        res.add(JSON.stringify([nums[a], nums[b], nums[c]]));
        b++;
        c--;

        while (b < c && nums[b] == nums[b - 1]) {
          b++;
        }

        while (b < c && nums[c] == nums[c + 1]) {
          c--;
        }
      }
    }
  }

  return Array.from(res).map((item) => JSON.parse(item));
}
