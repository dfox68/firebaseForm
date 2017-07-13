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

$(document).ready(function() {

  // Get Elements
  var emailInput = document.getElementById('emailInput');
  var passwordInput = document.getElementById('passwordInput');
  var btnLogin = document.getElementById('btnLogin');
  var btnSignUp = document.getElementById('btnSignUp');
  var btnLogout = document.getElementById('btnLogout');

  var btnLoginGoog = document.getElementById("btnLoginGoog");

  $("#btnLoginGoog").on("click", function() {

    alert("test");
    login();
    function login() {
      console.log("testing1");
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log("testing2");
        user = result.user;
        let updateStatus = database.ref("users/" + user.uid + "/status");
        updateStatus.set("online");
        updateStatus.onDisconnect().set("offline");
      });
    }
  });
});
