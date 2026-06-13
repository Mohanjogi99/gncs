import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  initialUsers,
  initialNotices,
  initialNewsEvents,
  initialDepartments,
  initialFaculty,
  initialCourses,
  initialDownloads,
  initialGallery,
  initialJanbhagidari,
  initialOfficeStaff,
  initialCommittees,
  initialReqDocs,
  initialIqacDetails,
  initialAqarDocs,
  initialSsrDocs,
  initialLibraryRules,
  initialResearchCommittee,
  initialResearchPublications,
  initialResearchProjects,
  initialResearchEvents,
  initialHelpDesk
} from "./src/data/mockData.js";

// Read Firebase Config from firebase.js
import { db } from "./src/firebase.js";

// Safety check to prevent accidental overwrites on production
if (db.app.options.projectId === "gncs-portal") {
  console.error("\x1b[31m%s\x1b[0m", "======================================================================");
  console.error("\x1b[31m%s\x1b[0m", "FATAL ERROR: You are trying to run the seeding script on the PRODUCTION database (gncs-portal)!");
  console.error("\x1b[31m%s\x1b[0m", "To protect live data, this script has been blocked.");
  console.error("\x1b[31m%s\x1b[0m", "If you really want to seed the production database, please modify seed-database.js to bypass this check.");
  console.error("\x1b[31m%s\x1b[0m", "======================================================================");
  process.exit(1);
}

async function seedCollection(colName, list) {
  console.log(`Seeding collection "${colName}" with ${list.length} documents...`);
  for (const item of list) {
    const docId = item.id || `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    await setDoc(doc(db, colName, docId), item);
  }
}

async function seedUsers(list) {
  console.log(`Seeding collection "users" with ${list.length} documents...`);
  for (const item of list) {
    if (item.email) {
      const docId = item.email.toLowerCase();
      await setDoc(doc(db, "users", docId), item);
    }
  }
}

async function seedSingleDocument(colName, docId, data) {
  console.log(`Seeding single document "${colName}/${docId}"...`);
  await setDoc(doc(db, colName, docId), data);
}

async function seedAll() {
  try {
    console.log("Starting database seeding process...");

    await seedUsers(initialUsers);
    await seedCollection("notices", initialNotices);
    await seedCollection("newsEvents", initialNewsEvents);
    await seedCollection("departments", initialDepartments);
    await seedCollection("faculty", initialFaculty);
    await seedCollection("courses", initialCourses);
    await seedCollection("downloads", initialDownloads);
    await seedCollection("gallery", initialGallery);
    await seedCollection("janbhagidari", initialJanbhagidari);
    await seedCollection("officeStaff", initialOfficeStaff);
    await seedCollection("committees", initialCommittees);
    await seedCollection("reqDocs", initialReqDocs);
    await seedCollection("aqarDocs", initialAqarDocs);
    await seedCollection("ssrDocs", initialSsrDocs);
    await seedCollection("libraryRules", initialLibraryRules);
    await seedCollection("researchPublications", initialResearchPublications);
    await seedCollection("researchProjects", initialResearchProjects);
    await seedCollection("researchEvents", initialResearchEvents);
    await seedCollection("admissionHelpDesk", initialHelpDesk);

    // Seed single document details
    await seedSingleDocument("iqacDetails", "details", initialIqacDetails);
    await seedSingleDocument("researchCommittee", "details", initialResearchCommittee);

    console.log("✓ Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedAll();

