function bark (name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says wof woof");
  }
}

bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);

function doIt(param) {
  param = 2;
}
let test = 1;
doIt(test);
console.log(test);

function calculateArea(r) {
  let area;
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
}

let radius = 5.2;
let theArea = calculateArea(radius);
console.log("The area is: " + theArea);

let avatar = "generic";
let skill = 1.0;
let pointsPerLevel = 1000;
let userPoints = 2008;

function getAvatar(points) {
  let level = points / pointsPerLevel;

  if (level == 0) {
    return "Teddy bear";
  } else if (level == 1) {
    return "cat";
  } else if (level >=2) {
    return "Gorilla";
  }
}

function updatePoints(bonus, newPoints) {
  let i = 0;
  while (i < bonus) {
    newPoints = newPoints + skill * bonus;
    i = i + 1;
  }
  return newPoints + userPoints;
}

userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);
console.log(userPoints);
console.log(avatar);

// arguments: width, height, radius, x, y, centerX, centerY, "Area: " + area, "Distance: " + distance
// parameters: width, height, x1, y1, x2, y2, r
// locals: centerX, centerY, dx, dy, d2, d, area
// globals: x, y, radius, centerX, centerY, width, height, area, distance,

function clunk(times) {
  let num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}

function thingmajig(size) {
  let facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display ("clank");
  } else if (size == 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}

function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}

let clunkCounter = 0;
thingmajig(0);
console.log(clunkCounter);

// argument, return, function , parameter, pass - by - value , global var, function call,
// Math.Random, built - in functions, code reuse, scope, local variable