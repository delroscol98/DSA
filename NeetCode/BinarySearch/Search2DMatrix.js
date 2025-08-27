/**
 * You are given an "m x n" 2D integer array matric and an integer "target"
 *
 ** Each row in matrix is sorted in non-descreasing order
 ** The first integer of every row is greater than the last intefer of the previous row
 *
 * Return "true" if "target" exists within "matrix" or "false" otherwise
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 * */
export function searchMatrix(matrix, target) {
  let l = 0;
  let r = matrix.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let row = matrix[mid];

    let a = 0;
    let b = row.length - 1;

    if (target < row[a]) {
      r = mid - 1;
    } else if (target > row[b]) {
      l = mid + 1;
    } else {
      while (a <= b) {
        let subMid = Math.floor((a + b) / 2);

        if (target < row[subMid]) {
          b = subMid - 1;
        } else if (target > row[subMid]) {
          a = subMid + 1;
        } else {
          return true;
        }
      }
      break;
    }
  }
  return false;
}
