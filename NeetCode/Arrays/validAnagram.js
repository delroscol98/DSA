// Input: s = "racecar", t = "carrace"
// Output: true

// Input: s = "jar", t = "jam"
// Output: false

/**
 * Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
 *
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isAnagram(s, t) {
  if (s.length != t.length) return false;

  s = s.split("").sort();
  t = t.split("").sort();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) return false;
  }

  return true;
}

function isAnagram(s, t) {
  if (s.length != t.length) return false;

  const sObj = {};
  const tObj = {};

  for (let i = 0; i < s.length; i++) {
    if (sObj[s[i]] == undefined) {
      sObj[s[i]] = 1;
    } else {
      sObj[s[i]]++;
    }

    if (tObj[t[i]] == undefined) {
      tObj[t[i]] = 1;
    } else {
      tObj[t[i]]++;
    }
  }

  for (const [key, val] of Object.entries(sObj)) {
    if (tObj[key] != val) return false;
  }

  return true;
}

function isAnagram(s, t) {
  const sArr = new Array(26).fill(0);
  const tArr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    sArr[s.charCodeAt(i) - "a".charCodeAt(0)] += 1;
  }

  for (let j = 0; j < t.length; j++) {
    tArr[t.charCodeAt(j) - "a".charCodeAt(0)] += 1;
  }

  for (let k = 0; k < 26; k++) {
    if (sArr[k] != tArr[k]) return false;
  }

  return true;
}
