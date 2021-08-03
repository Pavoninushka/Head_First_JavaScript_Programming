function compareNumbersAsc(num1, num2) {
  return num1 - num2;
}

function compareNumbersDsc(num1, num2) {
  return num2 - num1;
}

let numbersArray = [60, 50, 62, 58, 54, 54];
numbersArray.sort(compareNumbersAsc);
console.log(numbersArray);

numbersArray.sort(compareNumbersDsc);
console.log(numbersArray);