let oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [2, 4, 6, 8];

const arr = [...oddNumbers, ...evenNumbers];

//console.log(arr);

let origArray = ['a', 'b', 'c'];
let newArray = origArray;
let newArray2 = [...origArray];

//newArray.push('d');
newArray2.push('d');

//console.log('origArray', origArray);
//console.log('newArray2', newArray2);

let a = [1, 2, 3, 4, 5];

//console.log(Math.max(...a));

let b = [1, 2, 3, 4, 5];

let [firstArgu, secondArgu, thirdArgu, ...others] = b;

console.log(firstArgu);
console.log(secondArgu);
console.log(thirdArgu);
console.log(others);

let person = {
  name: 'Jay',
  age: 25,
  address: 'Bulacan',
};

const { name, age, address } = person;

console.log(person.name);
console.log(name);
console.log(age);
console.log(address);
