function sum() {
  let result = 0;

  for (let x of arguments) {
    result += x;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5));

function sum2(...n) {
  let result = 0;

  for (let x of n) {
    result += x;
  }

  return result;
}

console.log(sum2(1, 2, 3));

function sum3(xInput, yInput, ...anyVariable) {
  console.log(xInput);
  console.log(yInput);
  console.log(anyVariable);
}

sum3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
