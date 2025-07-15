/**
 * You are given an integer array heights where heights[i] represents the height of the ith bar.
 *
 * You may choose any two bars to form a container. Return the maximum amount of water a container can store.
 *
 ** Input: height = [1,7,2,5,4,7,3,6]
 ** Output: 36
 ** Input: height = [2,2,2]
 ** Output: 4
 * @param {number[]} heights
 * @returns {number}
 */
function containerWithMostWater(heights) {
  let max = -Infinity;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      let a = j - i;
      let b = Math.min(heights[i], heights[j]);

      if (a * b > max) {
        max = a * b;
      }
    }
  }

  return max;
}

function containerWithMostWater(heights) {
  let max = -Infinity;

  let i = 0;
  let j = heights.length - 1;

  while (i < j) {
    let base = j - 1;
    let height = Math.min(heights[i], heights[j]);
    let area = base * height;

    if (area > max) {
      max = area;
    }

    if (heights[i] <= heights[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
}
