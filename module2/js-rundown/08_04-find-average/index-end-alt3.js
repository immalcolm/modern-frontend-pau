//@author Lina
let num = Number(prompt());
let total = 0;
let count = 0;

while(num > 0){
  console.log(num);
  total += num;
  if(num != 0){
      count ++;
  }
  num = Number(prompt());
}

console.log(total / count);