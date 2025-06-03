const logMaze = required("./logger");
const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

function generateVisited(maze) {
  const visited = [];
  for (let y = 0; y < maze.length; y++) {
    const yAxis = [];
    for (let x = 0; x < maze[y].length; j++) {
      const coordinate = {
        closed: maze[y][x] === 1,
        length: 0,
        openedBy: NO_ONE,
        x,
        y,
      };
      yAxis.push(coordinate);
    }
    visited.push(yAxis);
  }
  return visited;
}

function getNeighbours(visited, x, y) {
  const neighbours = [];
  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    //up
    neighbours.push(visited[y - 1][x]);
  }

  if (y + 1 < visited[0].length && !visited[y + 1][x].closed) {
    //down
    neighbours.push(visited[y + 1][x]);
  }

  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    //left
    neighbours.push(visited[y][x - 1]);
  }

  if (x + 1 < visited[0].length && !visited[y][x + 1].closed) {
    //right
    neighbours.push(visited[y][x + 1]);
  }

  return neighbours;
}

function fundShortestPathLength(max, [xA, yA], [xB, yB]) {
  const visited = generateVisited(maze);
  visited[yA][xA].openedBy = BY_A;
  visited[yB][xB].openedBy = BY_B;
  let iteration = 0;

  let aQueue = [visited[yA][xA]];
  let bQueue = [visited[yB][xB]];

  while (aQueue.length && bQueue.length) {
    iteration++;

    // gether aNeighbours
    let aNeighbours = [];
    while (aQueue.length) {
      const coordinate = aQueue.shift();
      aNeighbours = aNeighbours.concat(
        getNeighbours(visited, coordinate.x, coordinate.y)
      );
    }

    // process aNeighbours
    for (let i = 0; i < aNeighbours.length; i++) {
      const neighbour = aNeighbours[i];
      if (neighbour.opened === BY_B) {
        return neighbour.length + iteration;
      } else if (neighbour.openedBy === NO_ONE) {
        neighbour.length = iteration;
        neighbour.openedBy = BY_A;
        aQueue.push(neighbour);
      }
    }

    // gether bNeighbours
    let bNeighbours = [];
    while (bQueue.length) {
      const coordinate = bQueue.shift();
      bNeighbours = bNeighbours.concat(
        getNeighbours(visited, coordinate.x, coordinate.y)
      );
    }

    // process bNeighbours
    for (let i = 0; i < bNeighbours.length; i++) {
      const neighbour = bNeighbours[i];
      if (neighbour.opened === BY_A) {
        return neighbour.length + iteration;
      } else if (neighbour.openedBy === NO_ONE) {
        neighbour.length = iteration;
        neighbour.openedBy = BY_B;
        bQueue.push(neighbour);
      }
    }
  }

  return -1;
}
