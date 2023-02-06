const person = {
  address: 'Address Mo',
};

console.log(person?.address);

const info = {
  title: 'Yes',
};

const user = {};

console.log(user?.address?.street);

const nullValue = 'abc';

const valA = nullValue ?? 'default value';

console.log(valA);
