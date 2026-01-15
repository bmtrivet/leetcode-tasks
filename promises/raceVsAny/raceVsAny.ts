const promises = [
  //requestAnimationFrame not exist in node js env
  new Promise((resolve, reject) => setTimeout(reject, 0)),
  new Promise((resolve, reject) => setTimeout(resolve, 100)),
];

Promise.race(promises).then(console.log.bind(console, "race")); //Uncaught (in promise)
/// vs
Promise.any(promises).then(console.log.bind(console, "any")); //any undefined
