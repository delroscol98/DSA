/**
 * You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.
 *
 * Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.
 * @param {number[]} temperatures
 * @returns {number[]}
 */
function dailyTemperatures(temperatures) {
  let res = new Array(temperatures.length);

  for (let i = 0; i < temperatures.length; i++) {
    let count = 0;
    for (let j = i; temperatures[i] >= temperatures[j]; j++) {
      count++;
      if (j == temperatures.length) {
        count = 0;
      }
    }
    res[i] = count;
  }

  return res;
}

function dailyTemperatures(temperatures) {
  let res = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    let t = temperatures[i];

    while (stack.length > 0 && t > stack[stack.length - 1][0]) {
      const [stackT, stackI] = stack.pop();
      res[stackI] = i - stackI;
    }

    stack.push([t, i]);
  }
  return res;
}
