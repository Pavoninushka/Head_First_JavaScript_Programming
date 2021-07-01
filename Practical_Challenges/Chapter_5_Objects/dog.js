let fido = {
  name: "Fido",
  weight: 20.2,
  age: 4,
  breed: "mixed",
  activity: "fetch balls"
};

let bark;
if (fido.weight > 20) {
  bark = "WOOF WOOF";
} else {
  bark = "woof woof";
}
let speak = fido.name + " says " + bark + " when he wants to " + fido.activity;
console.log(speak);

function loseWeight(dog, amount) {
  dog.weight = dog.weight - amount;
}

loseWeight(fido, 10);
console.log(fido.name + " now weighs " + fido.weight);
