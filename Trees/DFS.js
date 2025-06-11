function preorderTraversal(node, path) {
  if (!node) return path;
  path.push(node.value);
  preorderTraversal(node.left, path);
  preorderTraversal(node.right, path);
  return path;
}

function inorderTraversal(node, path) {
  if (!node) return path;
  inorderTraversal(node.left, path);
  path.push(node.value);
  inorderTraversal(node.right, path);
  return path;
}

function postorderTraversal(node, path) {
  if (!node) return path;
  postorderTraversal(node.left, path);
  postorderTraversal(node.right, path);
  path.push(node.value);
  return path;
}
