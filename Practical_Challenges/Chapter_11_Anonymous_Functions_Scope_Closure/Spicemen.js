let secret = "007";

function getSecretOne() {
  let secret = "008";

  function getvalue() {
    return secret;
  }
  return getValue();
}
//getSecretOne();

function getSecretTwo() {
  let secret = "008";

  function getValue() {
    return secret;
  }
  return getValue;
}
let getValueFun = getSecretTwo();
console.log(getValueFun());
