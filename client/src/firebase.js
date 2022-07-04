import firebase from 'firebase/compat/app'
// import 'firebase/firebase-storage'

var config = {
        apiKey: "AIzaSyANWCUU3kM-mcsaOyu2UYQglUTGY5uWs_E",
        authDomain: "bestpet-aa3a8.firebaseapp.com",
        databaseURL: "https://bestpet-aa3a8.firebaseio.com",
        projectId: "bestpet-aa3a8",
        storageBucket: "bestpet-aa3a8.appspot.com",
        messagingSenderId: "108777475545"
    };
    if(!firebase.apps.length){
        firebase.initializeApp(config);
    }


    export default firebase