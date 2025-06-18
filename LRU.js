function createNode(value) {
  return { value };
}

class LRU {
  constructor(capacity) {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
    this.lookup = new Map();
    this.reverseLookup = new Map();
  }

  update(key, value) {
    let node = this.lookup.get(key);
    if (!node) {
      node = createNode(value);
      this.length++;
      this._prepend(node);
      this._trimCache();
      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this._detach(node);
      this._prepend(node);
      node.value = value;
    }
  }

  get(key) {
    const node = this.lookup.get(key);
    if (!node) return undefined;
    this._detach(node);
    this._prepend(node);
    return node.value;
  }

  _detach(node) {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    if (this.head === node) this.head = this.head.next;
    if (this.tail === node) this.tail = this.tail.prev;
    node.next = undefined;
    node.prev = undefined;
  }

  _prepend(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  _trimCache() {
    if (this.length <= this.capacity) return;
    const tail = this.tail;
    this._detach(tail);
    const key = this.reverseLookup.get(tail);
    this.lookup.delete(key);
    this.reverseLookup.delete(key);
    this.length--;
  }
}

const lru = new LRU(3);

lru.update("foo", 69);
lru.get("foo"); // 69

lru.update("bar", 420);
lru.get("bar"); // 420

lru.update("baz", 1337);
lru.get("baz"); // 1337

lru.update("ball", 69420);
lru.get("ball"); // 69420

lru.get("foo"); // undefined

lru.get("bar"); // 420

lru.update("foo", 69);

lru.get("bar"); // 420
lru.get("foo"); // 69

// shouldn't of been deleted, but since bar was get'd, bar was added to the
// front of the list, so baz became the end

lru.get("baz"); // undefined
