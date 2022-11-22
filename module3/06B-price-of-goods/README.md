# Instructions
Consider the checkboxes below:
```html
<input type="checkbox" name="items" value="durian"/><label>Durian<label>
<input type="checkbox" name="items" value="apple"/><label>Apple<label>
<input type="checkbox" name="items" value="orange"/><label>Orange<label>
<input type="checkbox" name="items" value="banana"/><label>Banana<label>
```

## Tasks
- In the `GET` `/fruits` route, Display the checkboxes in the fruits.hbs file as part of a form (you have to write the form yourself. 
**IMPORTANT**: Make sure the method of the form is `POST`).

- In the `POST` `/fruits` route, which will recieve the form, calculate the total cost of all selected fruits. The cost for each respective fruit is as below:

| Fruit | Cost |
| :---  | :--- |
|Apple	|3|
|Durian	|15|
|Orange	|6|
|Banana	|4|

Both the `GET` fruits and `POST` fruits routes has been created for you in `index.js`. You just have to fill them in.

**Note**
When you run the server, click on the Fruit form link to display the form.