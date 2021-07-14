let tick = true;
function ticker() {
  if (tick) {
    console.log("Tick");
    tick = false;
  } else {
    console.log("Tock");
    tick = true;
  }
}
setInterval(ticker, 1000);