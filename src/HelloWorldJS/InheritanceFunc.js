//Constructor to create a new person.
function Person(name) {
  this.name = name;
}
//Function for person to sing a song.
Person.prototype.singSong = function () {
  console.log(this.name + " starts singing");
};
//Constructor to create a new Sailor - which is a child for Person object.
function Sailor(name, sailorName) {
  Person.call(this, name);
  this.sailorName = sailorName;
}
//Function for sailor to tell it's sailor name and start sailing.
Sailor.prototype.sailing = function () {
  console.log(
    this.name +
      "'s" +
      " sailorname is " +
      this.sailorName +
      " & he is sailing around the world!"
  );
};
//Assigns inheritance for sailor.prototype from person.prototype.
Object.setPrototypeOf(Sailor.prototype, Person.prototype);

let kalle = new Sailor("kalle", "kovis");
kalle.singSong();
kalle.sailing();

let veikko = new Person("veikko");
veikko.singSong();
//won't work because veikko isn't a sailor
//veikko.sailing();
