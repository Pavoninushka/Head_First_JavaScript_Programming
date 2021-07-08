let view = {
  displayMessage: function(msg) {
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
}

let model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [{
    locations: ["0", "0", "0"],
    hits: ["", "", ""]
  }, {
    locations: ["0", "0", "0"],
    hits: ["", "", ""]
  }, {
    locations: ["0", "0", "0"],
    hits: ["", "", ""]
  }],

  generateShipLocations: function () {
    let locations;
    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },
  collision: function (locations) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
  return false;
},

  generateShip: function() {
    let direction = Math.floor(Math.random() * 2);
    let row;
    let col;
    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize) - (this.shipLength + 1));
    } else {
      row = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)));
      col = Math.floor(Math.random() * this.boardSize);
    }

    let newShipLocations = [];
    for (let i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push((row + i) + "" + col);
      }
    }
    return newShipLocations;
    },

  fire : function (guess) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
      let index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT");
        if (this.isSunk(ship)) {
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed.")
    return false;
  },

  isSunk: function(ship) {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  }
};

let controller = {
  guesses: 0,

  processGuess: function (guess) {
    let location = parseGuess(guess);
    if (location) {
      this.guesses++;
      let hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage("You sank all the battleships, in " + this.guesses + " guesses");
      }
    }
  }
}

function parseGuess (guess) {
  let alphabet = ["A", "B", "C", "D", "E", "F", "G"]
  if (guess === null || guess.length !== 2) {
    alert("Oops, please enter a letter and a number on the board.")
  } else {
    let firstChar = guess.charAt(0);
    let row = alphabet.indexOf(firstChar);
    let column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("Oops, that isn't on the board.");
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      alert("Oops, that's off the board!");
    } else {
      return row + column;
    }
  }
  return null;
}

function init() {
  let fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  let guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();
}

function handleKeyPress(e) {
  let fireButton = document.getElementById("fireButton");
  if(e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

function handleFireButton() {
  let guessInput = document.getElementById("guessInput");
  let guess = guessInput.value;
  controller.processGuess(guess);

  guessInput.value = "";
}
window.onload = init;

// controller.processGuess("A0");
//
// controller.processGuess("A6");
// controller.processGuess("B6");
// controller.processGuess("C6");
//
// controller.processGuess("C4");
// controller.processGuess("D4");
// controller.processGuess("E4");
//
// controller.processGuess("B0");
// controller.processGuess("B1");
// controller.processGuess("B2");

// console.log(parseGuess("A0"));
// console.log(parseGuess("B6"));
// console.log(parseGuess("G3"));
// console.log(parseGuess("H0"));
// console.log(parseGuess("A7"));

// model.fire("53");
//
// model.fire("06");
// model.fire("16");
// model.fire("26");
//
// model.fire("34");
// model.fire("24");
// model.fire("44");
//
// model.fire("12");
// model.fire("11");
// model.fire("10");

//
// let ships = [{
//   locations: ["31", "41", "51"],
//   hits: ["", "", ""]
// }, {
//   locations: ["14", "24", "34"],
//   hits: ["", "", ""]
// }, {
//   locations: ["00", "01", "02"],
//   hits: ["", "", "hit"]
// }];
//
// let ship2 = ships[1];
// let locations = ship2.locations;
// console.log("Location is " + locations[1]);
//
// let ship3 = ships[2];
// let hits = ship3.hits;
// if (hits[0] === "hit") {
//   console.log("Ouch, hit on third ship at location one");
// }

// let ship1 = ships[0];
// let hits = ship1.hits;
// hits[2] = "hit";

// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");

// view.displayMessage("Tap Tap, is this thing on?");