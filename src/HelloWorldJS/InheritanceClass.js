//1. Add class based example of inheritance
class Person {
  constructor(name) {
    this.name = name;
  }
  singSong() {
    console.log(this.name + " starts singing");
  }
}
class Sailor extends Person {
  constructor(name, sailorName) {
    this.name = super.name;
    this.sailorName = sailorName;
  }
  sailing() {}
}
