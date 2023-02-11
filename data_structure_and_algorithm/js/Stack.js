class Stack {
  constructor() {
    this.items = [];
  }

  // i-add sa array na items ung element
  pushElement(element) {
    this.items.push(element);
  }

  // i-remove sa array na items yung nasa top or huling na push
  removeElement() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  topPeek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.pushElement('Mam fatima');
stack.pushElement('Sir Jay');
stack.pushElement('Sir Custer');
stack.pushElement('Sir Cyan');
console.log('inital stack = ', stack);
console.log('nag remove dito = ', stack.removeElement());
console.log('isEmpty', stack.isEmpty());
console.log('sino yung huling nasa stack = ', stack.topPeek());

// stack.isEmpty();

// var arrayData = [1, 2, 3, 4, 5, 6,7, 8];
// arrayData[6];
