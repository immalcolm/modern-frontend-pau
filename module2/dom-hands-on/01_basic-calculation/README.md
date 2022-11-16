# Instructions

There are two textboxes. After the user types in two numbers in the two textboxes, they will click on the **Calculate** button.

Using the alert function, display the sum of the two.

**Steps**
1. Extract out the value from the first textbox
2. Extract out the value from the second textbox
3. Use alert to display the sum

## Reference:

**Given:**

```html
<input type="text" id="firstName"/>
```

To extract what the user type into the textbox:

```javascript
let firstNameElement = document.querySelector("#firstName");
let firstName = firstNameElement.value;

let firstNameElement = document.getElementById("firstName");
```
