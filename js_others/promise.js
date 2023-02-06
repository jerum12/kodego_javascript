const myPromise = new Promise((resolve, reject) => {
  setTimeout(randomOnly(resolve, reject), 5000);
});

function randomOnly(resolve, reject) {
  let r = Math.random();
  console.log(r);
  if (r > 0.2) {
    resolve('The operation was successful');
  } else {
    reject('The operation failed');
  }
}

myPromise
  .then((result) => {
    console.log('result', result);
  })
  .catch((error) => {
    console.log('error', error);
  });
