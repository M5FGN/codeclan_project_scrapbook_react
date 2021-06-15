import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5eqAwWktNWIlFyaRPI7T6RJ44hE5kxIM",
  authDomain: "scrapbook-245c8.firebaseapp.com",
  projectId: "scrapbook-245c8",
  storageBucket: "scrapbook-245c8.appspot.com",
  messagingSenderId: "534082142774",
  appId: "1:534082142774:web:486ae44e242b3204330e97",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
