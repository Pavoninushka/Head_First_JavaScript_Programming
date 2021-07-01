let scores = [60, 50, 60, 58, 54, 54,
  58, 50, 52, 54, 48, 69,
  34, 55, 51, 52, 44, 51,
  69, 64, 66, 55, 52, 61,
  46, 31, 57, 52, 44, 18,
  41, 53, 55, 61, 51, 44
];

function printAndGerHighScore (scores) {
  let highestScore = 0;
  for (let i = 0; i < scores.length ; i++) {
    console.log("Bubble solution #" + i + " score: " + scores[i]);
    if (scores[i] > highestScore) {
      highestScore = scores[i];
    }
  }
  return highestScore
}

let highestScore = printAndGerHighScore(scores);
console.log("Bubbles tests " + scores.length);
console.log("Highest bubble score: " + highestScore);

function getBestResults (scores, highestScore) {
  let highestScores = [];
  for (let i = 0; i < scores.length; i ++) {
    if (scores[i] === highestScore) {
      highestScores.push(i);
    }
  }
  return highestScores;
}

let highestScores = getBestResults(scores, highestScore);
console.log("Solutions with highest score: #" + highestScores);


let products = ["Choo Choo Chocolate", "Ice Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];
let i = 0;

while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
  }
  i = i + 1;
}

let costs = [.25, .27, .25, .25, .25, .25,
  .33, .31, .25, .29, .27, .22,
  .31, .25, .25, .33, .21, .25,
  .25, .25, .28, .25, .24, .22,
  .20, .25, .30, .25, .24, .25,
  .25, .25, .27, .25, .26, .29
];

function getMostffectiveSolutions (scores, costs, highestScore) {
  let cost = 100;
  let index;

  for (let i = 0; i < scores.length; i++){
    if (scores[i] === highestScore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  } return index;
}

let mostCostEffective = getMostffectiveSolutions (scores, costs, highestScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");