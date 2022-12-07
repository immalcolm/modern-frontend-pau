//we can easily out an array 
//ugly with no html 
let fruits = ["apples", "oranges","durian"]
console.log(fruits)
//apples,oranges, durian

//list rendering with JSX
//[Understanding JSX]
//1. JSX element is an JS object
//2. JS object, like any values can be stored in an array
// - in JS, arrays can store anything. like rojak
//3. An array of JSX elements will be rendered in sequence
let jsx = [<p>A</p>, <p>B</p>, <p>C</p>];
let fruits2 = [
    <li>apples</li>,
    <li>durian</li>,
    <li>oranges</li>
]

//we can write JSX anywhere
//Scenario 1: converting fruits array into JSX based on a loop
for(let f of fruits){
    jsx.push(<li>{f}</li>)
}


//Scenario 2: using map function
//map allows us to apply a standarized way of doing 
//lets recall about map function
//Goal is to have an array but change to uppercase
//the .map method on the array will return a copy of the original 
//behind the scenes it transforms each element one by one like a for loop
let names = ["Dewi", "Kai", "Wei Jie", "Nicholas"];

//map
let result = names.map(function(item){
    //whatever that is return --> it will make it uppercase and put it back resultant array
    //takes the item -> process with uppercase -> put it into the transformed array
    return item.toUpperCase();
})

let jsx2 = fruits.map(f=><li>{f}</li>)


return (
    <div>
        <ul>
            {fruits.map(f=><li>{f}</li>)}       
        </ul>
    </div>
)