
import firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/storage";
// import { getStorage, ref, uploadBytes } from "firebase/storage";

// import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAljRkn9KR9DqyGVzdJCexxAWAo_kwhHSY",
  
    authDomain: "chat-for-international-focus.firebaseapp.com",
  
    projectId: "chat-for-international-focus",
  
    storageBucket: "chat-for-international-focus.appspot.com",
  
    messagingSenderId: "380899558642",
  
    appId: "1:380899558642:web:bcd65eaa6d8a4d472bbc6b"
  
  };
  

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
// const storage = getStorage();
// const storageRef = ref(storage, 'UserImage');


export {db, timestamp};    

