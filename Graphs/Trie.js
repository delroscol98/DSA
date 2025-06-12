const { CITY_NAMES } = require("./cities.js");

class Node {
  constructor(string) {
    this.children = [];
    this.terminus = false;
    this.value = string[0] || "";
    if (string.length > 1) {
      this.children.push(new Node(string.substr(1)));
    } else {
      this.terminus = true;
    }
  }

  add(string) {
    const value = string[0];
    const next = string.substr(1);
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (child.value === value) {
        if (next) {
          child.add(next);
        } else {
          child.terminus = true;
        }
        return;
      }
    }
    this.children.push(new Node(string));
  }

  _complete(search, built, suggestions) {
    if (suggestions.length >= 3 || (search && search[0] !== this.value)) {
      return suggestions;
    }

    if (this.terminus) {
      suggestions.push(`${built}${this.value}`);
    }

    this.children.forEach((child) =>
      child._complete(search.substr(1), `${built}${this.value}`, suggestions)
    );

    return suggestions;
  }

  complete(string) {
    let completions = [];

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      completions = completions.concat(child._complete(string, "", []));
    }

    return completions;
  }
}

function createTrie(words) {
  const root = new Node("");

  for (let i = 0; i < words.length; i++) {
    const char = words[i];
    root.add(char.toLowerCase());
  }

  return root;
}

var root = createTrie(CITY_NAMES.slice(0, 10));
var completions = root.complete("san");

var root = createTrie(CITY_NAMES.slice(0, 10));
var completions = root.complete("philadelph");

var root = createTrie(CITY_NAMES.slice(0, 25));
var completions = root.complete("d");

var root = createTrie(CITY_NAMES.slice(0, 200));
var completions = root.complete("new");

var root = createTrie(CITY_NAMES.slice(0, 200));
var completions = root.complete("bo");

var root = createTrie(CITY_NAMES.slice(0, 500));
var completions = root.complete("sal");

var root = createTrie(CITY_NAMES);
var completions = root.complete("san");

// EDGE CASES
//1. Handle whole words
var root = createTrie(CITY_NAMES.slice(0, 30));
var completions = root.complete("seattle");

//2. Handle no match
var root = createTrie(CITY_NAMES.slice(0, 30));
var completions = root.complete("no match");

//3. Handle words that are substrings of other words
var root = createTrie(CITY_NAMES.slice(0, 800));
var completions = root.complete("salin");

console.log(root);
console.log(completions);
