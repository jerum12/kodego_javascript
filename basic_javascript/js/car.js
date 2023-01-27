class Car {
  constructor(name, type, engine) {
    this.name = name;
    this.type = type;
    this.engine = engine;
  }

  getInformation() {
    console.log('Name: ' + this.name + ' Type:' + this.type + ' Engine:' + this.engine);
  }
}
