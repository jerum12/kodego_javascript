const greeting = 'hello world';

function sayHello() {
  return "<div class='header'> This is My Header</div>";
}

function sayHello2() {
  console.log(greeting + '2');
}

function sayHello3() {
  console.log(greeting + '3');
}

export { sayHello, sayHello2, sayHello3 };
