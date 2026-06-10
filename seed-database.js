import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
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

async function seedCollection(colName, list) {
  console.log(`Seeding collection "${colName}" with ${list.length} documents...`);
  for (const item of list) {
    const docId = item.id || `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    await setDoc(doc(db, colName, docId), item);
  }
}

async function seedSingleDocument(colName, docId, data) {
  console.log(`Seeding single document "${colName}/${docId}"...`);
  await setDoc(doc(db, colName, docId), data);
}

async function seedAll() {
  try {
    console.log("Starting database seeding process...");

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
