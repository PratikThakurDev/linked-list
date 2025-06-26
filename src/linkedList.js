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
    const newNode = new Node(value)
    if(this.headNode === null){
        this.headNode = newNode;
    }
    let current = this.headNode;
    while (current.nextNode !== null) {
        current = current.nextNode;

    }
    current.nextNode = newNode
  }
}
