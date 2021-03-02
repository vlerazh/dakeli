import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDkMUUh9i2z9XxfUUTCrdvdL0rCV1AnCFE",
  authDomain: "dakeli.firebaseapp.com",
  projectId: "dakeli",
  storageBucket: "dakeli.appspot.com",
  messagingSenderId: "584309415794",
  appId: "1:584309415794:web:b579bc36f1d089889c07eb",
  measurementId: "G-KB3JFR730X"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebaseApp.firestore().settings({timestampsInSnapshots:true})

  export default firebaseApp.firestore()