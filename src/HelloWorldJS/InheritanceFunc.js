//1. Add function based example of inheritance.
function Person(name) {
  this.name = name;
}
Person.prototype.singSong = function () {
  console.log(this.name + " starts singing");
};

function Sailor(name, sailorName) {
  Person.call(this, name);
  this.sailorName = this.sailorName;
}
Sailor.prototype.sailing = function () {
  console.log(
    this.name +
      "'s" +
      " sailorname is " +
      this.sailorName +
      " & he is sailing around the world!"
  );
};
Object.setPrototypeOf(Sailor.prototype, Person.prototype);

let kalle = new Sailor("kalle", "kovis");
kalle.singSong();
kalle.sailing();
