class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertElement(element) {
    let node = new Node(element);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  getElement(id) {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === id) {
        return current.element;
      }
      count++;
      current = current.next;
    }

    return null;
  }
}

let listLinked = new LinkedList();
listLinked.insertElement(1);
listLinked.insertElement(2);
listLinked.insertElement(3);

console.log(listLinked.getElement(0));
console.log(listLinked.getElement(1));
console.log(listLinked.getElement(2));
