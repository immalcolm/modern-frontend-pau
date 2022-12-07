import React from "react";

//1. using for loop
//2. using map function

export default class Menu extends React.Component {
  state = {
    foodItems: ["Egg Tarts", "Chicken Rice", "Chicken Noodles"],
  };

  renderMenu() {
    let itemMenus = [];

    for (let item of this.state.foodItems) {
      itemMenus.push(<li key={item}>{item}</li>);
    }

    return <ul>{itemMenus}</ul>;
  }

  render() {
    return (
      <React.Fragment>
        {this.renderMenu()}

        <ol>
          {this.state.foodItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </React.Fragment>
    );
  }
}
