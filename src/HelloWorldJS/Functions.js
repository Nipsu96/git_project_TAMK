//function that returns function to add 2 numbers
function addition(num) {
  return function (num2) {
    return num + num2;
  };
}
//Call function which adds the 2 numbers
console.log(addition(10)(10));
