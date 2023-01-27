class Person {
  constructor(fname, lname, age, address) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.address = address;
    this.fullName = function () {
      return this.fname + ' ' + this.lname;
    };
  }
}
