//What is an object ?
//what defines an object ? 
//Object Oriented programming (OOP).. --> Java/C++
//It consists of key value pairs
//values itself can be functions and data
//containers for data and programming logic 

//Let's start with a simple object
//object itself has data and functions
let employee1 = {
    "firstName": "Daniel",
    "lastName": "Lim",
    "salary": 4000,
    "getTakeHomeSalary": function(){
      return this.salary * 0.8;
    }
  }
  
  //access object value
  console.log(employee1.firstName);
  
  //drawbacks of using plain objects
  //can lead to missing keys or wrong syntax 
  //1. hard to standarise the key/value pairs
  //2. may mistype
  let employee2 = {
    "firstName": "Vito",
    "lastname": "Pan",
    "getTakeHomeSalary": function(){
      return this.salary * 0.8;
    }
  }
  //can leave to errorneous coding 
  //console.log(employee2.firstName);
  
  //function based object
  function Employee3(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.getTakeHomeSalary = function(){
      return this.salary * 0.8;
    }
  }
  //it allows to create multiple objects 
  //with the same template 
  const employeeA = new Employee3("Sri", "Dewi", 8888);
  console.log(employeeA.firstName);
  
  //can also use a class
  //class allows us to standardize objects of a certain type. 
  //A class can be thought of as a template for our objects
  class Employee{
    //any functions and variables defined exist within the {..}  
    //belongs to the employee class
    firstName = "N/A";
    lastName = "N/A";
    salary = 0;
  
    //embed a function in the class
    //we don't need the keyword function
    getTakeHomeSalary(){
      return this.salary * 0.8;
    }
  }
  
  const employeeB = new Employee();
  employeeB.firstName = "Wei Jie";
  employeeB.lastName = "Fong";
  employeeB.salary = 8888;
  console.log(employeeB.getTakeHomeSalary());
  
  //with classes we can create multiple instances of Employee
  //objects created are independent of each other
  const employeeC = new Employee();
  console.log(employeeC);
  
  employeeC.firstName = "Ken Ann";
  employeeC.lastName = "Pang";
  employeeC.salary = 9999;
  console.log(employeeC.getTakeHomeSalary());
  
  class EmployeeConstructor{
    //any functions and variables defined exist within the {..}  
    //belongs to the employee class
    firstName = "N/A";
    lastName = "N/A";
    salary = 0;
  
    constructor(firstName, lastName, salary){
      this.firstName = firstName;
      this.lastName = lastName;
      this.salary = salary;
    }
  
    //embed a function in the class
    //we don't need the keyword function
    getTakeHomeSalary(){
      return this.salary * 0.8;
    }
  }
  
  const employeeD = new EmployeeConstructor("John", "Doe", 19999);
  console.log(employeeD.firstName);
  
  //we can have inheritance
  //classes inherit from each other 
  //if class B inherits from class A, it means that all the key/pair values are inherited
  class PartTimeEmployee extends Employee{
    hourly = 10;
    
  }
  let employeeE = new PartTimeEmployee();
  console.log(employeeE);
  
  class Book{
     title = "N/A";
     isbn = "0000-0000-0000-0000";
     author = "N/A";
  
     //can pass in arguments
     constructor(title, isbn, author){
         //if(isbn =... )
         this.title = title;
         this.isbn = isbn;
         this.author = author;
     }
  }
  //can be difficult to keep assigning keys and values
  //let b = new Book();
  //b.author = "Mr Panda";
  
  let b = new Book("Story of Pandas","1234-1234-8888-8888","Pandarium");
  console.log(b);
  
  