function attachTitle(arg) {
    return "DR. " + arg;
}

let promise = new Promise((fulfill) => {
  fulfill("MANHATTAN");
});

promise.then(attachTitle).then(console.log);
