//basic-calculation
//we use the .value property to retrieve the textbox value

//Step 01: first get the textboxes
//what are the input fields identifiers?
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

//Step 02: sum the values
//arrow function
//get the textbox inputs values
//simple check whether it's a number
//evalue
const sum = () => {
    let box1Value = box1.value;
    let box2Value = box2.value;
    console.log(typeof(box1Value));
    //do some checks 
    if (isNaN(box1Value) ||  isNaN(box2Value)){
        console.log("I'm not a number");
        return;
    }

    //return numerical sum
    return parseFloat(box1Value) + parseFloat(box2Value);
}

//Step 03: setup our event listener
//what's our button id?
const calBtn = document.getElementById("calculateBtn");
calBtn.addEventListener("click", function(e){
    e.preventDefault(); //not necessary but good to place
    
    //Step 04: printout
    console.log(sum());
    alert(sum());
})

