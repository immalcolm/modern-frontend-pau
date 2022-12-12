import React from "react";
//how? create/copy new array -> modify ->
//to add the new task to the back of this.state.tasks.[]
//do a non-mutating change
//https://www.peanutbutterjavascript.com/posts/update-arrays-without-mutating-the-original
//return a segment, but without arguments, returns the entire copy

//1. start with base list and do some basic render
//2. remember to use return in the .map function
//3. 1-way bind our checkbox with the .done state of each item
//4. test by setting .done with true in react dev tools
//5. create input boxes for C-Create option
//6. create a button and assign onClick handler function
//7. Test Test 1 way binding and onClick function
//8. addTask -> create temp obj -> retrieve data from textbox using state -> set the new state
//9. setup 2 way binding for updateFormField by setting value={this.state.newTaskName}
//10. test adding of new task
//11. setup onChange for each checkbox
//12. 2 way bind using checkTask with closure
//13. add onclick beginEditTask function
//14. write function beginEditTask that handles 2 state variables
//  . taskBeingEdited (stores the selected edit task obj) | editedTaskName (stores the edited task desc)
//15. Test edit button when click on .. state values are updated
//16. enhance render function with conditional rendering
//  . match the eachTask.id vs taskBeingEdited.id (thecurrent edited task id obj)
//  . if match show input box/update/cancel
//  . if doesnt match, show task/edit/delete
//17. test! check 2 way bind for edit input box works
//18. create processEditTask 
//  . clone the selected task obj 
//  . modify with latest task details
//  . find index to replace
//  . setState "tasks"  with latest modifiedTasks .. 
//  . setState "taskBeingEdit" to null or {}

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
    taskBeingEdited: null, //remember which task is being edited
    editedTaskName: "",
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

  //however unlike usual arrow functions, we are getting the task from the closure
  //task here is eachTask --> currently selected task
  //task >> derived from the checkbox onChange .. > closure
  checkTask = (task) => {
    //test whether the task object is successfully sent back
    console.log(task);

    //we wanna modify the object
    //1. we can also use the spread operator on the object
    // . use spread to clone the original
    //using spread on obj
    let clonedTask = { ...task };
    console.log(`Cloned Task ${clonedTask}`);

    //2. make the change "done" based on user interaction
    //if true make false. if false make true
    clonedTask.done = !clonedTask.done; //having ! does the inversion

    //3. find the index to replace
    // we tap onto the function findIndex. returns truthy values for 1st found
    // loop thru all tasks, compare the looped task id vs selected task id
    // if match -> return true -> returns the index
    const indexToReplace = this.state.tasks.findIndex((eachTask) => {
      if (eachTask.id === task.id) return true;
      else return false;
    });

    console.log(`Index is : ${indexToReplace}`);

    //4. modify and update the current with the task to replace
    //doing left and right creates the left and right boundary items
    //we den insert the newly cloned task
    const left = this.state.tasks.slice(0, indexToReplace);
    const right = this.state.tasks.slice(indexToReplace + 1);
    //const cloned = [...left, clonedTask, ...right];
    //set the state back of the tasks
    this.setState({
      tasks: [...left, clonedTask, ...right],
    });
  };

  //process similar to add
  //the task parameter comes from our closure
  //--> later we tap onto taskBeingEdited
  //new states for edit
  //taskBeingEdit: this will contain the object that is currently being edited
  //--> why we need to know. so that in our render, we can identify which obj
  //--> tell react to re-render
  //editedTaskName: store the current selected editing task description
  beginEditTask = (task) => {
    this.setState({
      taskBeingEdited: task,
      editedTaskName: task.description,
    });
  };

  //process the edit task -> update our state
  processEditTask = (task) => {
    console.log(task); //this returns the event

    //we are going to depend on the current state values and replace our task
    //method 1 of clone and update value
    //create clonedTask
    //const clonedTask = {...this.state.taskBeingEdited};
    //clonedTask.description = this.state.editedTaskName;

    //method 2
    const clonedTask = {
      ...this.state.taskBeingEdited,
      description: this.state.editedTaskName,
    };

    //when you spread an obj, all the key/pair values are extracted and seperated by a comma,
    //basically like our states
    //=> ...(spread operator) will cause key/value pair to be extracted like below
    //{
    // id:1,
    // description: "some task",
    // description: this.state.editedTaskName, --> supercedes the original
    // done: false
    //}
    //having >> description: this.state.editedTaskName overwrites any key/value pair, superceding the original

    const indexToReplace = this.state.tasks.findIndex((eachTask) => {
      if (eachTask.id === clonedTask.id) return true;
      else return false;
    });
    //combine everything back
    const modifiedTasks = [
      ...this.state.tasks.slice(0, indexToReplace),
      clonedTask,
      ...this.state.tasks.slice(indexToReplace + 1),
    ];

    this.setState({
        tasks: modifiedTasks, //replace with latest tasks
        taskBeingEdited: null //tell render there's no more task being edited
    })
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
            //match the eachTask id vs the currently edited task id
            //taskBeingEdited is an obj task
            if (
              this.state.taskBeingEdited &&
              eachTask.id === this.state.taskBeingEdited.id
            ) {
              return (
                <li key={eachTask.id}>
                  <input
                    type="text"
                    value={this.state.editedTaskName}
                    name="editedTaskName"
                    onChange={this.updateFormField}
                  />
                  <button onClick={this.processEditTask}>Update</button>
                  <button>Cancel</button>
                </li>
              );
            } else {
              return (
                <li key={eachTask.id}>
                  {eachTask.description}
                  <input
                    type="checkbox"
                    checked={eachTask.done}
                    onChange={() => {
                      this.checkTask(eachTask);
                    }}
                  />
                  {/* use a closure to remember which task object */}
                  <button
                    onClick={() => {
                      this.beginEditTask(eachTask);
                    }}
                  >
                    Edit
                  </button>
                  <button>Delete</button>
                </li>
              );
            }
          })}
        </ul>
      </React.Fragment>
    );
  }
}
