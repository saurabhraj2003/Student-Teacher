import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDHq1TslGwTYAZcA3iFVgBQfORwyppu-hk",
    authDomain: "student-teacher-appointm-33b6b.firebaseapp.com",
    databaseURL: "https://student-teacher-appointm-33b6b-default-rtdb.firebaseio.com",
    projectId: "student-teacher-appointm-33b6b",
    storageBucket: "student-teacher-appointm-33b6b.appspot.com",
    messagingSenderId: "329940925787",
    appId: "1:329940925787:web:0f9e4ff951693751ee6e7e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const db = getDatabase(app);
 
  // Appointment 
  const a_form = document.getElementById("a-form")
  const app_submit = document.getElementById("appo-submit");
  const a_name = document.getElementById("a-name");
  const a_teach_name = document.getElementById("a-teach-name");
  const a_roll = document.getElementById("a-roll");
  const a_date= document.getElementById("a-date");

  // Message 
  const m_form = document.getElementById("m-form")
  const mass_submit = document.getElementById("mass-submit");
  const m_name = document.getElementById("m-name");
  const m_teach_name = document.getElementById("m-teach-name");
  const message = document.getElementById("message");
  
  app_submit.addEventListener("click", function(e){
    console.log(a_name.value);
    console.log("clicked")
    e.preventDefault();
        set(ref(db, `Teachers/${a_teach_name.value}/Appointments/${a_roll.value}`),
             {
              Student_Name: a_name.value,
              Roll_No: a_roll.value,
              Appointment_date: a_date.value
             });
          alert("Booked Sucessfully !");
    a_form.reset(); 
  })

  mass_submit.addEventListener("click", function(e){
    console.log(m_name.value);
    console.log("clicked")
    e.preventDefault();
        set(ref(db, `Teachers/${m_teach_name.value}/Massages/${m_name.value}`),
             {
              Student_Name: m_name.value,
              Message: message.value
             });
          alert("Message send Sucessfully !");
    m_form.reset(); 
  })

  window.logout = function () {
    signOut(auth)
      .then(function () {
        alert("Logout Successfully");
        window.location.href = "student-login.html";
      })
      .catch(function (err) {
        console.log(err);
      });
  };
