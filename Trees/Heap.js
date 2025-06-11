class MinHeap {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value) {
    this.data[this.length] = value;
    this.#heapifyUp(this.length);
    this.length++;
  }

  delete() {
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0];
    this.length--;
    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.#heapifyDown(0);
    return out;
  }

  #heapifyDown(idx) {
    const leftIdx = this.#leftChild(idx);
    const rightIdx = this.#rightChild(idx);

    if (idx >= this.length || leftIdx >= this.length) return;

    const leftVal = this.data[leftIdx];
    const rightVal = this.data[rightIdx];
    const val = this.data[idx];

    if (leftVal >= rightVal && val > rightIdx) {
      this.data[idx] = rightVal;
      this.data[rightIdx] = val;
      this.#heapifyDown(rightIdx);
    } else if (rightVal > leftVal && val > leftVal) {
      this.data[idx] = leftVal;
      this.data[leftIdx] = val;
      this.#heapifyDown(leftIdx);
    }
  }

  #heapifyUp(idx) {
    if (idx === 0) return;

    const parent = this.#parent(idx);
    const parentValue = this.data[parent];
    const value = this.data[idx];

    if (parentValue > value) {
      this.data[idx] = parentValue;
      this.data[parent] = value;
      this.#heapifyUp(parent);
    }
  }

  #parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  #leftChild(idx) {
    return 2 * idx + 1;
  }

  #rightChild(idx) {
    return 2 * idx + 2;
  }
}

class MaxHeap {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value) {
    this.data[this.length] = value;
    this.#heapifyUp(this.length);
    this.length++;
  }

  delete() {
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0];
    this.length--;
    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.#heapifyDown(0);
    return out;
  }

  #heapifyDown(idx) {
    const leftIdx = this.#leftChild(idx);
    const rightIdx = this.#rightChild(idx);

    if (idx >= this.length || leftIdx >= this.length) return;

    const leftVal = this.data[leftIdx];
    const rightVal = this.data[rightIdx];
    const val = this.data[idx];

    if (leftVal <= rightVal && val < rightIdx) {
      this.data[idx] = rightVal;
      this.data[rightIdx] = val;
      this.#heapifyDown(rightIdx);
    } else if (rightVal > leftVal && val > leftVal) {
      this.data[idx] = leftVal;
      this.data[leftIdx] = val;
      this.#heapifyDown(leftIdx);
    }
  }

  #heapifyUp(idx) {
    if (idx === 0) return;

    const parent = this.#parent(idx);
    const parentValue = this.data[parent];
    const value = this.data[idx];

    if (parentValue < value) {
      this.data[idx] = parentValue;
      this.data[parent] = value;
      this.#heapifyUp(parent);
    }
  }

  #parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  #leftChild(idx) {
    return 2 * idx + 1;
  }

  #rightChild(idx) {
    return 2 * idx + 2;
  }
}
