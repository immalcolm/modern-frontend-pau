import React from "react";

//1. start with base list and do some basic render
//2. remember to use return in the .map function
//3. 1-way bind our checkbox with the .done state of each item
//4. test by setting .done with true in react dev tools
//5. create input boxes for C-Create option
//6. create a button and assign onClick handler function
//7. Test Test 1 way binding and onClick function
//8. addTask -> create temp obj -> retrieve data from textbox using state -> set the new state
//9. setup 2 way binding for updateFormField by setting value={this.state.newTaskName}

export default class TaskList extends React.Component {
  //let's create some base data
  //something to work with. eventually we will tap on apis or mongo+express(API)
  //with data, we work with objects. For every obj, we will need an ID
  //this allows us to uniquely identify the obj.
  //Also in mongo, _id ObjectId(...id value...) is always created for each obj
  //task : [ {task1}, {task2}]
  //How to access tasks? this.state.tasks
  //in this scenario.. tasks represents all existing data | used as mock data first
  //every key is unique and should represent 1 task item
  state = {
    tasks: [
      {
        id: 1,
        description: "Mop the floor",
        done: true,
      },
      {
        id: 2,
        description: "Buy groceries",
        done: false,
      },
      {
        id: 3,
        description: "Walk the kid",
        done: false,
      },
    ],
    newTaskName: "",
  };

  //create a temp obj to place a task
  //using the existing state value of newTaskName "derived from our 2way binding"
  //binding -> changes the value of newTaskName from the input box
  //assumption: all task created is not done .done = false
  //remember to use an arrow function because we are dealing with events
  addTask = () => {
    //temp holding obj
    //refers to the latest holding value from input box
    const newTask = {
      id: Math.floor(Math.random() * 10000 + 1),
      description: this.state.newTaskName,
      done: false,
    };
    //test whether really have new task
    console.log(newTask);

    //reactive programming we do not mutate the original
    //we also cannot simply assign values to the state properties

    //--- old way --
    //let cloned = this.state.tasks.slice(); //slice makes copy of the array
    //cloned.push(newTask);//add in new item

    //-- better way of reactive
    //use spread operator
    //let cloned = [...this.state.tasks, newTask];

    //update tasks with new task created
    this.setState({
      tasks: [...this.state.tasks, newTask], //cloned
    });

    console.log(`Task being added ${newTask.id}`);
  };

  //input names must tally with the state keys for this to work
  //do our 2way bind
  //eg. <input name="vito" onChange={....}>
  // state = { vito: "food"}
  updateFormField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      //vito: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* Create Task */}

        <div>
          <label>Task Name: </label>
          <input
            type="text"
            name="newTaskName"
            value={this.state.newTaskName}
            onChange={this.updateFormField}
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>

        <ul>
          {this.state.tasks.map((eachTask) => {
            return (
              <li key={eachTask.id}>
                {eachTask.description}
                <input type="checkbox" checked={eachTask.done} />
                <button>Edit</button>
                <button>Delete</button>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
