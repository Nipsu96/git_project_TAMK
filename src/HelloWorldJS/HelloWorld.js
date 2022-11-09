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
async function math(a, b) {
  const result = await makeCalculation(a, b);
  const p = await loopHello(result);
  return p;
}
math();

//1. Use times-parameter in loopHello
//2. Call math()
//3. Utilise delayedLoopHello()
//4. ???
//5. Profit
