# Creating Boba CRUD using Managed Components
1. Create BobaTeaShop class
2. Import into App.js
3. Give some mock data to BobaTeaShop ("state")
4. Render some items using map 
5. upgrade our render to a function renderItem = (item) =>{}
```javascript
  renderItem = (item) => {
    return (
      <div key={item.id}>
        <h2>Name: {item.name}</h2>
        <h3>Price: {item.price}</h3>
        <h4>Sugar Level: {item.sugar}</h4>
        <button>Edit</button>
      </div>
    );
  };
```
6. Create a `Item` function inside a /components folder. Create the /components folder if doesn't exist. This allows us to keep the JSX separate
7. Place display JSX content into `Item.js`
8. Change render to use `Item` component and send `eachItem` as a prop. Port renderItem function over to `Item` component.
9. Change value to using `props.item` 
10. Import `Item` into `BobabTeaShop`
11. Test test~~ whether each is rendered properly
12. Put key into `BobaTeaShop` iteration instead of `Item`
13. Create an arrow function handle form Field `updateFormField` 
14. Create a function beginEdit that takes in an item and updates the state of the currently edited item
15. Update state to have edit states 
    . `editedItemName` `editedItemPrice` `editedItemSugar`
    . `itemBeingEdited`
16. Use a closure inside the onClick on `Item` 
    ```javascript
    onClick={() => props.beginEdit(props.item)}
    ```
17. But let's do addItem. Create a `AddItem` function inside `/components`
18. `AddItem`: Create some form UI and a `Create` button.
19. `BobaTeaShop`: Create `addItem` function
    1.  Creates a temp obj with random id `Math.floor(Math.random() * 10000 + 1) `
    2.  Values are derived from the state
    3.  New state values `newItemName` `newItemPrice` `newItemSugar`
20. `BobaTeaShop`: Update state with `newItemName` `newItemPrice` `newItemSugar` and give them blank values
21. `BobaTeaShop`: Add in `AddItem` component inside render.
    1.  Give attributes and bind to the state values `newItemName` `newItemPrice` `newItemSugar` and function `addItem`
22. `AddItem`: Bind onClick to prop `addItem` 
23. Let's deal with edit by creating `EditItem` component 