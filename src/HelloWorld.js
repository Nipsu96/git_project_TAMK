//This is going to be Hello World -printer!

async function delayedHello() {
  await setTimeout(() => console.log(hello), 1000);
}
function loopHello() {
  var hello = "Hello World";
  for (let i = 0; i < 10; i++) {
    console.log(hello);
  }
}
