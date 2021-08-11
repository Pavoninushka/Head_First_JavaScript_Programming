function makePassword(password) {
  return function (passwordGuess) {
    return (passwordGuess === password);
  };
}

console.log(makePassword("gala")( "gala"));

function multN(n) {
  return function multBy (m) {
    return n * m;
  };
}

let multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));

function makeCounter() {
  let count = 0;

  return {
    increment : function () {
      count++
      return count;
    }
  }
}

let counter = makeCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());