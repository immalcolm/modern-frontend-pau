//08_04-find-average.js answer
/* 
Some reading reference
reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
let total = 0;
let input;
let numList = [];

do {
  input = parseFloat(prompt("Key in a value"));
  if (input != 0) {
    numList.push(input);
  }
} while (input !== 0);

numList.forEach((ele) => console.log(ele));
total = numList.reduce((prev, next) => prev + next, 0);
console.log(total / numList.length);