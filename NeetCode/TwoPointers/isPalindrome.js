// Input: s = "Was it a car or a cat I saw?";
// Output: true;

// Input: s = "tab a cat";
// Output: false;

/**
 * Given a string s, return true if it is a palindrome, otherwise return false.
 *
 * A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
 *
 * Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).
 * @param {string} s
 */
function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    while (i < j && !isAlphaNum(s[i])) {
      i++;
    }

    while (i < j && !isAlphaNum(s[j])) {
      j--;
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}

function isPalindrome(s) {
  let newS = [];
  let reversedS = [];

  for (const c of s) {
    if (isAlphaNum(c)) {
      newS.push(c.toLowerCase());
    }
  }

  for (let i = newS.length - 1; i >= 0; i--) {
    reversedS.push(newS[i]);
  }

  for (let j = 0; j < newS.length; j++) {
    if (newS[j] != reversedS[j]) return false;
  }

  return true;
}

function isAlphaNum(c) {
  return (
    (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9")
  );
}
