//Function that returns function to add 2 numbers.
function addition(num) {
  //Returns function and the second argument is taken as parameter for this function.
  return function (num2) {
    return num + num2;
  };
}
//Call function which adds the 2 numbers. Because of closure the numbers can be used.
console.log(addition(5)(10));
