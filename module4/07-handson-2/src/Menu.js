import React from "react";

//two ways
//1. loop
//2. map
export default class Menu extends React.Component {
  //fooditems is a slightly more complex object
  //within there's an array
  //how do i process an array within an object
  state = {
    foodItems: [
      {
        _id: 101,
        name: "Chicken Udon Soup",
        price: 11.99,
        ingredients: ["chicken stock", "udon", "chicken breast"],
      },
      {
        _id: 203,
        name: "Salmon Teriyaki Don",
        price: 9.9,
        ingredients: ["salmon", "rice", "soya sauce"],
      },
      {
        _id: 401,
        name: "Raw Salmon Slices",
        price: 15.99,
        ingredients: ["salmon"],
      },
      {
        _id: 402,
        name: "Chicken Miso Ramen",
        price: 15.99,
        ingredients: ["chicken", "miso", "ramen"],
      },
    ],
  };

  //cleaner way to deal with ingredient looping
  renderIngredients(ingredients) {
    let ingredientJSX = [];
    for (let eachIngredient of ingredients) {
      ingredientJSX.push(<li key={eachIngredient}>{eachIngredient}</li>);
    }
    return ingredientJSX;
  }

  renderMenu() {
    //setup a base temp. array
    //we will add jsx items inside using push
    let items = [];

    for (let eachItem of this.state.foodItems) {
      //second loop
      //to cycle through ingredients and add jsx to them
      //because printing blindly .. is ugly..
      //e.g chicken stockudonchickenbreast
      //let's make our loop
      //setup base temp. ingredients with empty array
      let ingredients = [];
      for (let eachIngredient of eachItem.ingredients) {
        ingredients.push(<li key={eachIngredient}>{eachIngredient}</li>);
      } //outcome is a temp arr ingredients

      items.push(
        <div key={eachItem._id}>
          <h3>{eachItem.name}</h3>
          <h4>{eachItem.price}</h4>
          <ul>{ingredients}</ul>
        </div>
      );
    }
    return items;
  }

  render() {
    return (
      <React.Fragment>
        <h3>Using Loops</h3>
        {this.renderMenu()}

        {/* ----- using mappping ---- */}
        <h3>Using Mapping</h3>
        {this.state.foodItems.map((item) => (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
            <ul>
              {item.ingredients.map((eachIngredient, index) => (
                <li key={index}>{eachIngredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
