//@author vitorio-p
let url = 'https://randomuser.me/api/';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

//insert and modify to your needs
function getUser() {
  fetch(url)
    .then(response => response.json())
    .then(function(data) {
      document.getElementById("fullname").innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
      document.getElementById("city").innerHTML = data.results[0].location.city;
      document.getElementById("username").innerHTML = data.results[0].login.username;
      document.getElementById("email").innerHTML = data.results[0].email;
      document.getElementById("avatar").src = data.results[0].picture.medium;
    });
}

getUser();

const calBtn = document.getElementById("btn");
calBtn.addEventListener('click', function() {
  getUser();
})