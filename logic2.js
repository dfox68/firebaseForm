var x = location.protocol;
console.log(x);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC_PB8vCA97DGt-uWAWq5s1L347thWX-Ig",
  authDomain: "fir-auth-4ed23.firebaseapp.com",
  databaseURL: "https://fir-auth-4ed23.firebaseio.com",
  projectId: "fir-auth-4ed23",
  storageBucket: "",
  messagingSenderId: "736577492020"
};
firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();

$(document).ready(function() {

  // Get Elements
  var emailInput = document.getElementById('emailInput');
  var passwordInput = document.getElementById('passwordInput');
  var btnLogin = document.getElementById('btnLogin');
  var btnSignUp = document.getElementById('btnSignUp');
  var btnLogout = document.getElementById('btnLogout');

  var btnLoginGoog = document.getElementById("btnLoginGoog");

  $("#btnLoginGoog").on("click", function() {

    //alert("test");
    login();
    function login() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });


    // function login() {
    //   console.log("testing1");
    //   let provider = new firebase.auth.GoogleAuthProvider();
    //   provider.addScope('profile');
    //   provider.addScope('email');
    //   firebase.auth().signInWithPopup(provider).then(function(result) {
    //     console.log("testing2");
    //     user = result.user;
    //     let updateStatus = database.ref("users/" + user.uid + "/status");
    //     updateStatus.set("online");
    //     updateStatus.onDisconnect().set("offline");
    //   });
    // }
  }
});
});
