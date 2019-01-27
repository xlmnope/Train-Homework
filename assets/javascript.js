
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDh7GYE2lvhW6F-ivRtehR2Gi5lY_WKBxU",
  authDomain: "trainhomework-6e32a.firebaseapp.com",
  databaseURL: "https://trainhomework-6e32a.firebaseio.com",
  projectId: "trainhomework-6e32a",
  storageBucket: "trainhomework-6e32a.appspot.com",
  messagingSenderId: "1064899132514"
};
firebase.initializeApp(config);

var database = firebase.database();




$("#add-train-button").on( "click", function() {
  event.preventDefault();
  console.log('submit click handler');
  var train = {
    name: $("#trainName1")
    .val()
    .trim(),
    destination: $("#destination")
    .val()
    .trim(),
    firsttraintime: $("#firsttraintime")
    .val()
    .trim(),
    frequency: $("#frequency")
    .val()
    .trim(),
  }
  console.log(train);
  database.ref().push(train);
  clearsearchtextfields();
});

database.ref().on("child_added", function(snapshot) {
  console.log("child:", snapshot.val());
  var train = snapshot.val()
  addTrainRow(train);
});


function clearsearchtextfields() {
  $("#trainName1").val("");
  $("#destination").val("");
  $("#frequency").val("");
  $("#firsttraintime").val("");
}



//append a table row to display train data

function addTrainRow(train){
  //do math later here
  $('.tableBody').append("<tr><td>"+train.name+"</td><td>"+train.destination+"</td><td>"+train.frequency+"</td><td>"+ "do math later" +"</td><td>"+"domathlater"+"</td></tr>");
}
