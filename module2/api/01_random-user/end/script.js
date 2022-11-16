// https://randomuser.me/api/
/* Thought process
 - fix the url linkage for css
 - test api via postman -> works fine
 - identify how the json is being mapped 
 - can use jsonpathfinder to find the path
 - setup element mapping (querySelector/getElementById)
 - attempt fetch function to retrieve json data
 - able to retrieve? process each item else find out what's wrong
 - create event listener to retrieve next
 - refactor and improve code
*/
//setup base declarations
const url = "https://randomuser.me/api/";
const user = {
  username: "",
  fullname: "",
  avatar: "",
  email: "",
  city: "",
};
const nextBtn = document.getElementById("btn");

//map elements
user.username = document.getElementById("username");
user.fullname = document.getElementById("fullname");
user.avatar = document.getElementById("avatar");
user.email = document.getElementById("email");
user.city = document.getElementById("city");

//generate user function
const generateUser = () => {
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      //console.log(data);

      let info = data.results[0];
      console.log(info);

      user.username.innerHTML = `${info.login.username}`;
      user.fullname.innerHTML = `${info.name.first} ${info.name.last}`;
      user.city.innerHTML = `${info.location.city}`;
      user.email.innerHTML = `${info.email}`;
      user.avatar.src = `${info.picture.medium}`;
    });
};

//attach event listener
//use our generateUser callback
nextBtn.addEventListener("click", generateUser);

//on start generate
generateUser();
