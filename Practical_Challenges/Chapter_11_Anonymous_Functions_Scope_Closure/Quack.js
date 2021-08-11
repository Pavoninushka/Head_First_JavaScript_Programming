let migrating = true;

let fly = function(num) {
  let sound = "Flying";
  function wingFlapper() {
    console.log(sound);
  }
  for (let i = 0; i < num; i++) {
    wingFlapper();
  }
}

function quack(num) {
  let sound = "Quack";
  let quacker = function() {
    console.log(sound);
  };
  for (let i = 0; i < num; i++) {
    quacker();
  }
}

if(migrating) {
  quack(4);
  fly(4);
}