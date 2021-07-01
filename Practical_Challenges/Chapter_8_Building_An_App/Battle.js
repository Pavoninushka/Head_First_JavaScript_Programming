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

let ships = [{
  locations: ["31", "41", "51"],
  hits: ["", "", ""]
}, {
  locations: ["14", "24", "34"],
  hits: ["", "", ""]
}, {
  locations: ["00", "01", "02"],
  hits: ["", "", "hit"]
}];

let ship2 = ships[1];
let locations = ship2.locations;
console.log("Location is " + locations[1]);

let ship3 = ships[2];
let hits = ship3.hits;
if (hits[0] === "hit") {
  console.log("Ouch, hit on third ship at location one");
}

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