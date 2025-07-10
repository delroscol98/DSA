// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.

// Input: (nums = [1, 2, 2, 3, 3, 3]), (k = 2);
// Output: [2, 3];

// Input: (nums = [7, 7]), (k = 1);
// Output: [7];

function topKFrequent(nums, k) {
  const obj = {};
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] == undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    res.push(Number(sorted[i][0]));
  }

  return res;
}

function topKFrequent(nums, k) {
  const obj = {};
  const freq = new Array(nums.length + 1);

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] == undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    if (freq[value] == undefined) {
      freq[value] = [key];
    } else {
      freq[value].push(key);
    }
  }

  const res = [];

  for (let i = freq.length - 1; i > 0 && res.length != k; i--) {
    if (freq[i] != undefined) {
      for (let j = 0; j < freq[i].length; j++) {
        res.push(freq[i][j]);
      }
    }
  }

  return res;
}
