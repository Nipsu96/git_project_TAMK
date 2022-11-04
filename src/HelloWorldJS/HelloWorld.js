//Waits 1sec, returns promise-object with hello
async function delayedHello(hello) {
  this.hello = hello;
  await setTimeout(() => console.log(hello), 1000);
}
//Prints out "Hello World", 5 times with a loop
function loopHello(hello) {
  for (let i = 0; i < 5; i++) {
    console.log(hello);
  }
}

let hello = "Hello World";
loopHello(hello);
delayedHello(hello);
