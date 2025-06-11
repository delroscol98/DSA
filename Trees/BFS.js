function BFS(head, needle) {
  const q = [head];
  while (q.length) {
    let curr = q.shift();
    if (!curr) {
      continue;
    }
    if (curr.value === needle) {
      return true;
    }
    q.push(curr.left);
    q.push(curr.right);
  }
  return false;
}
