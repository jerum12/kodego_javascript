function personDetails(name, status, age) {
  return {
    name,
    status,
    age,
  };
}

console.log(personDetails('Jay', 'Single', 30));

let name = {
  tiile: 'Title',
  restart() {
    console.log('This is my title:' + this.tiile);
  },
};

console.log(name.title);
console.log(name['title']);
