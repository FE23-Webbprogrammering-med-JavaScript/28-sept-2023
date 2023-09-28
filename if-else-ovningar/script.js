/** Biggest */

let numberOne = 100;
let numberTwo = 1000;

if (numberOne > numberTwo) {
  console.log(`${numberOne} är störst!`);
} else {
  console.log(`${numberTwo} är störst!`);
}

/** Even or not */

let number = 4;

if (number % 2 == 0) {
  console.log(`${number} är ett jämnt tal`);
} else {
  console.log(`${number} är inte ett jämnt tal`);
}

/** Liserbergsvakten */

let height = 150;

// >= Större än eller lika med
if (height >= 150) {
  console.log("Du får åka Helix!");
} else {
  console.log("Du får ej åka Helix!");
}

/** Liserbergsvakten 2*/

let ticket = "platinum";

if (ticket == "small" || ticket == "medium") {
  console.log("No Balder for you!");
} else if (ticket == "large" || ticket == "platinum") {
  console.log("Balder is for you!");
}

/** BMI kalkylator */

let personHeight = 1.9;
let weight = 90;

const bmi = weight / (personHeight * personHeight);

console.log(`BMI: ${bmi}`);

if (bmi < 18.5) {
  console.log("Undervikt");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("Normalvikt");
} else if (bmi >= 25 && bmi < 30) {
  console.log("Övervikt");
} else if (bmi >= 30) {
  console.log("Fetma");
}

/** Switch weekdays */

const weekday = 5;

switch (weekday) {
  case 1:
    console.log("Måndag");
    break;
  case 2:
    console.log("Tisdag");
    break;
  case 3:
    console.log("Untzdag");
    break;
  case 4:
    console.log("Torsdag");
    break;
  case 5:
    console.log("Fredag");
    break;
  case 6:
    console.log("Lördag");
    break;
  case 7:
    console.log("Söndag");
    break;
  default:
    console.log("Invalid number");
    break;
}
// fibonacci
function fibonacci(number) {
  if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("buzz");
  }
}
