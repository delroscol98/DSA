const dir = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

function walk(maze, wall, curr, end, seen, path) {
  // 1. Base case
  // off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  )
    return false;
  // on a wall
  if (maze[curr.y][curr.x] === wall) return false;

  // at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // visited
  if (seen[curr.y][curr.x]) return false;

  // 2. Recurse
  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path))
      return true;
  }

  // post
  path.pop();
  return false;
}

function mazeSolver(maze, wall, start, end) {
  const seen = [];
  const path = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[i].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}

const maze = [
  "xxxxxxxxxx x",
  "x        x x",
  "x        x x",
  "x xxxxxxxx x",
  "x          x",
  "x xxxxxxxxxx",
];

const mazeResult = [
  { x: 10, y: 0 },
  { x: 10, y: 1 },
  { x: 10, y: 2 },
  { x: 10, y: 3 },
  { x: 10, y: 4 },
  { x: 9, y: 4 },
  { x: 8, y: 4 },
  { x: 7, y: 4 },
  { x: 6, y: 4 },
  { x: 5, y: 4 },
  { x: 4, y: 4 },
  { x: 3, y: 4 },
  { x: 2, y: 4 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
];

const result = mazeSolver(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 });

function drawPath(data, path) {
  const data2 = data.map((row) => row.split(""));
  path.forEach((p) => {
    if (data2[p.y] && data2[p.y][p.x]) {
      data2[p.y][p.x] = "*";
    }
  });
  return data2.map((d) => d.join(""));
}

console.log(result);
