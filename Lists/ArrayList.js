class ArrayList {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  pop() {
    let temp = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return temp;

    // return this.delete(this.length - 1)
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    let temp = this.data[index];
    this.#collapseTo(index);
    return temp;
  }

  #collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const list = new ArrayList();
const range = (length) =>
  Array.apply(null, { length: length }).map(Number.call, Number);
const abcRange = (length) =>
  range(length).map((num) => String.fromCharCode(97 + num));

// abcRange(26).map((character) => list.push(character));
// console.log(list);

// abcRange(13).map((character) => list.push(character));
// range(10).map(() => list.pop());
// console.log(list);
// console.log(list.pop());

// list.push("first");
// list.get(0); // first
// list.push("second");
// list.get(1); // second
// list.get(0); // first
// abcRange(26).map((character) => list.push(character));
// list.get(27); // z
// list.get(0); // first
// list.get(9); // h
// list.pop();
// list.get(list.length - 1); // y

abcRange(26).map((character) => list.push(character));
list.delete(13);
console.log(list.length);
list.get(12); // m
list.get(13); // 0
list.delete(0);
console.log(list.length);
list.get(0);
