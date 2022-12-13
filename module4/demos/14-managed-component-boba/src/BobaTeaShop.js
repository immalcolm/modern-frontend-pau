import React from "react";
import Item from "./components/Item";
import AddItem from "./components/AddItem";

export default class BobaTeaShop extends React.Component {
  //mock data
  //we need at least 3 items
  state = {
    items: [
      {
        id: 1,
        name: "Brown Sugar Milk Tea with Pearls",
        price: 5.5,
        sugar: 4,
      },
      {
        id: 2,
        name: "Green Tea with Pearls",
        price: 4.5,
        sugar: 2,
      },
      {
        id: 3,
        name: "Oolong Peach with Aiyu Jelly",
        price: 5,
        sugar: 5,
      },
    ],
    itemBeingEdited: {},
    editedItemName: "",
    editedItemPrice: "",
    editedItemSugar: "",
    newItemName: "",
    newItemPrice: "",
    newItemSugar:""
  };

  //when user clicks on item's edit button
  //store the item values
  //the textboxes values will come from here
  beginEdit = (item) => {
    this.setState({
      itemBeingEdited: true,
      editedItemName: item.name,
      editedItemPrice: item.price,
      editedItemSugar: item.sugar,
    });
  };

  //add new item 
  //use spread operator
  addNewItem = () => {
    //new temp item
    //values are derived from the current state values
    const newItem = {
        id: Math.floor(Math.random() * 10000 + 1),
        name: this.state.newItemName,
        price: this.state.newItemPrice,
        sugar: this.state.newItemSugar
    }

    //set back in the state
    //in order to update the state values
    //spread current items, insert in new item at the last 
    this.setState({
        items: [...this.state.items, newItem]
    })
    console.log(`new Item inserted: ${newItem.id}`);
  }

  //evaluates form name 
  //updates state based on form name 
  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //simple render function that churns each item JSX
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

  render() {
    return (
      <React.Fragment>
        <h1>Pandarium Boba Tea Shop</h1>

        {
          //initial render option with separating JSX
          /* 
        {this.state.items.map((eachItem) => {
           return this.renderItem(eachItem);
        })}
        */
        }
        {this.state.items.map((eachItem) => {
          return (
            <Item
              item={eachItem}
              key={eachItem.id}
              beginEdit={this.beginEdit}
            />
          );
        })}

        <AddItem 
            name={this.state.newItemName}
            price={this.state.newItemPrice}
            sugar={this.state.newItemSugar}
            update={this.updateFormField}
            create={this.addNewItem}
        />
      </React.Fragment>
    );
  }
}
