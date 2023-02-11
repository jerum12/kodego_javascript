class Queues {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  firstElement() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queues();

queue.enqueue('Custer');
queue.enqueue('Jay');
console.log(queue);
queue.dequeue();
queue.enqueue('Tims');
console.log(queue);
queue.dequeue();
console.log(queue);
