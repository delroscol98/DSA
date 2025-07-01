// TOP-DOWN

let memo = [];

function fib(n) {
  if (memo[n] !== undefined) return memo[n];

  if (n === 0 || n === 1) return n;

  memo[n] = fib(n - 1) + fib(n - 2);

  return memo[n];
}

// BOTTOM-UP

function fib(n) {
  let fibArray = [];
  fibArray[0] = 0;
  fibArray[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[index - 1] + fibArray[index - 2];
  }

  return fibArray;
}
