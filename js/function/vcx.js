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
const pagination = (page = 1, limit = 25) => {
  console.log(page, limit);
};
pagination(undefined, 25);
// parametrized function
const fun = (a, b, c) => {
  return a + b + c;
};
// implicit function
const sum = (a, b) => a + b;
console.log(sum(2, 3));
// explicit function
const sums = (a, b) => {
  if (a > b) return a + b;
  return b + a;
};
// IIFEs( immediately invoked function expression)\
(function () {
  console.log("hello from devops");
  // nodejs install
  //git install
  //git hub application clone
  //npm install
})();
// closures

const getEnv = () => {
  const password = "password"; // hard coded value ( private variable)
  return password;
};
console.log(getEnv());
// callback function
// pure function

// write a default function to print ' welcome guest' if user name is not your name
const welcome = (name, role = "Guest") => {
  if (name === "upendra") return "Welcome Admin";
  return `Welcome ${role}`;
};
console.log(welcome("ram"));
// write a function to calculate simple interest based on the principal amount
// /**
//  * Calculates simple interest.
//  * @param {number} principal - The principal amount.
//  * @param {number} rate - The annual rate of interest in percentage.
//  * @param {number} time - The time the money is invested or borrowed for, in years.
//  * @returns {number} - The calculated simple interest.
//  */
// const calculateSimpleInterest = (principal, rate, time) => {
//   // Simple interest formula: SI = (P * R * T) / 100
//   return (principal * rate * time) / 100;
// };

// // Example usage:
// const principal = 1000; // Principal amount in currency units
// const rate = 5; // Annual rate of interest in percentage
// const time = 3; // Time in years

// const interest = calculateSimpleInterest(principal, rate, time);
// console.log(`The simple interest is: ${interest}`); // Output: The simple interest is: 150

// // write a default function to create the multiplication table of 5
// const multiplicationTableOf5 = () => {
//   const number = 5;
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// };

// multiplicationTableOf5();
// write a function to calculate compound interest using math function.
const CI = (p, r, t) => {
  const updateRate = r / 100;
  return Math.round(p * Math.pow(1 + updateRate, t) - p);
};

console.log(CI(10000, 10, 10)); // This will return the compound interest

// const CI = (p, r, t) => {
//   const updateRate = r / 100;
//   return Math.round(p * Math.pow(1 + updateRate, t));
// };

// console.log(CI(10000, 10, 10)); // This will return the total amount including the principal

// // /**
//  * Calculates compound interest.
//  * @param {number} principal - The principal amount.
//  * @param {number} rate - The annual interest rate in percentage.
//  * @param {number} time - The time the money is invested or borrowed for, in years.
//  * @param {number} n - The number of times that interest is compounded per unit time.
//  * @returns {number} - The calculated compound interest.
//  */
// const calculateCompoundInterest = (principal, rate, time, n) => {
//   // Convert rate from percentage to a decimal
//   const rateDecimal = rate / 100;

//   // Compound interest formula: A = P(1 + r/n)^(nt)
//   const amount = principal * Math.pow(1 + rateDecimal / n, n * time);

//   // Compound interest is the amount minus the principal
//   const interest = amount - principal;

//   return interest;
// };

// // Example usage:
// const principal = 1000; // Principal amount in currency units
// const rate = 5; // Annual rate of interest in percentage
// const time = 3; // Time in years
// const n = 4; // Number of times the interest is compounded per year

// const interest = calculateCompoundInterest(principal, rate, time, n);
// console.log(`The compound interest is: ${interest.toFixed(2)}`); // Output: The compound interest is: 161.22
//Function to Find the Greatest Common Divisor (GCD) of Two Numbers
const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

console.log(gcd(48, 18));
//Function to Calculate Fibonacci Sequence up to n Terms
const fibonacci = (n) => {
  const fibSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence.slice(0, n);
};

console.log(fibonacci(10));
// Function to Find the Intersection of Two Objects
const intersectObjects = (obj1, obj2) => {
  const intersection = {};
  for (let key in obj1) {
    if (
      obj1.hasOwnProperty(key) &&
      obj2.hasOwnProperty(key) &&
      obj1[key] === obj2[key]
    ) {
      intersection[key] = obj1[key];
    }
  }
  return intersection;
};

const objX = { a: 1, b: 2, c: 3 };
const objY = { a: 1, b: 4, d: 5 };
const intersection = intersectObjects(objX, objY);
console.log(intersection);
//Function to Remove a Property from an Object
const removeProperty = (obj, property) => {
  const { [property]: _, ...newObj } = obj;
  return newObj;
};

const person = { name: "Alice", age: 25, city: "New York" };
const updatedPerson = removeProperty(person, "age");
console.log(updatedPerson);
//Function to Group an Array of Objects by a Key
const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 25 },
  { name: "Eve", age: 21 },
];
const groupedByAge = groupBy(people, "age");
console.log(groupedByAge);
//Function to Compare Two Objects and Get Differences
const diffObjects = (obj1, obj2) => {
  const diffs = {};
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      diffs[key] = { obj1: obj1[key], obj2: obj2[key] };
    }
  }
  for (const key in obj2) {
    if (!(key in obj1)) {
      diffs[key] = { obj1: undefined, obj2: obj2[key] };
    }
  }
  return diffs;
};

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 3, d: 4 };
console.log(diffObjects(obj1, obj2));
// Function to Convert a Map to an Object
const mapToObject = (map) => {
  const obj = {};
  map.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};

// Example usage:
const exampleMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(mapToObject(exampleMap));
//Function to Deeply Compare Two Objects
const deepCompare = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 == null ||
    obj2 == null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

// Example usage:
const deepObj1 = { a: 1, b: { c: 3, d: 4 } };
const deepObj2 = { a: 1, b: { c: 3, d: 4 } };
const deepObj3 = { a: 1, b: { c: 3, d: 5 } };
console.log(deepCompare(deepObj1, deepObj2));
console.log(deepCompare(deepObj1, deepObj3));
