class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.node) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    temp.value = value;
    return true;
  }

  insert(index, value) {
    const newNode = new Node(value);

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return false;

    const pre = this.get(index - 1);
    const temp = this.get(index);

    pre.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  hasLoop() {
    if (!this.head || !this.head.next) return false;
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < this.length; i++) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
      if (!fast.next || !fast) return false;
    }
  }

  findKthFromTheEnd(k) {
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < k; i++) {
      if (!fast) return null;
      fast = fast.next;
    }
    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }

  partitionList(x) {
    if (!this.head) return null;
    const dummy1 = new Node(0);
    const dummy2 = new Node(0);

    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = this.head;

    while (current) {
      if (current.value < x) {
        prev1.next = current;
        prev1 = prev1.next;
      } else {
        prev2.next = current;
        prev2 = prev2.next;
      }
      current = current.next;
    }

    prev2.next = null;
    prev1.next = dummy2.next;
    this.head = dummy1.next;
    dummy1.next = null;

    return this;
  }

  removeDuplicates() {
    const values = new Set();
    let prev = null;
    let current = this.head;
    while (current.next) {
      if (values.has(current.value)) {
        prev.next = current.next;
        this.length--;
      } else {
        values.add(current.value);
        prev.next = current;
      }
      current = current.next;
    }
    return this;
  }

  binaryToDecimal() {
    let num = 0;
    let temp = this.head;
    while (temp) {
      num = num * 2 + temp.value;
      temp = temp.next;
    }
    return num;
  }

  reverseBetween(a, b) {
    if (!this.head) return;

    const dummy = new Node(0);
    dummy.next = this.head;

    let prev = dummy;

    for (let i = 0; i < a; i++) {
      prev = prev.next;
    }

    let current = prev.next;
    for (let i = 0; i < b - a; i++) {
      const temp = current.next;
      current.next = temp.next;
      temp.next = prev;
      prev.next = temp;
    }
    this.head = dummy.next;
    dummy.next = null;

    return this;
  }

  swapPairs() {
    if (!this.head) return false;
    const dummy = new Node(0);
    dummy.next = this.head;

    let prev = dummy;
    let first = this.head;

    while (first && first.next) {
      let second = first.next;
      prev.next = second;
      first.next = second.next;
      second.next = first;

      prev = first;
      first = first.next;
    }
    this.head = dummy.next;
    dummy.next = null;

    return this;
  }
}
