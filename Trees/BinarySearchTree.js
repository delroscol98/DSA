class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (temp) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;
    let temp = this.temp;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode = this.root) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  rContains(value, currentNode = this.root) {
    // Base Case:
    // 1. The node doesn't exist
    if (!currentNode) return false;

    // 2. The node does exist
    if (value === currentNode.value) return true;

    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left);
    } else {
      return this.rContains(value, currentNode.right);
    }
  }

  #rInsert(value, currentNode = this.root) {
    // Base Case:
    // 1. If currentNode point to a falsy value, return a new Node
    if (!currentNode) return new Node(value);

    // Recurse Case
    // 1.If the passed in value is less than value of currentNode, call the #rInsert again with the same first argument, and the left node of currentNode
    if (value < currentNode.value) {
      currentNode.left = this.#rInsert(value, currentNode.left);
    }
    // 2.If the passed in value is less than value of currentNode, call the #rInsert again with the same first argument, and the right node of currentNode
    else if (value > currentNode.value) {
      currentNode.right = this.#rInsert(value, currentNode.right);
    }

    return currentNode;
  }

  rInsert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }
    this.#rInsert(value);
    return this;
  }

  // This helper method takes in the value to be deleted and the node from which the process begins
  #rDeleteNode(value, currentNode) {
    // Base Case: falsy currentNode
    if (!currentNode) return null;

    // Recurse Case:
    // 1. Value is less than currentNode's value (traverse left)
    if (value < currentNode.value) {
      currentNode.left = this.#rDeleteNode(value, currentNode.left);
    }

    // 2. Value is greater than currentNode's value (traverse right)
    else if (value > currentNode.value) {
      currentNode.right = this.#rDeleteNode(value, currentNode.right);
    }

    // 3. Value is equal to currentNode's value
    else {
      // 3.a. currentNode has no children
      if (!currentNode.left && !currentNode.right) {
        return null;
      }

      // 3.b. currentNode has no left child
      else if (!currentNode.left) {
        currentNode = currentNode.right;
      }

      // 3.c. currentNode has no right child
      else if (!currentNode.right) {
        currentNode = currentNode.left;
      }

      // 3.d. currentNode has both children
      else {
        let subTreeMin = this.minValueNode(currentNode.right);
        currentNode.value = subTreeMin;
        currentNode.right = this.#rDeleteNode(subTreeMin, currentNode.right);
      }
    }
    return currentNode;
  }

  deleteNode(value) {
    this.root = this.#rDeleteNode(value, this.root);
    return this;
  }
}
