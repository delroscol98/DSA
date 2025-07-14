// Input: s = "[]";
// Output: true;

// Input: s = "([{}])";
// Output: true;

// Input: s = "[(])";
// Output: false;

/**
 * You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
 *
 * The input string s is valid if and only if:
 *
 ** Every open bracket is closed by the same type of close bracket.
 ** Open brackets are closed in the correct order.
 ** Every close bracket has a corresponding open bracket of the same type.
 *
 * Return true if s is a valid string, and false otherwise.
 * @param {string} s
 */
function validParentheses(s) {
  const stack = [];
  const obj = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const c of s) {
    if (obj[c] == undefined) {
      stack.push(c);
    } else {
      if (stack > 0 && stack[stack.length - 1] == obj[c]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length == 0;
}

function validParentheses(s) {
  while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
  }

  return s.length == 0;
}
