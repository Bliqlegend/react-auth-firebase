import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDbnczh1RswFgzNFxe1UsfvbYJPLPkre64",
    authDomain: "react-firebase-auth-7a93c.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-7a93c-default-rtdb.firebaseio.com",
    projectId: "react-firebase-auth-7a93c",
    storageBucket: "react-firebase-auth-7a93c.appspot.com",
    messagingSenderId: "635602419534",
    appId: "1:635602419534:web:3e36189f15ec9f6996e81f"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;