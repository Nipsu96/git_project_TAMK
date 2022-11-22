//function that returns function to add 2 numbers
function addition(num) {
  return function (num2) {};
}
let add5 = addition(5);
let add10 = addition(10);
//Call function which adds the 2 numbers
console.log(add10(10));
