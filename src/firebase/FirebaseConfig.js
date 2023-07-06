// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-qpLBhHAdHOJJEjEaBApv2-sZ8eH1DdY",
    authDomain: "learning-react-74028.firebaseapp.com",
    projectId: "learning-react-74028",
    storageBucket: "learning-react-74028.appspot.com",
    messagingSenderId: "689743430915",
    appId: "1:689743430915:web:d1f51def103d529f9d5536",
    measurementId: "G-9QR0WCBBNH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);