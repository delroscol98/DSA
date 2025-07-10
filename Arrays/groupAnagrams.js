// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Input: strs = ["act", "pots", "tops", "cat", "stop", "hat"];
// Output: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]];

// Input: strs = ["x"];
// Output: [["x"]];

// Input: strs = [""];
// Output: [[""]];

/**
 * @param {string[]} strs
 */
function groupAnagrams(strs) {
  let obj = {};

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort();

    if (obj[sorted] == undefined) {
      obj[sorted] = [strs[i]];
    } else {
      obj[sorted].push(strs[i]);
    }
  }

  return Object.values(obj);
}

function groupAnagrams(strs) {
  const obj = {};

  for (let i = 0; i < strs.length; i++) {
    const arr = new Array(26).fill(0);
    for (let j = 0; j < strs[i].length; j++) {
      arr[strs[i].charCodeAt(j) - "a".charCodeAt(0)]++;
    }
    if (obj[arr] == undefined) {
      obj[arr] = [strs[i]];
    } else {
      obj[arr].push(strs[i]);
    }
  }
  return Object.values(obj);
}
