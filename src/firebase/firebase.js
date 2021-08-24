import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//   };

  const firebaseConfig1 = {
    apiKey: "AIzaSyAh-YnvvPmZ0l3B8AmAgiumsvOnF4AbV80",
    authDomain: "1:1026234828626:web:e614bdf8e7cf5e9feadc8b",
    projectId: "web-project-react-50381",
    storageBucket: "web-project-react-50381.appspot.com",
    messagingSenderId: "G-75B3Y4HPQT",
    appId: "1:1026234828626:web:e614bdf8e7cf5e9feadc8b",
    measurementId: "G-75B3Y4HPQT"
  };

  class Firebase {
      constructor(){
        if(!app.apps.length){
          app.initializeApp(firebaseConfig1);
        }
        this.db = app.firestore();
        this.auth = app.auth();
      }

      isLogged(){
        return new Promise(resolve => {
          this.auth.onAuthStateChanged(resolve);
        });
      }
  }



  export default Firebase;