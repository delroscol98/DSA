// Input: nums = [1, 2, 4, 6];
// Output: [48, 24, 12, 8];

// Input: nums = [-1, 0, 1, 2, 3];
// Output: [0, -6, 0, 0, 0];

/**
 * Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
 *
 * Each product is guaranteed to fit in a 32-bit integer.
 *
 * Follow-up: Could you solve it in O(n) time without using the division operation?
 * @param {number[]} nums
 * @returns {number[]}
 */
function productExceptSelf(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let total = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        total *= nums[j];
      }
    }
    res.push(total);
  }
  return res;
}

function productExceptSelf(nums) {
  let product = 1;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else {
      product *= nums[i];
    }
  }

  if (zeroCount >= 2) {
    return new Array(nums.length).fill(0);
  }

  let res = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (zeroCount === 0) {
      res[i] = product / nums[i];
    } else {
      if (nums[i] == 0) {
        res[i] = 0;
      } else {
        res[i] = product;
      }
    }
  }

  return res;
}

function productExceptSelf(nums) {
  let pre = new Array(nums.length);
  let post = new Array(nums.length);
  let res = new Array(nums.length);

  for (let i = 0, j = nums.length - 1; i < nums.length && j > 0; i++, j--) {
    if (i === 0) {
      pre[i] = nums[i];
    } else {
      pre[i] = nums[i] * pre[i - 1];
    }

    if (j === nums.length - 1) {
      post[j] = nums[j];
    } else {
      post[j] = nums[j] * post[j + 1];
    }
  }

  for (let i = 0; i < res.length; i++) {
    if (i === 0) {
      res[i] = post[i + 1];
    } else if (i === res.length) {
      res[i] = pre[i - 1];
    } else {
      res[i] = pre[i - 1] * post[i + 1];
    }
  }

  return res;
}

function productExceptSelf(nums) {
  const res = new Array(nums.length);
  let pre = 1;
  let post = 1;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      res[i] = pre;
    } else {
      pre *= nums[i - 1];
      res[i] = pre;
    }
  }

  for (let j = nums.length - 1; j > -1; i++) {
    if (j === nums.length - 1) {
      res[j] *= post;
    } else {
      post *= nums[j + 1];
      res[j] *= post;
    }
  }

  return res;
}
