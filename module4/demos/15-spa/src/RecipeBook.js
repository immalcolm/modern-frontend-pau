import React from "react";
import AllRecipe from "./pages/AllRecipe";
import AddNew from "./pages/AddNew";

export default class RecipeBook extends React.Component {
  //if current page is add -->
  //if current page is listings -->
  //make some mock data
  //set id to mongodb style . using _id
  state = {
    page: "list",
    data: [
      {
        _id: 1,
        title: "Chicken Rice",
        ingredients: ["rice", "chicken", "ginger", "broth"],
      },
      {
        _id: 2,
        title: "Miso Soup",
        ingredients: ["miso", "wakame", "tofu"],
      },
      {
        _id: 3,
        title: "Mee Goreng",
        ingredients: ["noodles", "sambal", "seafood", "vegetables"],
      },
    ],
  };

  //function that remembers the visuals
  //remember JSX rendering doesn't support if..else in the return
  //hence we place in a function here
  renderPage() {
    if (this.state.page === "list") {
      return <AllRecipe recipes={this.state.data} />;
    } else if (this.state.page === "add") {
      return <AddNew />;
    }
  }

  //arrow function that handles the current page
  //updates the state of the current page itself
  //this will eventually affect the rendering of the content due to renderPage
  //param: page 
  //list: list all recipes
  //add: Add new recipe
  switchPage = (page) => {
    this.setState({
        page: page
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Recipe Book</h1>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" 
                  onClick={()=>this.switchPage("list")}
                  >
                    List Recipes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={()=>this.switchPage("add")}>
                    Add New
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>{this.renderPage()}</div>
      </React.Fragment>
    );
  }
}
