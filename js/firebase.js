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

//we want to grab only the "albums" part of the DB
var albumsData = database.ref('albums');

//create a list of albums
var albumsList = []; 

//load all the children of "albums"
//keep listening for new children
albumsData.on('child_added', function(childData){
    //run these instruction for each child
//    console.table( childData.val() );
    var album = childData.val(); // extract data about the person
    albumsList.push( album ); // add the album to the albums 
});