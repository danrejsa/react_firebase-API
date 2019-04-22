import firebase from 'firebase';
  // Initialize Firebase
 const  config = {
    apiKey: "AIzaSyAhPsT24uwTEeEpoWzNK4wOUFj7WBYKOg8",
    authDomain: "chatapp-8043e.firebaseapp.com",
    databaseURL: "https://chatapp-8043e.firebaseio.com",
    projectId: "chatapp-8043e",
    storageBucket: "chatapp-8043e.appspot.com",
    messagingSenderId: "947700179342"
  };
  const fire = firebase.initializeApp(config);
export default fire;