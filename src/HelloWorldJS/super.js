//Parent class with static method.
class Rectangle {
  static getDescription() {
    return "I have 4 sides";
  }
}

class Square extends Rectangle {
  static getDescription() {
    return super.getDescription() + " which are all equal";
  }
}
console.log(Square.getDescription());
