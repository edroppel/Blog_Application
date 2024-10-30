
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAKMQrYymuNA80Q_FWcd_HHg_JlnMMuf9o",
    authDomain: "hw-3-88a76.firebaseapp.com",
    projectId: "hw-3-88a76",
    storageBucket: "hw-3-88a76.appspot.com",
    messagingSenderId: "38444681664",
    appId: "1:38444681664:web:c4a8f1b6a1ec0ddbc06025",
    measurementId: "G-HYB4T98CVN"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)