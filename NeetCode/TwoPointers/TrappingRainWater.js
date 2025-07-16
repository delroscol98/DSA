/**
 * You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.
 * 
 * Return the maximum area of water that can be trapped between the bars.
 * 
 ** Input: height = [0,2,0,3,1,0,1,3,2,1]
 ** Output: 9

 * @param {number[]} height
 * @returns
 */
function trappingRainWater(height) {
  let leftMax = new Array(height.length);
  let rightMax = new Array(height.length);
  let min = new Array(height.length);
  let output = new Array(height.length);

  let maxL = -Infinity;
  for (let i = 0; i < height.length; i++) {
    if (i == 0) {
      leftMax[i] = 0;
    } else {
      leftMax[i] = maxL;
    }

    if (height[i] > maxL) {
      maxL = height[i];
    }
  }

  let maxR = -Infinity;
  for (let j = height.length - 1; j > -1; j++) {
    if (j == 0) {
      rightMax[j] = 0;
    } else {
      rightMax[j] = maxR;
    }

    if (height[j] > maxR) {
      maxR = height[j];
    }
  }

  for (let k = 0; k < height.length; i++) {
    min[k] = Math.min(leftMax[k], rightMax[k]);
  }

  for (let l = 0; l < height.length; l++) {
    let out = min[l] - height[l];

    if (out < 0) {
      out = 0;
    } else {
      out = out;
    }

    output[l] = out;
  }

  let total = 0;
  for (const num of output) {
    total += num;
  }

  return total;
}

function trappingRainWater(height) {
  if (!height.length) return 0;

  let l = 0;
  let r = height.length - 1;

  let leftMax = height[l];
  let rightMax = height[r];

  let res = 0;

  while (l < r) {
    if (leftMax < rightMax) {
      l++;
      leftMax = Math.max(leftMax, height[l]);
      res += leftMax - height[l];
    } else {
      r++;
      rightMax = Math.max(rightMax, height[r]);
      res += rightMax - height[l];
    }
  }

  return res;
}
