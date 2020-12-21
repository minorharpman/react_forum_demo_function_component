import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDB0WiIU_6BpQUT-2LKS-6SgKQMtuGr5n0",
  authDomain: "react-forum-demo-42cd4.firebaseapp.com",
  projectId: "react-forum-demo-42cd4",
  storageBucket: "react-forum-demo-42cd4.appspot.com",
  messagingSenderId: "686059240054",
  appId: "1:686059240054:web:9170a3b28236bc2abf7d57",
  measurementId: "G-EVHWQ35BR5",
};
const initFirebase = firebase.initializeApp(firebaseConfig);
const db = initFirebase.firestore();
export default db;