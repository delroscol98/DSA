class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }

  add(value) {
    const newNode = new Node(value);
    if (value < this.value) {
      if (this.left) {
        this.left.add(value);
      } else {
        this.left = newNode;
      }

      if (!this.right || this.left.height > this.right.height) {
        this.height = this.left.height + 1;
      }
    } else {
      if (this.right) {
        this.right = this.right.add(value);
      } else {
        this.right = newNode;
      }

      if (!this.left || this.right.height > this.left.height) {
        this.height = this.right.height + 1;
      }
    }
    this.balance();
  }

  balance() {
    const rightHeight = this.right ? this.right.height : 0;
    const leftHeight = this.left ? this.left.height : 0;

    if (leftHeight > rightHeight) {
      const leftRightHeight = this.left.right ? this.left.right.height : 0;
      const leftLeftHeight = this.left.left ? this.left.left.height : 0;

      if (leftRightHeight > leftLeftHeight) {
        this.left.rotateRR();
      }

      this.rotateLL();
    } else if (rightHeight > leftHeight + 1) {
      const rightLeftHeight = this.right.left ? this.right.left.height : 0;
      const rightRightHeight = this.right.right ? this.right.right.height : 0;

      if (rightLeftHeight > rightRightHeight) {
        this.right.rotateLL();
      }

      this.rotateRR();
    }
  }

  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;

    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }

  rotateLL() {
    const valueBefore = this.value;
    const rightBefore = this.right;

    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }

  updateInNewLocation() {
    if (!this.right && !this.left) {
      this.height = 1;
    } else if (
      !this.right ||
      (!this.left && this.right.height < this.left.height)
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
