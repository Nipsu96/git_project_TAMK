//Waits 1sec, returns promise-object with hello
async function delayedHello(hello) {
  this.hello = hello;
  await setTimeout(() => console.log(hello), 1000);
}
//Prints out "Hello World", 5 times with a loop
async function loopHello(times) {
  let hello = "Hello World!";
  for (let i = 0; i < times; i++) {
    console.log(hello);
  }
}

//Takes a & b as arguments, divides a / b and returns promise with quotient
function makeCalculation(a, b) {
  function asyncFunc(resolve, reject) {
    if (b === 0) {
      reject("Cannot divide with zero");
    } else {
      setTimeout(() => {
        console.log("Calculating...");
        const division = a / b;
        resolve(division);
      }, 1000);
    }
  }
  const p = new Promise(asyncFunc);
  return p;
}
//Parameter a, b are passed to makeCalculations which divides the numbers.
//Wait for the calculation to finish and send the result to loopHello(), which uses it to determine how many times to loop.
async function main() {
  const num = await getNum();
  const result = await makeCalculation(num[0], num[1]);
  const p = await loopHello(result);
  return p;
}
async function getNum() {
  let num1 = 2,
    num2 = 6;
  return [num1, num2];
}

math();

//2. Do getNum function
//3. Move every function call inside main-function
//4. .then call delayedHello
