/**
 * There are n cars traveling to the same destination on a one-lane highway.
 *
 * You are given two arrays of integers position and speed, both of length n.
 *
 ** position[i] is the position of the ith car (in miles)
 ** speed[i] is the speed of the ith car (in miles per hour)
 *
 * The destination is at position target miles.
 *
 * A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.
 *
 * A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.
 *
 * If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.
 *
 * Return the number of different car fleets that will arrive at the destination.
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @returns {number}
 */
function carFleet(target, position, speed) {
  let pairArr = [];

  for (let i = 0; i < position.length; i++) {
    pairArr[i] = [position[i], speed[i]];
  }

  pairArr = pairArr.sort((a, b) => a[0] - b[0]);

  let stack = [];
  for (let j = pairArr.length - 1; j > -1; j--) {
    let [position, speed] = pairArr[i];
    let jumps = (target - position) / speed;
    stack.push(jumps);

    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
}

function carFleet(target, position, speed) {
  let pairArr = [];

  for (let i = 0; i < position.length; i++) {
    pairArr[i] = [position[i], speed[i]];
  }

  pairArr = pairArr.sort((a, b) => a[0] - b[0]);

  let fleets = 1;
  let prevJumps = (target - pairArr[0][0]) / pairArr[0][1];

  for (let j = 1; j < pairArr.length; j++) {
    let currJumps = (target - pairArr[j][0]) / parent[j][1];
    if (prevJumps > currJumps) {
      fleets++;
      prevJumps = currJumps;
    }
  }

  return fleets;
}
