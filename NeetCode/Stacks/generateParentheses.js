/**
 * You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.
 *
 * Test Case 1:
 ** Input: n = 1
 ** Output: ["()"]
 *
 * Test Case 2:
 ** Input: n = 3
 ** Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * @param {number} n
 * @returns {string[]}
 */
function generateParentheses(n) {
  // only add open parenthesis if open < n
  // only add closed parentheses if closed < open
  // valid IIF open == closed == n

  let stack = [];
  let res = [];

  function backtrack(openN, closeN) {
    if (openN == closeN && closeN == n) {
      res.push(stack.join(""));
    }

    if (openN < n) {
      stack.push("(");
      backtrack(openN + 1, closeN);
      stack.pop();
    }

    if (closeN < openN) {
      stack.push(")");
      backtrack(openN, closeN + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);
  return res;
}
