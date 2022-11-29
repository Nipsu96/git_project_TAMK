//Parent object with static method.
class Rectangle {
  static getDescription() {
    return "I have 4 sides";
  }
}
//Child object which calls the static method of the parent with super.
class Square extends Rectangle {
  static getDescription() {
    return super.getDescription() + " which are all equal";
  }
}
//Calls getDescription via Square which is child to Rectangle
//Both functions need to be static for this to work.
console.log(Square.getDescription());
