/*
Developer Coding Process
Task: Do a CRUD
Create - done
Read - done 
Update - done 
Delete - done
Are we able to CREATE?
- done ??
-- let's upgrade the UI a little bit 
-- OR we can do some validation
Then move to Read 
Additional: Show and hide some UI when needed

1. Ensure setup is proper and data is able to retrieve via postman 
2. Upgrade our bootstrap
3. Let's about creation of data 
4. clean up some of the reading
5. clean up some of the creation part, shifted the reference form values to the top
6. test our creation code -> works fine? data inserted?
7. alert user? refresh table? clear form data?
8. move into updating user. create some variables that are assigned to the update form
9. create event listener for update form
10. setup data to be sent to database by referencing update form values
11. check whether the correct id was click on
12. check whether correct class update or delete
13. retrieve and assign values to the update form
14. when we press on a update link, does it send the data attributes to our form
15. in updateContactBtn event listener does it retrieve the correct values from the form? test. 
16. retrieve hidden input id
17. setup axios PUT and url. send data across to our restful db based on the hidden input id 
18. response object coming back is updated contact. ensure data is correct in frontend and in database
19. setup our Delete function by using axios delete . can test in postman first 
20. setup refresh data in delete function
21. setup bootstrap icons
22. enhance edit/delete links with icons
23. create show hide functions to show/hide targeted element
24. reference and create update contact alert
25. hide contact alert by default, hide update contact container
26. show update contact container when update is clicked
27. hide update contact container when successfully updated
28. show and create alert when updated
@todo: show and hide alerts for creation 

pending: show/hide alerts
pending: bug fix when icons are used . update/delete failes 
*/

//what kind of interface we want at the start
const RESTDB_CONTACT_URL = "";
const APIKEY = "";

let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactMessage = document.getElementById("contact-msg");

//update form
let updateContactName = document.getElementById("update-contact-name");
let updateContactEmail = document.getElementById("update-contact-email");
let updateContactMessage = document.getElementById("update-contact-msg");
let updateContactBtn = document.getElementById("update-contact-submit");
let updateContactId = document.getElementById("update-contact-id");

const alertUpdate = document.getElementById("alert-update");
const updateContainer = document.getElementById("update-contact-container");

hideUI(alertUpdate);
hideUI(updateContainer);

const postConfig = {
  headers: {
    "x-apikey": APIKEY,
    "cache-control": "no-cache",
  },
};
//get the HTML element involved with form submission
//the default action of a type=submit
const contactSubmit = document.getElementById("contact-submit");
contactSubmit.addEventListener("click", function (e) {
  //due to it being a type=submit
  e.preventDefault();

  //@TODO Validation of data
  //validate information from the form
  //don't trust user input

  //structure is adapted from restdb
  //data is retrieved from form values
  let jsondata = {
    name: contactName.value,
    email: contactEmail.value,
    message: contactMessage.value,
  };

  //axios.post(url, data, config)
  axios
    .post(RESTDB_CONTACT_URL, jsondata, postConfig)
    .then(function (response) {
      console.log(`contact create ${response.data}`);
      //clear form
      clearCreateContact();

      //update table
      getContacts();
      return response.data;
    })
    .finally(() => {
      //consider setting up a loading bar before the request
      //this.loading = false
    });
});

//create our eventlistener for update form
updateContactBtn.addEventListener("click", function (e) {
  e.preventDefault();

  //setup our data first
  let jsondata = {
    name: updateContactName.value,
    email: updateContactEmail.value,
    message: updateContactMessage.value,
  };
  console.log(`Data in updateContactBtn ${jsondata.name}`);

  //axios send data across to our restful db
  //retrieve hidden input value that contains our contact id to be updated
  let id = updateContactId.value;

  axios
    .put(`${RESTDB_CONTACT_URL}/${id}`, jsondata, postConfig)
    .then(function (response) {
      console.log(`Contact Update`);

      //process update UI changes

      hideUI(updateContainer);
      
      //show alert and create alert msg
      //alertupdate is the alert container 
      showUI(alertUpdate);
      createAlert(alertUpdate, "success", `<i class="bi bi-person-rolodex"></i> Contact successfully updated`);
      
    });
});

//type -  meaning what kind of color scheme to apply
function createAlert(parent, type, msg) {
  parent.innerHTML = `
  <div class="alert alert-${type}" alert-dismissible fade show role="alert">
    ${msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  `;
}

//universal event listener that aims at the target class
document.addEventListener("click", function (e) {
  console.log(e.target);

  //retrieve class name
  let targetClass = e.target.classList;
  //to retrieve from a data attribute we use .getAttribute
  //<a href..... data-id=""....>
  let targetId = e.target.getAttribute("data-id");

  if (targetClass.contains("update")) {
    console.log(`Entering update`);
    showUI(updateContainer);
    updateContact(e.target);
  } else if (targetClass.contains("delete")) {
    console.log(`Entering delete`);
    delectContact(targetId);
  }
});

//delete function that takes in the id
function delectContact(id) {
  axios
    .delete(`${RESTDB_CONTACT_URL}/${id}`, postConfig)
    .then(function (response) {
      //process our delete
      console.log(`Contact deleted ${response}`);
      getContacts();
    });
}

//update form values based on selected item
function updateContact(element) {
  updateContactName.value = element.getAttribute("data-name");
  updateContactEmail.value = element.getAttribute("data-email");
  updateContactMessage.value = element.getAttribute("data-msg");
  updateContactId.value = element.getAttribute("data-id");
}

//simple function to retrieve all contact details
function getContacts(all = true, limit = 10) {
  let settings = {
    headers: {
      "x-apikey": APIKEY,
      "cache-control": "no-cache",
    },
  };

  //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
  //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links
  axios
    .get(RESTDB_CONTACT_URL, settings)
    .then(function (response) {
      let contacts;
      let content = "";
      if (!all) {
        contacts = response.data.slice(0, limit);
      } else {
        contacts = response.data;
        limit = response.data.length;
      }

      //what this loop does
      //assume you have contacts coming in
      //loop through each contact obj
      //pump some data into the delete/update
      for (let c of contacts) {
        content = `${content}<tr id='${c._id}'><td>${c.name}</td>
        <td>${c.email}</td>
        <td>${c.message}</td>
        <td><a href='#' class='delete' data-id='${c._id}'>Delete
        </a></td>
        <td><a href='#update-contact-container' class='update' data-id='${c._id}' data-msg='${c.message}' data-name='${c.name}' data-email='${c.email}'>Update
        </a></td></tr>`;
      }
      document.querySelector("#contact-list tbody").innerHTML = content;
      document.querySelector(
        "#total-contacts"
      ).innerHTML = `${limit} of ${response.data.length}`;
      return response.data;
    })
    .finally(() => {
      //consider using a loading bar to stop
      //this.loading = false
    });
}

function clearCreateContact() {
  contactName.value = "";
  contactEmail.value = "";
  contactMessage.value = "";
}
getContacts();

//in css <element>{display:none}
function hideUI(element) {
  element.style.display = "none";
}

//in css <element>{display:block}
function showUI(element) {
  console.log(`show UI`);
  element.style.display = "block";
}
