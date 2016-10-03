let promise = new Promise((fulfill, reject) => {
  setTimeout(() => reject(new Error('REJECTED!')), 300 );
});

let onReject = (error) => console.log(error.message);

promise.then(null, onReject);
