//Waits 1sec, returns promise-object with hello
async function delayedHello(hello) {
  this.hello = hello;
  const p = await setTimeout(() => console.log(hello), 1000);
  return p;
}
//Prints out "Hello World", 5 times with a loop
function loopHello(times) {
  function asyncHello(resolve, reject) {
    for (let i = 0; i < times; i++) {
      console.log(hello);
    }
    resolve(hello);
  }

  let hello = "Hello World!";
  const p = new Promise(asyncHello);
  return p;
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
// Declares num1 and num2 used in main()
async function getNum() {
  let num1 = 12;
  let num2 = 2;
  return [num1, num2];
}

//Parameter a, b are passed to makeCalculations which divides the numbers.
//Wait for the calculation to finish and send the result to loopHello(), which uses it to determine how many times to loop.
async function main() {
  const num = await getNum();
  const result = await makeCalculation(num[0], num[1]);
  const p = await loopHello(result);
  return p;
}

main().then((msg) => delayedHello(msg));

//1. .then call delayedHello
