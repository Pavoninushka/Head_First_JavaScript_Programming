let passengers = [
  {name: "Jane Doloop", paid: true, ticket: "coach"},
  {name: "Dr. Evel", paid: true, ticket: "premium"},
  {name: "Sue Property", paid: false, ticket: "premium"},
  {name: "John Funcall", paid: true, ticket: "coach"},
  {name: "Pavel Karateev", paid: true, ticket: "firstclass"},
  {name: "Svetlana Karateeva", paid: true, ticket: "firstclass"},
  {name: "Yurij Karateev", paid: true, ticket: "firstclass"}
]

function processPassengers(passengers, testFunction) {
  for (let i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return passenger.name === "Dr. Evel";
}

function checkNotPaid(passenger) {
  return !passenger.paid;
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log("The plane can't take off: we have a passenger on the no-flu list.");
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
}

function printPassenger(passenger) {
  if (passenger.paid) return console.log(passenger.name + " paid.")
  else return console.log(passenger.name + " didn't paid.")
}

processPassengers(passengers, printPassenger);

function createDrinkOrder(passenger) {
  let orderFunction;
  if (passenger.ticket === "firstclass") {
    orderFunction = function() {
    alert("Would you like a cocktail or wine?");
  };
  } else if (passenger.ticket === "coach") {
    orderFunction = function() {
    alert("Your choice is cola or water.");
  };
  } else {
    orderFunction = function() {
      alert("Would you like wine, cola or water?");
  };
  }
  return orderFunction;
}

function createDinnerOrder(passenger) {
  let orderFunction;
  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      alert("Would you like chicken or Pasta?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function() {
    alert("Would you like snack box or cheese plate?")
    };
  } else {
    orderFunction = function () {
      alert("Would you like peanuts or pretzels?")
    };
  }
  return orderFunction;
}

function serveCustomer(passenger) {
  let getDrinkOrderFunction = createDrinkOrder(passenger);
  let getDinnerOrderFunction = createDinnerOrder(passenger);
  getDrinkOrderFunction();
  getDinnerOrderFunction();
  getDrinkOrderFunction();
  getDrinkOrderFunction();

  getDrinkOrderFunction();
}

function servePassengers(passengers) {
  for (let i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i])
  }
}

servePassengers(passengers);