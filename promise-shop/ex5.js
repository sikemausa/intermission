let promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
});

promise.then(console.log, null);

console.log("MAIN PROGRAM");
