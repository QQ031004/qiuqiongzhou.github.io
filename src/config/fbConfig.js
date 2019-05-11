import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD7g52zjOuE-1Fb3UsMwn8-7YcnqejtqrA",
    authDomain: "qq-testapp-97a98.firebaseapp.com",
    databaseURL: "https://qq-testapp-97a98.firebaseio.com",
    projectId: "qq-testapp-97a98",
    storageBucket: "qq-testapp-97a98.appspot.com",
    messagingSenderId: "288771212150"
  };


  firebase.initializeApp(config);
  //firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
