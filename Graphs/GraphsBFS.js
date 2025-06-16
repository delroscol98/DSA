function GraphBFS(graph, source, needle) {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q = [source];

  do {
    const curr = q.shift();
    if (curr === needle) break;
    const adjs = graph[curr];
    for (let i = 0; i < graph.length; i++) {
      if (adjs[i] === 0) continue;
      if (seen[i]) continue;

      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }
    seen[curr] = true;
  } while (q.length);

  if (prev[needle] === -1) return null;

  // Build it backwards
  let curr = needle;
  const out = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out.reverse());
}

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
const matrix2 = [
  [0, 3, 1, 0, 0, 0, 0], // 0
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 7, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 5, 0, 2, 0],
  [0, 0, 18, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 1],
];

console.log(GraphBFS(matrix2, 0, 6)); // [0, 1, 4, 5, 6]
console.log(GraphBFS(matrix2, 6, 0)); // null
