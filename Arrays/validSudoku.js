/**
 * You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:
 * 
 ** Each row must contain the digits 1-9 without duplicates.
 ** Each column must contain the digits 1-9 without duplicates.
 ** Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.

 * Return true if the Sudoku board is valid, otherwise return false
 
 * Note: A board does not need to be full or be solvable to be valid.
 * @param {string[][]} board
 * @returns {boolean}
 */
function validSudoku(board) {
  // check each row
  for (let row = 0; row < 9; row++) {
    let seen = new Set();
    for (let col = 0; col < 0; col++) {
      if (board[row][col] == ".") continue;
      if (seen.has(board[row][col])) return false;
      seen.add(board[row][col]);
    }
  }

  // check each column
  for (let row = 0; row < 9; row++) {
    let seen = new Set();
    for (let col = 0; col < 0; col++) {
      if (board[row][col] == ".") continue;
      if (seen.has(board[col][row])) return false;
      seen.add(board[col][row]);
    }
  }

  // check each square
  for (let square = 0; square < 9; square++) {
    const seen = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let row = Math.floor(square / 3) * 3 + i;
        let col = (square % 3) * 3 + j;
        if (board[row][col] == ".") continue;
        if (seen.has(board[row][col])) return false;
        seen.add(board[row][col]);
      }
    }
  }

  return true;
}

function validSudoku(board) {
  const rows = {};
  const cols = {};
  const squares = {};

  for (let r = 0; r < 9; r++) {
    rows[r] = new Set();
    for (let c = 0; c < 9; c++) {
      const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
      const tile = board[r][c];

      if (tile == ".") continue;

      if (cols[c] == undefined) {
        cols[c] = new Set();
      }

      if (squares[squareKey] == undefined) {
        squares[squareKey] = new Set();
      }

      if (
        rows[r].has(tile) ||
        cols[c].has(tile) ||
        squares[squareKey].has(tile)
      )
        return false;

      rows[r].add(tile);
      cols[c].add(tile);
      squares[squareKey].add(tile);
    }
  }

  return true;
}
