/**
 * You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.
 *
 * Return the area of the largest rectangle that can be formed among the bars.
 *
 * Example 1:
 ** Input: heights = [7,1,7,2,2,4]
 ** Output: 8
 *
 * Example 2:
 ** Input: heights = [1,3,7]
 ** Output: 7
 * @param {number[]} heights
 * @returns
 */
function largestRectangleHistogram(heights) {
  let maxArea = -Infinity;
  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      const [index, height] = stack.pop();
      const width = index - i;
      const area = width * height;

      maxArea = Math.max(maxArea, area);
      start = index;
    }

    stack.push([start, heights[i]]);
  }

  for (const [index, height] of stack) {
    const width = heights.length - index;
    const area = width * height;

    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
