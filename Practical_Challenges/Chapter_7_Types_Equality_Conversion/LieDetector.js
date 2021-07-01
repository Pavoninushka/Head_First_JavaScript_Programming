function lieDetectorTest() {
  let lies = 0;
  let stolenDiamond = {};
  if (stolenDiamond) {
    console.log("You stole the diamond");
    lies++
  }
  let car = {
    keysInPocket: null
  };
  if (car.keysInPocket) {
    console.log("Uh oh, guess you stole the car!");
    lies++
  }
  if (car.emptyGasTank) {
    console.log("You drive the car after you stole it");
    lies++;
  }
  let foundYouAtCrimeScene = [];
  if (foundYouAtCrimeScene) {
    console.log("A sure sign of guilt");
    lies++;
  }
  if (foundYouAtCrimeScene[0]) {
    console.log("Cought with a stolen item!");
    lies++;
  }
  let yourName = " ";
  if (yourName) {
    console.log("Guess you lied about your name");
    lies++;
  }
  return lies;
}
let numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
  console.log("Guilty as charged!");
}