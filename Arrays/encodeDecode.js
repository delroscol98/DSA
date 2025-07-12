// Input: ["neet", "code", "love", "you"];
// Output: ["neet", "code", "love", "you"];

// Input: ["we", "say", ":", "yes"];
// Output: ["we", "say", ":", "yes"];

/**
 * Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
 *
 * Please implement encode and decode
 * @param {string[]} strs
 * @returns {string}
 */
function encode(strs) {
  let res = "";
  for (let i = 0; i < strs.length; i++) {
    res += `${strs[i].length}#${strs[i]}`;
  }
  return res;
}

/**
 * Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
 *
 * Please implement encode and decode
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  let res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }
    let length = Number(str.substring(i, j));
    let word = str.substring(j + 1, j + 1 + length);
    res.push(word);

    i = j + 1 + length;
  }

  return res;
}

function encode(strs) {
  if (strs.length === 0) return "";
  let sizes = [];
  let res = "";
  for (let s of strs) {
    sizes.push(s.length);
  }
  for (let sz of sizes) {
    res += sz + ",";
  }
  res += "#";
  for (let s of strs) {
    res += s;
  }
  return res;
}

function decode(str) {
  if (str.length === 0) return [];
  let sizes = [];
  let res = [];
  let i = 0;

  while (str[i] !== "#") {
    let curr = "";
    while (str[i] !== ",") {
      curr += str[i];
      i++;
    }
    sizes.push(parseInt(curr));
    i++;
  }
  i++;
  for (let sz of sizes) {
    const word = str.substring(i, i + sz);
    res.push(word);
    i += sz;
  }
  return res;
}
