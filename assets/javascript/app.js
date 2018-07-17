// $(document).ready(function() {

    //connect to firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBonZbwymHysA8SJ6zRwsbOFZDWU26tu5g",
    authDomain: "train-schedule-d685b.firebaseapp.com",
    databaseURL: "https://train-schedule-d685b.firebaseio.com",
    projectId: "train-schedule-d685b",
    storageBucket: "train-schedule-d685b.appspot.com",
    messagingSenderId: "747902248747"
  };
  firebase.initializeApp(config);

    //display firebase train schedule on page load
    var database = firebase.database();

    //initial train object
    var schedule = {
        train0: "name, destination, time, frequency",
        train1: "name, destination, time, frequency"
    };


    //add train
    trainname = $("#trainnameloc").val().trim();
    // push to train array based on length of schedule
    destination = $("#destinationloc").val().trim();
    traintime = $("#traintimeloc").val().trim();
    frequency = $("#frequencyloc").val().trim();
    //push array to schedule obj

    
        //add details to firebase

        //add details to page
    //for loop for schedule object
    for (i=0; i<schedule.length; i++) {
        var trainnum = "train" + i;
        //for loop for each location in each array in schedule object
        for (j=0, j<4, j++) {
            var td = "<td>"
        }
    };

// });