console.log("hello from function");

//es5

//function define
function sayHi(name) {
  console.log("hello", name);
}
function checkEven(number) {
  const result = number % 2; //logic
  if (result === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
function add(a, b, c) {
  console.log(a + b + c);
}
function subtraction(a, b) {
  const result = a - b;
  return result;
}
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}
//run
sayHi("upendra");
checkEven(13);
add(1, 4, 6);
const resp = subtraction(10, 7);
console.log(resp);
const mul = multiply(2, 6);
console.log(mul);

// write a function to find the area of square .
function saquareArea(length) {
  let area = length * length;
  return area;
}
let length = 8;
let area = saquareArea(length);
console.log(area);
// write a function to get fullname of person using parameter firstname, mid name and last name.
function getFullname(firstname, middlename, lastname) {
  if (middlename && lastname) {
    return firstname + " " + middlename + " " + lastname;
  } else if (lastname) {
    return firstname + " " + lastname;
  } else {
    return firstname;
  }
}

// Example usage
let firstname = "John";
let middlename = "Michael";
let lastname = "Doe";

let fullname = getFullname(firstname, middlename, lastname);
console.log(fullname); // Output: "John Michael Doe"

fullname = getFullname("Jane", null, "Doe");
console.log(fullname); // Output: "Jane Doe"

fullname = getFullname("Alice");
console.log(fullname); // Output: "Alice"
// options1
// function fullname (fname,mname,lname){
// const res= fname +" " + mname + " " + lname;
// return res;
// option 2

//const res= '${fname} ${mname} ${lname}';
//return res;
// option3
//const res= fname.concat(" ",mname, " ", lname);
// return res;

// string protyope
// concat, includes,chartat, indexof, replace, replaceall,
// touppercase, to lowercase, substring,split,slice
//  write a function that converts word to uppercase word.
// function upperCase(word) {
//   return word.toUpperCase();
// }
// console.log(upperCase("upendra"));
//ES6(arrow function)
//syntax: const variableNmae= ( a,b,c,d,e,f)=>{}
const upperCase = (word) => {
  return word.toUpperCase();
};
const response = upperCase("upendra");
console.log(response);
// functions
// anonymous function
const ex = function () {
  console.log("hello brother");
};
ex();
// inline function
const exs = function () {
  console.log("hello brother");
};
// default function
const pagination = (page = 1, limit) => {
  console.log(page, limit);
};
pagination(5);
// parametrized function
// implicit function
// explicit function
// IIFEs
// closures
// callback function
// pure function
