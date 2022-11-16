const avatar = document.getElementById('avatar');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const city = document.getElementById('city');

const url = 'https://randomuser.me/api/';

function changeUser() {
  fetch(url)
    .then(response => response.json())
    .then(function(data) {
      let result = data.results[0];
      avatar.src = result.picture.large;
      fullname.innerText = result.name.first + " " + result.name.last;
      username.innerText = result.login.username;
      email.innerText = result.email;
      city.innerText = result.location.city;
    })
    .catch(error => console.log('error', error));
}