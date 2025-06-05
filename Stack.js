class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  empty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      this.top.next = newNode;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.top;
    if (this.length === 1) {
      this.top = null;
    } else {
      this.top = temp.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  peek() {
    return this.top;
  }
}
