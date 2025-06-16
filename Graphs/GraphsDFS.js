function walk(graph, curr, needle, seen, path) {
  if (seen[curr]) return false;
  seen[curr] = true;

  // recurse
  // pre
  path.push(curr);
  if (curr === needle) return true;

  // recurse
  const list = graph[curr];
  for (let i = 0; i < list.length; i++) {
    const edge = list[i];
    if (walk(graph, edge.to, needle, seen, path)) return true;
  }

  // post
  path.pop();
  return false;
}

function graphDFS(graph, source, needle) {
  const seen = new Array(graph.length).fill(false);
  const path = [];

  walk(graph, source, needle, seen, path);

  if (path.length === 0) return null;
  return path;
}

const list1 = [];

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)
list1[0] = [
  { to: 1, weight: 3 },
  { to: 2, weight: 1 },
];
list1[1] = [
  { to: 0, weight: 3 },
  { to: 2, weight: 4 },
  { to: 4, weight: 1 },
];
list1[2] = [
  { to: 1, weight: 4 },
  { to: 3, weight: 7 },
  { to: 0, weight: 1 },
];
list1[3] = [
  { to: 2, weight: 7 },
  { to: 4, weight: 5 },
  { to: 6, weight: 1 },
];
list1[4] = [
  { to: 1, weight: 1 },
  { to: 3, weight: 5 },
  { to: 5, weight: 2 },
];
list1[5] = [
  { to: 6, weight: 1 },
  { to: 4, weight: 2 },
  { to: 2, weight: 18 },
];
list1[6] = [
  { to: 3, weight: 1 },
  { to: 5, weight: 1 },
];

const list2 = [];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
list2[0] = [
  { to: 1, weight: 3 },
  { to: 2, weight: 1 },
];
list2[1] = [{ to: 4, weight: 1 }];
list2[2] = [{ to: 3, weight: 7 }];
list2[3] = [];
list2[4] = [
  { to: 1, weight: 1 },
  { to: 3, weight: 5 },
  { to: 5, weight: 2 },
];
list2[5] = [
  { to: 2, weight: 18 },
  { to: 6, weight: 1 },
];
list2[6] = [{ to: 3, weight: 1 }];

console.log(graphDFS(list1, 6, 0)); // [0,1,2,3,4,5,6]
console.log(graphDFS(list1, 0, 6)); // [6,3,2,1,0]
console.log(graphDFS(list2, 6, 0)); // null
console.log(graphDFS(list1, 0, 6)); // [0,1,2,3,4,5,6]
