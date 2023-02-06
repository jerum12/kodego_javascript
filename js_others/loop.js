const n = [1, 2, 3, 4, 5];

for (let a = 0; a < n.length; a++) {
  console.log(n[a]);
}

const person = {
  name: 'Tims',
  age: 20,
  city: 'Quezon City',
};

for (let i in person) {
  console.log(person[i]);
}

var abc = [
  { name: 'Custer', age: 30 },
  { name: 'Cyan', age: 12 },
  { name: 'Abner', age: 18 },
];

for (let a of abc) {
  console.log(a.name);
}

for (let i of n) {
  console.log(i);
}

let count = 1;
while (count <= 5) {
  console.log('while loop', count);
  count++;
}

let c = 1;
do {
  console.log('do while', c);
} while (count < 5);
