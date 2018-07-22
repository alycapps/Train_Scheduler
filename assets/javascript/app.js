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
    var trainname = $("#trainnameloc").val().trim();
    var destination = $("#destinationloc").val().trim();
    var traintime = $("#traintimeloc").val().trim();
    var frequency = $("#frequencyloc").val().trim();

    //add details to firebase
    database.ref().push({
        name: trainname,
        destination: destination,
        traintime: traintime,
        frequency: frequency,
    });

    //clear form after submission
    $("#trainnameloc").val("");
    $("#destinationloc").val("");
    $("#traintimeloc").val("");
    $("#frequencyloc").val("");
});


//add details to page
database.ref().on("child_added", function(snapshot) {
    //first train time
    var ftime = snapshot.val().traintime;
    var convftime = moment(ftime, "HH:mm").subtract(1, "years");
    var freq = snapshot.val().frequency;
    var currentTime = moment().format("hh:mm");

    //difference in time between now and first train
    var timediff = moment().diff(moment(convftime), "minutes")

    //Remainder of difference in time divided by frequency
    var minaway = timediff % freq;
    var nexttime = moment().add(minaway, "minutes").format("hh:mm")

    $("#table").append("<tr>" + "<td>" + snapshot.val().name + "<td>" + snapshot.val().destination + "<td>" + snapshot.val().frequency + "<td>" + nexttime + "<td>" + minaway + " min" + "</td>");
})