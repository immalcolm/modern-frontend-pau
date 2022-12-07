import React from "react";

//play around with a complex list with objects
//we are going to use Bootstrap to beautify some content
export default class MallDirectory extends React.Component {
  state = {
    shops: [
      {
        id: 1,
        name: "Macdonalds",
        floor: 1,
        unit: 202,
        type: "F&B",
      },
      {
        id: 2,
        name: "Coffee Beans",
        floor: 2,
        unit: 301,
        type: "F&B",
      },
      {
        id: 3,
        name: "Uniqo",
        floor: 1,
        unit: 101,
        type: "Clothing",
      },
      {
        id: 4,
        name: "Don Don Donki",
        floor: 5,
        unit: 103,
        type: "Supermarket",
      },
    ],
  };

  //1. loop way of handling our list obj
  //setup a base variable
  renderShops() {
    let jsx = [];
    //the shop objects are complex and contains several chunks of data
    //instead of using a list item we can use a div instead

    /*
        for(let shop of this.state.shops){
            jsx.push(<div>
                <h3>{shop.name}</h3>
                <h4>Unit: {shop.floor}-{shop.unit}</h4>
                <strong>Type: </strong>{shop.type}
            </div>);
        }
        */

    //upgrade to more bootstrapy
    for (let shop of this.state.shops) {
      jsx.push(
        <div key={shop.id} className="card col-12 col-md-4 mb-3">
          <div className="card-body">
            <h3 className="card-title">{shop.name}</h3>
            <div className="card-text">
              <h4>
                Unit: {shop.floor}-{shop.unit}
              </h4>
              <strong>Type: </strong>
              {shop.type}
            </div>
          </div>
        </div>
      );
    }

    return <div className="row">{jsx}</div>;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Pandarium Mall Directory</h1>
        {this.renderShops()}

        <h2>Pandarium Mall Directory (Using Mapping)</h2>
        <div className="row">
          {this.state.shops.map((shop) => (
            <div key={shop.id} className="card col-12 col-md-4 mb-3">
              <div className="card-body">
                <h3 className="card-title">{shop.name}</h3>
                <div className="card-text">
                  <h4>
                    Unit: {shop.floor}-{shop.unit}
                  </h4>
                  <strong>Type: </strong>
                  {shop.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
