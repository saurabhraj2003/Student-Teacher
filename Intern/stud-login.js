import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDHq1TslGwTYAZcA3iFVgBQfORwyppu-hk",
    authDomain: "student-teacher-appointm-33b6b.firebaseapp.com",
    projectId: "student-teacher-appointm-33b6b",
    storageBucket: "student-teacher-appointm-33b6b.appspot.com",
    messagingSenderId: "329940925787",
    appId: "1:329940925787:web:0f9e4ff951693751ee6e7e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
var check = document.getElementById("teacher")

window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
  .then((success) => {
    // alert("Login Complete")
    // var aaaa =  (success.user.uid);
    //   // localStorage.setItem("uid",aaaa)
    //   console.log(name)

      window.location.replace('after-stud-login.html')
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
    alert("Error occured" + errorCode + errorMessage)
  });

  console.log(obj);
}