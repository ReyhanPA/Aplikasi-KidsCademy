import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDsv2JzdHRusNkH7Uxo011IRgEabkD2usI",
  authDomain: "kidscademy-dev.firebaseapp.com",
  projectId: "kidscademy-dev",
  storageBucket: "kidscademy-dev.appspot.com",
  messagingSenderId: "592399717445",
  appId: "1:592399717445:web:4f2b465d09f0202dd33f2c",
  measurementId: "G-0W8TZG9P07"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
