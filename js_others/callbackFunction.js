function greetings(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

function welcome() {
  console.log('Welcome!');
}

greetings('Kodego', welcome);

function a1() {
  let x = 13;
  a2(x);
}

function a2(x) {
  console.log('a2', x);
}

// a1();
// a2();

a1();
