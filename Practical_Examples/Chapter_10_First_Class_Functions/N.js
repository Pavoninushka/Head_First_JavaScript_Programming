function addN(n) {
  let adder = function(x) {
    return n + x;
  };
  return adder;
}


console.log(addN(1)(2));
