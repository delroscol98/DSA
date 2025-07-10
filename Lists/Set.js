class SetList {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  read(index) {
    return this.data[index];
  }

  search(value) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] == value) return true;
    }
    return false;
  }

  insert(index, value) {
    const itemExists = this.search(value);
    if (itemExists) return;

    // insert at end
    if (!itemExists && index == this.length) {
      this.data[this.length] = value;
    }

    // insert at beginning
    if (!itemExists && index == 0) {
      for (let i = this.length - 1; i > 0; i--) {
        this.data[i + 1] = this.data[i];
      }
      this.data[0] = value;
    }

    // insert at middle
    if (!itemExists) {
      for (let i = this.length - 1; i > index; i--) {
        this.data[i + 1] = this.data[i];
      }
      this.data[index] = value;
    }

    this.length++;
    return this;
  }

  delete(index, value) {
    const itemExists = this.search(value);
    if (!itemExists) return;
    delete this.data[index];

    for (let i = Number(index); i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.length--;
    delete this.data[this.length];
    return this;
  }
}

const test = new SetList();
test.insert(0, "apples");
test.insert(1, "bananas");
test.insert(2, "cucumbers");
test.insert(3, "cucumbers");

console.log(test);

console.log(test.read("0"));
console.log(test.read("1"));
console.log(test.read("2"));

console.log(test.search("bananas"));

test.delete("0", "apples");

console.log(test);
