import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgE0E4jx5mkPvehLi0WMe8whsmE-i6PS0",
  authDomain: "gncs-portal.firebaseapp.com",
  projectId: "gncs-portal",
  storageBucket: "gncs-portal.firebasestorage.app",
  messagingSenderId: "809412263741",
  appId: "1:809412263741:web:48df8970c87335d9490f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
