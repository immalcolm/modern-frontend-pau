# Creating an SPA - RecipeBook 
This will work with an API that is created in Express -> linked to Mongodb

1. Create a base `RecipeBook.js` and import into `App.js`
2. Setup state mock data
   1. _id, title, ingredients[]
3. Place current page as a state `page: list`
4. Install bootstrap and place the css in 
5. Copy and paste bootstrap nav bar
   1. Remember to change all `class` to `className`
6. Create a function `renderPage`
   1. setup if else. handles the paging between pages
   2. if `list` -> go to AllRecipe
   3. if `add` -> go to AddNew
7. Create 2 basic function components with simple JSX
   1. `AddNew`: to deal with add recipes 
   2. `AllRecipe`: to deal with listing of recipes
8. Import in `AddNew` `AllRecipe` into `RecipeBook`
9.  Change our nav bar to redirect to `AddNew` | `AllRecipe`
   1.  Setup on click that uses a closure `onClick={()=>this.switchPage(<page>)}`
10. Create a function switchPage that takes in a parameter and changes the current page to that parameter
11. Update render function to include `renderPage`
12. How the pages change is due to the current state of `page`
    1.  if `this.state.page` is `list`: go to AllRecipe
    2.  if `this.state.page` is `add`: go to AddNew
    3.  Default `this.state.page` is `list`
13. Send mock data over to AllRecipe using **props** (lifting up states)
    1.  `<AllRecipe recipes={this.state.data}/>`: send data over as props
14. Upgrade `AllRecipe` to have props recipes
    1.  Create a map to print out the recipes data and ingredients
15. Create new component `RecipeItem` this just does JSX of 1 item
16. Upgrade `AllRecipe` to use component `RecipeItem`
