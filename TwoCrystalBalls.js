function twoCrystalBalls(breaks) {
  let jmpAmt = Math.floor(Math.sqrt(breaks.length));

  for (var i = jmpAmt; i < breaks.length; i++) {
    if (breaks[i]) return;
  }

  i -= jmpAmt;

  for (j = 0; j < jmpAmt && i < breaks.length; i++, j++) {
    if (breaks[i]) return i;
  }

  return -1;
}
