function fun(echo) {
  console.log(echo);
}

fun("hello");

function boo(aFunction) {
  aFunction("boo");
}

boo(fun);

console.log(fun);

fun(boo);

let moreFun = fun;
moreFun("hello again");

function echoMarket() {
  return fun;
}

let bigFun = echoMarket();
bigFun("Is there an echo?");