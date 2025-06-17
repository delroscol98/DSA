function hasUnvisited(seen, dists) {
  return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen, dists) {
  let idx = -1;
  let lowestDistance = Infinity;

  for (let i = 0; i < seen.length; i++) {
    if (seen[i]) continue;
    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i];
      idx = i;
    }
  }

  return idx;
}

function dijkstrasList(source, sink, arr) {
  const seen = new Array(arr.length).fill(false);
  const prev = new Array(arr.length).fill(-1);
  const dists = new Array(arr.length).fill(Infinity);
  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    const curr = getLowestUnvisited(seen, dists);
    seen[curr] = true;

    const adjs = arr[curr];
    for (let i = 0; i < adjs.length; i++) {
      const edge = adjs[i];
      if (seen[edge.to]) continue;
      const dist = dists[curr] + edge.weight;
      if (dist < dists[edge.to]) {
        dists[edge.to] = dist;
        prev[edge.to] = curr;
      }
    }
  }

  const out = [];
  let curr = sink;

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  out.push(source);
  return out.reverse();
}

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)
const list1 = [];
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

console.log(dijkstrasList(0, 6, list1)); // [0, 1, 4, 5, 6]
