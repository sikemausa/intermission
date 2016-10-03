let promise = new Promise((fulfill, reject) => {
  fulfill("SUCCESS");
  reject("DEPLORABLE EFFORT!");
});

promise.catch((error) => {
  console.error(error.message);
});

let otherPromise = Promise.resolve("Right on!");
