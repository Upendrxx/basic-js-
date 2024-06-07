console.log("hello upendra");
//const year = Number(prompt("What is your birth year?"));
//const age = 2024 - year;
//console.log(age);
//const name = prompt("What is your name?");
//name === "upendra" ? alert("Welcome admin") : alert("Welcome guest");
const day = prompt("What is the day today?").toLowerCase(); // Convert to lowercase for case-insensitive comparison

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("Weekday");
    break;
  case "saturday":
  case "sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}
