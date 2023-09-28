// a variable is a container for storing data
// a variable behaves as the container that it contains

// different values has different data types
//two steps
// 1. decleration
// 2. Assignmet

let myName = "Andreas"; // strings
const age = 33; // number
let student = false; // boolean

//exempel på DOM
document.querySelector(".p1").innerHTML = "hello " + myName;

/** IF statement */
//Om villkoret är sant går den i i if-satsen annars else-satsen
if (myName == "Andreas") {
  console.log("Hej Andreas");
} else {
  console.log("Du är inte Andreas");
}

if (age > 35) {
  console.log("Ung i hjärtat");
} else if (age > 30 && age < 34) {
  console.log("Precis rätt ålder");
}

/** SWITCH / CASE */
const animal = "CAT";
switch (
  animal //Baserat på innehållet i variabeln animal går den i ett av nedanstående case
) {
  case "DOG":
    console.log("Voff");
    break;
  case "CAT":
    console.log("Mjau");
    break;
  default:
    console.log("Muu");
    break;
}
let year = "2019-10-14";
function takeOutYear(year) {
  let answer = year.substring(0, 4);
  console.log(answer);
}
takeOutYear(year);

function total(number1, number2, sign) {
  const total = eval(number1 + sign + number2);
  return total;
}
console.log(total(3, 4, "+"));
