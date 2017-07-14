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
var x = 5;
console.log(x);

function googleSignin() {

   //console.log("test");
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
