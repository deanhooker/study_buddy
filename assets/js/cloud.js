

//Initialize Firebase
var config = {
  apiKey: "AIzaSyAwSszrGJ-J62xrI0PRBRjypSoHFmtmQho",
  authDomain: "test-7f362.firebaseapp.com",
  databaseURL: "https://test-7f362.firebaseio.com",
  projectId: "test-7f362",
  storageBucket: "test-7f362.appspot.com",
  messagingSenderId: "1011145892760"
};
firebase.initializeApp(config);

var database = firebase.database();

// add event button
$("#add-event").on("click", function(event) {
  event.preventDefault();

  // get user input to put into object
  var eventName = $("#event-name").val().trim();
  var eventDate = $("#date").val().trim();
  var eventDuration = $("#duration").val().trim();
  var eventLocationStreet = $("#street-address").val().trim();
  var eventLocationCity = $("#city").val().trim();
  var eventLocationState = $("#state").val().trim();
  var eventLocationZip = $("#zip").val().trim();
  var eventDescription = $("#description").val().trim();

  // object to hold our event info
  var newEvent = {
    name: eventName,
    date: eventDate,
    duration: eventDuration,
    locationStreet: eventLocationStreet,
    locationCity: eventLocationCity,
    locationState: eventLocationState,
    locationZip: eventLocationZip,
    description: eventDescription
  };

  // Uploads event to database
  database.ref().push(newEvent);

  // Logs everything to console
  console.log(newEvent.name);
  console.log(newEvent.date);
  console.log(newEvent.duration);
  console.log(newEvent.locationStreet);
  console.log(newEvent.locationCity);
  console.log(newEvent.locationState);
  console.log(newEvent.locationZip);
  console.log(newEvent.description);

  // Alert
  //alert("Meeting successfully scheduled");

  // Clears all of the text-boxes
  $("#event-name").val("");
  $("#date").val("");
  $("#duration").val("");
  $("#street-address").val("");
  $("#city").val("");
  $("#state").val("");
  $("#zip").val("");
  $("#description").val("");
});

// creating event to add users event to firebase
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var eventName = childSnapshot.val().name;
  var eventDate = childSnapshot.val().date;
  var eventDuration = childSnapshot.val().duration;
  var eventLocation = childSnapshot.val().locationStreet;
  var eventLocation = childSnapshot.val().locationCity;
  var eventLocation = childSnapshot.val().locationState;
  var eventLocation = childSnapshot.val().locationZip;
  var eventDescription = childSnapshot.val().description;

  $("#meeting-table > tbody").append("<tr><td>" + eventName + "</td><td>" + eventDate + "</td><td>" +
  eventDuration + "</td><td>" + eventLocation + "</td><td>" + eventDescription);
});
