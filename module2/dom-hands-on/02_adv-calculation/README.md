# Instructions

This is a more advanced calculator. Now the user can choose via the radio buttons whether to add, multiply, divide or subtract. Add more code such that when the user clicks on the calculate button, the code will alert the result of the selected operation.

## Steps

**EVENT:** 
Add event listener to the button. The rest of the steps take place inside the function for the event listener

**INPUT:**
- Extract out the number of the first text box
- Extract out the number of the second text box
- Extract out the selected radio button:
- Use querySelectorAll to select all the radio buttons
- Use a `for` loop to determine which one is selected. Do not use any shortcuts (such as using pseudo-selectors)
- use the `if` to determine if a given radio button is checked
- Once the radio button that is checked is found, store its value in a variable.

- **PROCESSING** the calculation (hint: you need a if)

- **OUTPUT** use `alert` to display the answer.

## References

To extract the which radio button is selected, use the following snippet.

**Given:**
```
<input type="radio" name="fruits" class="fruits" value="apples"/><label>Apples</label>
<input type="radio" name="fruits" class="fruits" value="bananas"/><label>Bananas</label>
<input type="radio" name="fruits" class="fruits" value="cherries"/><label>Cherries</label>
```

To extract out the selected radio button, you can:
```
let fruitRadioButtonElements = document.querySelectorAll(".fruits");
let selectedFruit = "";
for (let rb of fruitRadioButtonElements) {
  if (rb.checked) {
    selectedFruit = rb.value;
  }
}
console.log("Selected fruit =", selectedFruit);
```