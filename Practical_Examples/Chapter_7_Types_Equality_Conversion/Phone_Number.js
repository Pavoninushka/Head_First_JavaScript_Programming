function validate(phoneNumber) {
  if (phoneNumber.length > 8 || phoneNumber.length < 7)
    return false;

let first = phoneNumber.substring(0,3);
let second = phoneNumber.substring(phoneNumber.length - 4);

if (isNaN(first) || isNaN(second)) {
  return false;
}
if (phoneNumber.length === 8) {
  return (phoneNumber.charAt(3) === "-");
}
return true;
}

console.log(validate("111-2543"));