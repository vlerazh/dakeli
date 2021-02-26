import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyByQnzeAxsVFVBHIRfMqZXpWPmYJg_32Cw",
    authDomain: "dakeli-menu.firebaseapp.com",
    projectId: "dakeli-menu",
    storageBucket: "dakeli-menu.appspot.com",
    messagingSenderId: "1011445142674",
    appId: "1:1011445142674:web:b4cadbedd782aa8564c24b",
    measurementId: "G-W2SRBKP2MR"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebaseApp.firestore().settings({timestampsInSnapshots:true})

  export default firebaseApp.firestore()