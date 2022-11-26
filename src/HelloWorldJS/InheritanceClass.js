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
    super.name = name;
    this.sailorName = sailorName;
  }
  sailing() {
    console.log(
      this.name +
        "'s" +
        " sailorname is " +
        this.sailorName +
        " & he is sailing around the world!"
    );
  }
}
let keijo = new Sailor("keijo", "mustaparta");
keijo.sailing();
