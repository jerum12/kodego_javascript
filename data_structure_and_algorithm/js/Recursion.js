// class Recursion{
//     constructor(n){
//         this.n =
//     }
// }

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(4));

//1*2 = 2 *3 = 6 *4 = 24
