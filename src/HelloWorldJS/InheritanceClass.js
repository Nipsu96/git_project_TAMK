//Constructor class to create a new object with a name.
class Person {
  constructor(name) {
    this.name = name;
  }
  //Function for object to log message for singing.
  static singSong() {
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
  //Function to log message with Person name, sailorName and messages.
  sailing() {
    console.log(
      this.name +
        "'s" +
        " sailorname is " +
        this.sailorName +
        " & he is sailing around the world!"
    );
  }
  static singSong() {
    return super.singSong() + "sailorsssss";
  }
}
//Variable which is created with Sailor constructor and given name + sailorName.
let keijo = new Sailor("keijo", "mustaparta");
//Function calls to test out program functionality.
keijo.sailing();
keijo.singSong();
