class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(newRadius) {
    if (newRadius > 0) {
      this._radius = newRadius;
    } else {
      throw new Error("radius must be > 0");
    }
  }
  static max(array) {
    // Sort to order values from lowest to highest.
    // Arrow func compares each value in array against each other.
    // If return value is negative, a comes before b.
    // If return value is positive, b comes before a.
    console.log(array);

    array.sort((a, b) => b.radius - a.radius);

    // Return highest element in array.
    return array[0];
  }
}

// Sets radius for all circles
let a = new Circle(25);
let b = new Circle(40);
let c = new Circle(50);
let d = new Circle(80);
let e = new Circle(1000);

// Changes radius, uses setter
c.radius = 30;

// Returns radius, uses getter
console.log(c.radius);

// Stores largest Circle to variable
let largest = Circle.max([a, b, c, d, e]);

// Print the biggest radius
console.log(largest);
// c.radius = -70; // crashes app, radius must be > 0
