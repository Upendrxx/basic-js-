//function declare

function userLogin(name, password) {
  if (name === "upendra" && password === "password")
    console.log("welcome Admin");
  console.log("welcome guest");
}
userLogin("upendra", "password");
userLogin("ram", "password");
// write a javascript function to find the first not repeated character
//sample arguments: 'abacddbec' expected output:'e'
// const checkRep = (input) => {
//   const re = input.split("");
//   const d = re.split;
//steps
// input pass parameter to the function
// check the string length
// break the string into individual pieces (.split(''))
// use for loop to checkk each pieces 9 times
// intial count to 0; const count =0;
// update the count if the character is found in the string
//if count<2 return the character
// };
function firstNonRepeatedCharacter(str) {
  // Check if the string length is 0
  if (str.length === 0) {
    return null; // No characters to check
  }

  // Break the string into individual characters
  const characters = str.split("");

  // Use a loop to check each character
  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    let count = 0;

    // Check the character 9 times (or once for each character in the string)
    for (let j = 0; j < characters.length; j++) {
      if (char === characters[j]) {
        count++;
      }
    }

    // If count is less than 2, return the character
    if (count < 2) {
      return char;
    }
  }

  return null; // Return null if no non-repeated character is found
}

// Example usage:
const result = firstNonRepeatedCharacter("abacddbec");
console.log(result); // Output: 'e'
//Function to Merge Two Objects
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = mergeObjects(obj1, obj2);
console.log(merged);
//Function to Check if Two Objects are Equal
const isEqual = (firstObject, secondObject) => {
  if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
    return false;
  }
  for (const key in firstObject) {
    if (firstObject[key] !== secondObject[key]) {
      return false;
    }
  }
  return true;
};

const objectOne = { a: 1, b: 2 };
const objectTwo = { a: 1, b: 2 };
const objectThree = { a: 1, b: 3 };
console.log(isEqual(objectOne, objectTwo));
console.log(isEqual(objectOne, objectThree));
