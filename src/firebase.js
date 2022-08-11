import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAUwYU_LfUfNYHv5VTwYvVxdRpPrf8IAo0",
    authDomain: "to-do-app-139ad.firebaseapp.com",
    projectId: "to-do-app-139ad",
    storageBucket: "to-do-app-139ad.appspot.com",
    messagingSenderId: "471801058640",
    appId: "1:471801058640:web:02d5e8a64c3c54b9790855",
    measurementId: "G-SH2LJZ4TLK"
  };

  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)

 const provider = new GoogleAuthProvider();

 export const signInWithGoogle = () => {
   signInWithPopup(auth, provider)
     .then((result) => {
       const name = result.user.displayName;
       const email = result.user.email;
       
 
       localStorage.setItem("name", name);
       localStorage.setItem("email", email);
      
     })
     .catch((error) => {
       console.log(error);
     });
 };






  const db = getFirestore(app);
  
  export { db };