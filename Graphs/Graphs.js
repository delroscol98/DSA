const { getUser } = require("./jobs");

const findMostCommonTitle = (myId, degreesOfSeparation) => {
  let queue = [myId];
  const seen = new Set(queue);
  const jobs = {};

  for (let i = 0; i <= degreesOfSeparation; i++) {
    const newQueue = [];
    while (queue.length) {
      const user = getUser(queue.shift());

      // queue up next iteration of connections
      for (let j = 0; j < user.connections.length; j++) {
        const connection = user.connections[j];
        if (!seen.has(connection)) {
          newQueue.push(connection);
          seen.add(connection);
        }
      }

      // count the job
      jobs[user.title] = jobs[user.title] ? jobs[user.title] + 1 : 1;
    }

    queue = newQueue;
  }

  // find key with the biggest number

  const jobKeys = Object.keys(jobs);

  let biggestNumber = jobs[jobKeys[0]];
  let jobName = jobKeys[0];
  for (let i = 1; i < jobKeys.length; i++) {
    const currentJob = jobKeys[i];
    if (jobs[currentJob] > biggestNumber) {
      jobName = currentJob;
      biggestNumber = jobs[currentJob];
    }
  }

  //   see all job titles, sorted
  jobKeys
    .map((id) => [id, jobs[id]])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([job, num]) => console.log(`${num} – ${job}`));

  console.log("======");

  return jobName;
};

console.log(findMostCommonTitle(30, 2));

class Node {
  constructor(string) {
    this.children = [];
    this.terminus = false;
    this.value = string[0];
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

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      child._complete(search.substr(1), `${built}${this.value}`, suggestions);
    }

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
    const word = words[i];
    root.add(word.toLowerCase());
  }
  return root;
}
