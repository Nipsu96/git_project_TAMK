//Constructor class to create a new object with a name.
class Person {
  constructor(name) {
    this.name = name;
  }
  //Function for object to log message for singing.
  singSong() {
    console.log(this.name + " starts singing");
  }
}
//Sailor constructor which extends Sailor class.
//Creates sailorName variable for the class.
class Sailor extends Person {
  constructor(name, sailorName) {
    super(name);
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
keijo.singSong();
