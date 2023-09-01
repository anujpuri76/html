
//import { initializeApp } from 'firebase/app';
//import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//const functions = require('https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js');
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPhlpb8YBa_Q-yvWu09jvxdO4iiftSo3U",
    authDomain: "scholarshipapp-48c20.firebaseapp.com",
    projectId: "scholarshipapp-48c20",
    storageBucket: "scholarshipapp-48c20.appspot.com",
    messagingSenderId: "57795290768",
    appId: "1:57795290768:web:a58dea4884dca945795a15"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


function login() {
    var username = $('#username').val();
    var password = $('#pass').val();
    // alert(username);
    //(password);
    if (username && password) {
        firebaseAuth(username,password);
    }else{
        $('#message').text('Please enter user details');
    }
}

function firebaseAuth(username,password){
    firebase.auth().signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                // Signed in
                // var user = userCredential.user;
                alert('success');
                console.log(userCredential);
                localStorage.setItem('userId',userCredential.uid);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                $('#message').text('Login not succcessfull');
            });
}