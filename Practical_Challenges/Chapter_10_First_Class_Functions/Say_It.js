function sayIt(translator) {
  let phrase = translator("Hello");
  console.log(phrase);
}

function hawaiianTranslator(word) {
  if (word === "Hello") return "Aloha";
  if (word === "Goodbye") return "Aloha";
}

sayIt(hawaiianTranslator);
