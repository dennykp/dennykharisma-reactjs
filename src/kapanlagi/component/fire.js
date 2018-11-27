import firebase from 'firebase'
  // Initialize Firebase
 const config = {
    apiKey: "AIzaSyC4ClqOhKE2dNKiTAug1vBo9a8rQmRwscs",
    authDomain: "login-de9ad.firebaseapp.com",
    databaseURL: "https://login-de9ad.firebaseio.com",
    projectId: "login-de9ad",
    storageBucket: "login-de9ad.appspot.com",
    messagingSenderId: "158934089280"
  };
  
const fire =  firebase.initializeApp(config);
export default fire;