//Function constructor to create a new person.
function Person(name) {
  this.name = name;
}
//Function for person to sing a song.
Person.prototype.singSong = function () {
  console.log(this.name + " starts singing");
};

function Sailor(name, sailorName) {
  Person.call(this, name);
  this.sailorName = sailorName;
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

let veikko = new Person("veikko");
veikko.singSong();
//won't work because veikko isn't a sailor
//veikko.sailing();
