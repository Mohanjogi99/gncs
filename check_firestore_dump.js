import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgE0E4jx5mkPvehLi0WMe8whsmE-i6PS0",
  authDomain: "gncs-portal.firebaseapp.com",
  projectId: "gncs-portal",
  storageBucket: "gncs-portal.firebasestorage.app",
  messagingSenderId: "809412263741",
  appId: "1:809412263741:web:48df8970c87335d9490f54"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function run() {
  const collections = ["notices", "newsEvents", "gallery", "downloads", "faculty"];
  try {
    for (const colName of collections) {
      console.log(`\n=== COLLECTION: ${colName} ===`);
      const querySnapshot = await getDocs(collection(db, colName));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        let displayInfo = "";
        if (colName === "notices") {
          displayInfo = `Title: ${data.titleEnglish} (${data.publishDate || "No Date"})`;
        } else if (colName === "newsEvents") {
          displayInfo = `Title: ${data.titleEnglish} (${data.eventDate || "No Date"})`;
        } else if (colName === "gallery") {
          displayInfo = `Album: ${data.albumTitle} (${data.eventDate || "No Date"})`;
        } else if (colName === "downloads") {
          displayInfo = `Title: ${data.titleEnglish} (Category: ${data.category})`;
        } else if (colName === "faculty") {
          displayInfo = `Name: ${data.name} (Dept: ${data.department})`;
        }
        console.log(`- ID: ${doc.id} | ${displayInfo} | Created: ${data.createdAt || data.publishDate || "No timestamp"}`);
      });
    }
    process.exit(0);
  } catch (error) {
    console.error("Error dumping DB:", error);
    process.exit(1);
  }
}

run();
