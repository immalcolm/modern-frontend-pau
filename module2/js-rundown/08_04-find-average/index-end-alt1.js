//@author Dewi
let isZero = false;

let numArray = [];

while (!isZero) {
  let userInput = parseFloat(prompt("Enter a number: "));

  if (userInput == 0) {
    isZero = true;
  }
  else {
    numArray.push(userInput);
  }
}

const sum = numArray.reduce((prev, next) => prev + next);

let average = sum / numArray.length;

numArray.forEach(num => console.log(num))
console.log(average);