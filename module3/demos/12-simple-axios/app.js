const express = require("express");
const hbs = require("hbs");
const waxOn = require("wax-on");
const axios = require("axios");
const { response } = require("express");

let app = express();
app.set("view engine", "hbs");

waxOn.on(hbs.handlebars);
waxOn.setLayoutPath("./views/layouts");

app.use(express.static("public"));

//enable forms
app.use(express.urlencoded({ extended: false }));

app.get("/", async function (req, res) {
  let config = {
    method: "get",
    url: "",
    headers: {
      "x-api-key": "",
    },
  };
  let data = [];
  try {
    let response = await axios(config);
    //data = JSON.stringify(response.data);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
  res.render("contact", {
    "contacts": JSON.stringify(response.data)
  });
});

app.post("/", async function (req, res) {
  var config = {
    method: "post",
    url: "",
    headers: {
      "x-api-key": "",
    },
    data: {
      message: "some message", //req.body.message
      name: "some name",
      email: "some@gmail.com",
    },
  };

  try {
    let response = await axios(config);
    let data = response.data;

    console.log(JSON.stringify(response.data));
    //we can render our success page
    res.render("contact-success");
  } catch (error) {
    //dependent on the error code that is sent back
    //can map it via a printout of the error 
    console.log(error.code);
    console.log(error.response.data);
    console.log(error.response.data.name);
    /* Sample Error code from restdb.io
    {
      message: 'Unable to save record (validation)',
      name: 'ValidationError',
      list: [ { field: 'email', message: [Array] } ],
      status: 400
    }
    */
  }
});

app.get("/psi", async function(req, res){
  var config = {
    method: "get",
    url: "https://api.data.gov.sg/v1/environment/psi",
  }
  let response = await axios(config);
 // console.log(response.data.items[0].readings);

  res.render('psi',{
    readings: response.data.items[0].readings
  })

});

//console.log(response.data);

app.listen(3000, function () {
  console.log("server started");
});
