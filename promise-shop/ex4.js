let promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

let onRejected = (error) => console.log(error);

promise.then(onRejected, onRejected);
