function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => a + b;

// console.log(sum(1, 2));

// console.log(sum2(1, 2));

var v = 'Global Variable';

let obj = {
  v: 'Object  Variable',
  arrowFunction: () => {
    console.log(this.v);
  },
  regFunction() {
    console.log(this.v);
  },
};

// obj.arrowFunction();
// obj.regFunction();

function executeRegFunction() {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

const executeArrowFunction = () => {
  console.log(arguments);
};

executeRegFunction(1, 2);
executeArrowFunction(1, 2);
