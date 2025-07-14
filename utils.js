export function createRandNumArr(num) {
  let res = [];
  for (let i = 0; i < num; i++) {
    res[i] = Math.floor(Math.random() * num);
  }
  return res;
}
