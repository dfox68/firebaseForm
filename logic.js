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

// Get Elements
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogin = document.getElementById('btnLogin');
var btnRegister = document.getElementById('btnRegister');
var btnLogout = document.getElementById('btnLogout');

function LoginEmailPassword() {

// Get email and password
var email = txtEmail.value;
var pass = txtPassword.value;
var auth = firebase.auth();

// Login with email and password
  var promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(console.log(error.message));
}

//register event
function registerWithEmailPassword() {

// Get email and password
var email = txtEmail.value;
var pass = txtPassword.value;
var auth = firebase.auth();
// Login with email and password
  var promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(console.log(error.message));
}

// Real time listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    //btnLogout.classList.remove("hide");
  }
  else {
    console.log("not logged in");
    btnLogout.classList.add("hide");
  }
});

function googleSignin() {

   firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

      console.log(token);
      console.log(user);
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(error.code);
      console.log(error.message);
   });
}

function googleSignout() {
   firebase.auth().signOut()

   .then(function() {
      console.log('Signout Succesfull');
   }, function(error) {
      console.log('Signout Failed');
   });
}
