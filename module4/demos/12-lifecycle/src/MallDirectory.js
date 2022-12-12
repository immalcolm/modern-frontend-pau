import React from "react";
import axios from "axios"; //load data with axios (.json files)

//we need to load data dynamically before the page is rendered fully
//this is where the react lifecycle comes in 
//we tap on componentDidMount() 
//makes it more natural
//[Lifecycle]
// 1. components are created through the constructor
//2. mounting is when the component is ready
//3. component is rendered once 
//4. componentDidMount will be called (after the component is rendered once)
//--> it will never be called again
//5. update is called
//6. unmounting will be called (may happen)

export default class MallDirectory extends React.Component {
  //setup default keys first before we load
  state = {
    shops: [],
    events: [],
  };

  //async function to load data from .json files dynamically
  loadData = async () => {
    //either reference to any kind of url or file
    //if in terms of file -> put it into public folder
    //react will look into public folder
    //if we reference using relative pathing .. eg. > ./<filename>
    //--> looks into /public folder
    const shopResponse = await axios.get("shops.json");
    console.log(shopResponse.data);

    //this.setState({
    //    shops: shopResponse.data.shops
    //})

    const eventResponse = await axios.get("events.json");
    console.log(eventResponse.data);

    //optimise our setState by combining it together
    //setState itself is an async function, takes some time to set the state
    //can either put await infront
    //accumulate the setting of state together
    this.setState({
      shops: shopResponse.data.shops,
      events: eventResponse.data.events,
    });
  };
 
  //lifecycle
  //after the first time a component instance is loaded/rendered
  //it will call componentDidMount
  componentDidMount(){
    //place in all axios calls 
    console.log("..... load...... ");
  }

  renderEvents() {
    let elements = [];
    for (let eachEvent of this.state.events) {
      elements.push(
        <li className="list-group-item" key={eachEvent}>
          {eachEvent}
        </li>
      );
    }

    return <ol className="list-group">{elements}</ol>;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Pandarium Mall Directory</h1>
        <button onClick={this.loadData} className="btn btn-primary">
          Load Data
        </button>

        <h2>Shops</h2>
        <div className="row">
          {this.state.shops.map((eachShop) => {
            return (
              <div className="card mb-4" key={eachShop.id}>
                <div className="card-body">
                  <div className="card-title">
                    <h3>{eachShop.name}</h3>
                  </div>
                  <ul>
                    <li>
                      Unit: {eachShop.floor}-{eachShop.unit}
                    </li>
                    <li>Type: {eachShop.type}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <h2>Events</h2>
          {this.renderEvents()}
        </div>
      </React.Fragment>
    );
  }
}
