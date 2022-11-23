//1. Add function based example of inheritance.
function Person(name) {
  this.name = name;
}
Person.prototype.singSong = function () {
  console.log(this.name + "starts singing");
};
