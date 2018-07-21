// $(document).ready(function() {

    //connect to firebase
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyByQBklp5y58Hhncmc1Qr5kFdHgOweXbB0",
    authDomain: "trainscheduler-1fd87.firebaseapp.com",
    databaseURL: "https://trainscheduler-1fd87.firebaseio.com",
    projectId: "trainscheduler-1fd87",
    storageBucket: "trainscheduler-1fd87.appspot.com",
    messagingSenderId: "263195455251"
  };
  firebase.initializeApp(config);

    //display firebase train schedule on page load
    var database = firebase.database();

    //add train
    $("#submitbttnloc").on("click", function() {
        event.preventDefault();
        var train0 = [];
        var trainname = $("#trainnameloc").val().trim();
        // push to train array based on length of schedule
        var destination = $("#destinationloc").val().trim();
        var traintime = $("#traintimeloc").val().trim();
        var frequency = $("#frequencyloc").val().trim();
        //push array to schedule obj
        train0.push(trainname);
        train0.push(destination);
        train0.push(traintime);
        train0.push(frequency);

        console.log("train0: " + train0);
        // schedule.push(train0);
        // console.log("schedule: " + schedule);

        database.ref().push({
            key: train0
          });
    });
        //add details to firebase

        //add details to page
    //for loop for schedule object
    // for (i=0; i<schedule.length; i++) {
    //     var trainnum = "train" + i;
    //     //for loop for each location in each array in schedule object
    //     for (j=0; j<4; j++) {
    //         var td = $("<td>");
    //     }
    // };
    function addtrain() {
        
    };

    database.ref().on("child_added", addtrain)

// });



// function() {
// var row = $("<tr");
// var td1 = $(<td>).text(words);
// var td2 = $(<td>).text(words);
//     row.append(td1).append(td2)
//     tbody.append(row)
//     }
