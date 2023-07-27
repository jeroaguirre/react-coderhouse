import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuYPF7RJZsNACEfeO3PzUawAnl4pDi4eA",
    authDomain: "nippon-23a02.firebaseapp.com",
    projectId: "nippon-23a02",
    storageBucket: "nippon-23a02.appspot.com",
    messagingSenderId: "864118544311",
    appId: "1:864118544311:web:a1c251e4fa6f4b814dba32",
    measurementId: "G-FFHVJP5G4B"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}