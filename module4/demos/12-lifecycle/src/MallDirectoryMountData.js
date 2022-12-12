//this file will show a loading on the screen using state first
//then data will loaded change the state show UI

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
import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "./my-lottie.json";
export default class MallDirectoryMountData extends React.Component {
  //setup default keys first before we load

  //because componentDidMount is only called after the first render
  //make sure the state contains correct info
  //or show loading because data hasnt been retrieved yet

  state = {
    shops: [],
    events: [],
    isDataLoaded: false,
  };

  //lifecycle
  //after the first time a component instance is loaded/rendered
  //it will call componentDidMount
  //to retrieve data first before the full render
  //->component mount->base render->componentDidMount ... axios calls ..state updated-> render
  //when making axios/api calls there's a lag time. we use componentDidMount to load data first before the render
  async componentDidMount() {
    //place in all axios calls
    console.log("..... load...... ");

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
      isDataLoaded: true,
    });
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

  //apply conditional rendering
  //if data is still loading in componentDidMount -> show loading text
  render() {
    return (
      <React.Fragment>
        <h1>Pandarium Mall Directory</h1>
        <h2>Shops</h2>
        <div className="row">
          {this.state.isDataLoaded ? (
            <React.Fragment>
              {this.state.shops.map((eachShop) => {
                return (
                  <div className="col-3">
                    <div className="card mb-4 shadow-sm" key={eachShop.id}>
                      <img src={eachShop.img} class="card-img-top" alt="..." />
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
                  </div>
                );
              })}
              <div className="row">
                <h2>Events</h2>
                {this.renderEvents()}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="card mb-4" key="1">
                <div className="card-body">
                  <div className="card-title">
                    <h3>Loading.....</h3>
                  </div>
                  <ul>
                    <li>Unit: Loading.....</li>
                    <li>Type: Loading.....</li>
                  </ul>
                </div>
              </div>
              <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 150, height: 150 }}
              />
              <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 150, height: 150 }}
              />
              <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 150, height: 150 }}
              />
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}
