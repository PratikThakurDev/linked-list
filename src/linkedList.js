class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let count = 0;
    let current = this.headNode;
    while (current !== null) {
      if (count === index) return current;
      current = current.nextNode;
      count++;
    }
    return null;
  }

  pop() {
    if (!this.headNode) return;

    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }

    let current = this.headNode;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = null;
  }

  contains(value) {
    let current = this.headNode;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let index = 0;
    let current = this.headNode;
    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = '';
    let current = this.headNode;
    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + 'null';
  }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString());
console.log('Size:', list.size());
console.log('Head:', list.head().value);
console.log('Tail:', list.tail().value);
console.log('At index 1:', list.at(1).value);
console.log('Contains 20?', list.contains(20));
console.log('Index of 10:', list.find(10));
list.pop();
console.log(list.toString());
