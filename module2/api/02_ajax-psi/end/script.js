//https://api.data.gov.sg/v1/environment/psi
const url = "https://api.data.gov.sg/v1/environment/psi";
fetch(url)
.then((response) => response.json())
.then(function (data) {
    console.log(data);
});