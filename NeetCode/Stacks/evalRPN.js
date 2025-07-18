/**
 * You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
 *
 * Return the integer that represents the evaluation of the expression.
 *
 ** The operands may be integers or the results of other operations.
 ** The operators include '+', '-', '*', and '/'.
 ** Assume that division between integers always truncates toward zero.
 *
 * @param {string[]} tokens
 * @returns {number}
 */
function evalRPN(tokens) {
  while (tokens.length > 1) {
    for (let i = 0; i < tokens.length; i++) {
      if ("+-*/".includes(tokens[i])) {
        const a = parseInt(tokens[i - 2]);
        const b = parseInt(tokens[i - 1]);

        let res;
        if (tokens[i] == "+") {
          res = a + b;
        } else if (tokens[i] == "-") {
          res = a - b;
        } else if (tokens[i] == "*") {
          res = a * b;
        } else if (tokens[i] == "/") {
          res = Math.trunc(a / b);
        }

        tokens.splice(i - 2, 3, res.toString());
        break;
      }
    }
  }

  return parseInt(tokens[0]);
}

function evalRPN(tokens) {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      stack.push(Number(tokens[i]));
    } else {
      let b = stack.pop();
      let a = stack.pop();

      if (tokens[i] == "+") {
        stack.push(a + b);
      } else if (tokens[i] == "-") {
        stack.push(a - b);
      } else if (tokens[i] == "*") {
        stack.push(a * b);
      } else if (tokens[i] == "/") {
        stack.push(Math.trunc(a / b));
      }
    }
  }

  return stack[0];
}

function evalRPN(tokens) {
  return dfs(tokens);
}

/**
 * Recursive function for evalPRN
 * @param {string[]} tokens
 * @returns {number}
 */
function dfs(tokens) {
  const token = tokens.pop();
  if (!"+-*/".includes(token)) {
    return parseInt(token);
  }

  const right = dfs(tokens);
  const left = dfs(tokens);

  if (token == "+") {
    return left + right;
  } else if (token == "-") {
    return left - right;
  } else if (token == "*") {
    return left * right;
  } else if (token == "/") {
    return Math.trunc(left / right);
  }
}
