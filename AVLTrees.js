class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.height = 1;
  }

  add(value) {
    const newNode = new Node(value);
    // Decide to go left or right starting from the root
    if (value < this.value) {
      // go left

      if (this.left) {
        this.left.add(value);
      } else {
        this.left = newNode;
      }

      // Update height
      if (!this.right || this.left.height > this.right.height) {
        this.height = this.left.height + 1;
      }
    } else {
      // go right

      if (this.right) {
        this.right.add(value);
      } else {
        this.right = newNode;
      }

      // Update height
      if (!this.left || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      }
    }
    this.balance();
  }

  balance() {
    const rightHeight = this.right ? this.right.height : 0;
    const leftHeight = this.left ? this.left.height : 0;

    // Is the node out of balance (left-heavy)?
    if (leftHeight > rightHeight + 1) {
      const leftRightHeight = this.left.right ? this.left.right.height : 0;
      const leftLeftHeight = this.left.left ? this.left.left.height : 0;

      // Do I need to do a double rotation? If so, call rotate on child...
      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateLeft();
      }

      // Then rotate on self
      this.rotateRight();
    }
    // Is the node out of balance (right heavy)?
    else if (Math.abs(rightHeight - leftHeight) >= 2) {
      const rightLeftHeight = this.right.left ? this.right.left.height : 0;
      const rightRightHeight = this.right.right ? this.right.right.height : 0;

      // Do I need to do a double rotation? If so, rotate on child...
      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateRight();
      }

      // Then rotate on self
      this.rotateLeft();
    }
  }

  // Call if the right child is heavy
  rotateLeft() {
    const valueBefore = this.value;
    const leftBefore = this.left;

    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.calcNewHeight();
    this.calcNewHeight();
  }

  // Call if the left child is heavy
  rotateRight() {
    const valueBefore = this.value;
    const rightBefore = this.right;

    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.calcNewHeight();
    this.calcNewHeight();
  }

  calcNewHeight() {
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||
      (this.left && this.right.height < this.left.height)
    ) {
      this.height = this.left.height + 1;
    } else {
      this.height = this.right.height + 1;
    }
  }

  serialize() {
    const ans = { value: this.value };
    ans.left = !this.left ? null : this.left.serialize();
    ans.right = !this.right ? null : this.right.serialize();
    ans.height = this.height;
    return ans;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.root.add(value);
    }
  }

  toJSON() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }

  toObject() {
    return this.root;
  }
}

const nums = [3, 6, 4, 6, 5, 1, 10, 2, 9, 8];
const tree = new Tree();
nums.map((num) => tree.add(num));
const objs = tree.toObject();
