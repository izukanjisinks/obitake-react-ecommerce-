import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCmvG_uUolh9UzzdZ6VLaiWngOW66g1dHY",
    authDomain: "react-ecommerce-site-9ba82.firebaseapp.com",
    projectId: "react-ecommerce-site-9ba82",
    storageBucket: "react-ecommerce-site-9ba82.appspot.com",
    messagingSenderId: "928648930436",
    appId: "1:928648930436:web:34c96ee8c5fdf37bb74ed1",
    measurementId: "G-04D9ERS6MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);