/**
 * Design a stack class that supports the push, pop, top, and getMin operations.
 *
 ** MinStack() initializes the stack object.
 ** void push(int val) pushes the element val onto the stack.
 ** void pop() removes the element on the top of the stack.
 ** int top() gets the top element of the stack.
 ** int getMin() retrieves the minimum element in the stack.
 *
 * Each function should run in O(1) time.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @returns {void}
   */
  push(val) {
    this.stack.push(val);
    if (this.minStack.length > 0) {
      val = Math.min(val, this.minStack[this.minStack.length - 1]);
    }
    this.minStack.push(val);
  }

  /**
   * @returns {void}
   */
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * @returns {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @returns {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    let min = Infinity;
    for (const num of this.stack) {
      if (num < min) {
        min = num;
      }
    }
    return min;
  }
}
