//Waits 1sec, returns promise-object with hello
async function delayedHello() {
  await setTimeout(() => console.log(hello), 1000);
}
//Prints out "Hello World", 5 times with a loop
function loopHello() {
  var hello = "Hello World";
  for (let i = 0; i < 5; i++) {
    console.log(hello);
  }
}

loopHello();
delayedHello();
