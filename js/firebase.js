console.log("firebase.js ready to roll!")
// Connects to the firebase DB

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDzxeE3gBHUQfyRB_1CWvqEpQSo38tGHls",
    authDomain: "hiphop-8f5da.firebaseapp.com",
    databaseURL: "https://hiphop-8f5da.firebaseio.com",
    storageBucket: "hiphop-8f5da.appspot.com",
    messagingSenderId: "459642016287"
  };
  firebase.initializeApp(config);

//this is the whole database
var database = firebase.database();

//we want to grab only the "people" part of the DB
var peopleData = database.ref('people');

//create a list of people
var peopleList = []; 

//load all the children of "people"
//keep listening for new children
peopleData.on('child_added', function(childData){
    //run these instruction for each child
//    console.table( childData.val() );
    var person = childData.val(); // extract data about the person
    peopleList.push( person ); // add the peron to the people 
});