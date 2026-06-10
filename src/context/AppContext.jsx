import React, { createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  deleteDoc,
  updateDoc
} from "firebase/firestore";
import {
  initialUsers,
  initialNotices,
  initialNewsEvents,
  initialDepartments,
  initialFaculty,
  initialCourses,
  initialDownloads,
  initialGallery,
  initialContactMessages,
  translations,
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
} from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Language State
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("gncs_language") || "hi";
  });

  // Auth State
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("gncs_user");
    return saved ? JSON.parse(saved) : null;
  });

  // Database Collections States
  const [notices, setNotices] = useState([]);
  const [newsEvents, setNewsEvents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [courses, setCourses] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [janbhagidari, setJanbhagidari] = useState([]);
  const [officeStaff, setOfficeStaff] = useState([]);
  const [committees, setCommittees] = useState([]);
  const [reqDocs, setReqDocs] = useState([]);
  const [iqacDetails, setIqacDetails] = useState({});
  const [aqarDocs, setAqarDocs] = useState([]);
  const [ssrDocs, setSsrDocs] = useState([]);
  const [libraryRules, setLibraryRules] = useState([]);
  const [researchCommittee, setResearchCommittee] = useState({});
  const [researchPublications, setResearchPublications] = useState([]);
  const [researchProjects, setResearchProjects] = useState([]);
  const [researchEvents, setResearchEvents] = useState([]);
  const [admissionHelpDesk, setAdmissionHelpDesk] = useState([]);

  // Initialize DB from Firestore and migrate if first-time setup for this browser
  useEffect(() => {
    const initializeAppDatabase = async () => {
      try {
        const isMigrated = localStorage.getItem("gncs_firestore_migrated");

        if (!isMigrated) {
          console.log("Migrating local storage data to Firestore...");
          
          const loadLocalOrFallback = (key, fallback) => {
            const localData = localStorage.getItem(`gncs_db_${key}`);
            if (localData) {
              try {
                return JSON.parse(localData);
              } catch (e) {
                console.error("Error parsing local storage key", key, e);
              }
            }
            return fallback;
          };

          const migrationData = [
            { col: "notices", data: loadLocalOrFallback("notices", initialNotices) },
            { col: "newsEvents", data: loadLocalOrFallback("newsEvents", initialNewsEvents) },
            { col: "departments", data: loadLocalOrFallback("departments", initialDepartments) },
            { col: "faculty", data: loadLocalOrFallback("faculty", initialFaculty) },
            { col: "courses", data: loadLocalOrFallback("courses", initialCourses) },
            { col: "downloads", data: loadLocalOrFallback("downloads", initialDownloads) },
            { col: "gallery", data: loadLocalOrFallback("gallery", initialGallery) },
            { col: "contactMessages", data: loadLocalOrFallback("contactMessages", initialContactMessages) },
            { col: "janbhagidari", data: loadLocalOrFallback("janbhagidari", initialJanbhagidari) },
            { col: "officeStaff", data: loadLocalOrFallback("officeStaff", initialOfficeStaff) },
            { col: "committees", data: loadLocalOrFallback("committees", initialCommittees) },
            { col: "reqDocs", data: loadLocalOrFallback("reqDocs", initialReqDocs) },
            { col: "aqarDocs", data: loadLocalOrFallback("aqarDocs", initialAqarDocs) },
            { col: "ssrDocs", data: loadLocalOrFallback("ssrDocs", initialSsrDocs) },
            { col: "libraryRules", data: loadLocalOrFallback("libraryRules", initialLibraryRules) },
            { col: "researchPublications", data: loadLocalOrFallback("researchPublications", initialResearchPublications) },
            { col: "researchProjects", data: loadLocalOrFallback("researchProjects", initialResearchProjects) },
            { col: "researchEvents", data: loadLocalOrFallback("researchEvents", initialResearchEvents) },
            { col: "admissionHelpDesk", data: loadLocalOrFallback("admissionHelpDesk", initialHelpDesk) }
          ];

          for (const m of migrationData) {
            for (const item of m.data) {
              if (item && item.id) {
                await setDoc(doc(db, m.col, item.id), item);
              }
            }
          }

          // Migrate objects
          const iqacLocal = loadLocalOrFallback("iqacDetails", initialIqacDetails);
          await setDoc(doc(db, "iqacDetails", "details"), iqacLocal);

          const researchCommLocal = loadLocalOrFallback("researchCommittee", initialResearchCommittee);
          await setDoc(doc(db, "researchCommittee", "details"), researchCommLocal);

          // Mark as migrated locally so it doesn't run again
          localStorage.setItem("gncs_firestore_migrated", "true");
          console.log("Migration to Firestore complete!");
        }

        // Now load everything from Firestore
        const fetchCollection = async (colName) => {
          const snap = await getDocs(collection(db, colName));
          const list = [];
          snap.forEach((doc) => {
            list.push(doc.data());
          });
          return list;
        };

        const loadedNotices = await fetchCollection("notices");
        setNotices(loadedNotices.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));

        const loadedNews = await fetchCollection("newsEvents");
        setNewsEvents(loadedNews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));

        setDepartments(await fetchCollection("departments"));
        setFaculty(await fetchCollection("faculty"));
        setCourses(await fetchCollection("courses"));
        setDownloads(await fetchCollection("downloads"));
        setGallery(await fetchCollection("gallery"));
        setContactMessages(await fetchCollection("contactMessages"));
        setJanbhagidari(await fetchCollection("janbhagidari"));
        setOfficeStaff(await fetchCollection("officeStaff"));
        setCommittees(await fetchCollection("committees"));
        setReqDocs(await fetchCollection("reqDocs"));

        const iqacDoc = await getDoc(doc(db, "iqacDetails", "details"));
        if (iqacDoc.exists()) setIqacDetails(iqacDoc.data());

        setAqarDocs(await fetchCollection("aqarDocs"));
        setSsrDocs(await fetchCollection("ssrDocs"));
        setLibraryRules(await fetchCollection("libraryRules"));

        const resCommDoc = await getDoc(doc(db, "researchCommittee", "details"));
        if (resCommDoc.exists()) setResearchCommittee(resCommDoc.data());

        setResearchPublications(await fetchCollection("researchPublications"));
        setResearchProjects(await fetchCollection("researchProjects"));
        setResearchEvents(await fetchCollection("researchEvents"));
        setAdmissionHelpDesk(await fetchCollection("admissionHelpDesk"));

      } catch (error) {
        console.error("Error loading Firestore database:", error);
      }
    };

    initializeAppDatabase();
  }, []);

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("gncs_language", lang);
    document.documentElement.lang = lang;
  };

  // Translation helper
  const t = (key) => {
    return translations[language]?.[key] || translations["hi"]?.[key] || key;
  };

  // Authentication Mock Methods
  const login = (email, password) => {
    const user = initialUsers.find((u) => {
      const emailMatch = u.email.toLowerCase() === email.toLowerCase();
      const expectedPassword = u.password || "password123";
      return emailMatch && password === expectedPassword;
    });
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("gncs_user", JSON.stringify(user));
      return { success: true, user };
    }
    return { success: false, message: "Invalid email or password" };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("gncs_user");
  };

  // CRUD for Notices
  const addNotice = async (notice) => {
    const newNotice = {
      ...notice,
      id: `notice-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    try {
      await setDoc(doc(db, "notices", newNotice.id), newNotice);
      setNotices((prev) => [newNotice, ...prev]);
    } catch (e) {
      console.error("Error adding notice:", e);
    }
  };

  const updateNotice = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "notices", id), updatedFields);
      setNotices((prev) => prev.map((n) => (n.id === id ? { ...n, ...updatedFields } : n)));
    } catch (e) {
      console.error("Error updating notice:", e);
    }
  };

  const deleteNotice = async (id) => {
    try {
      await deleteDoc(doc(db, "notices", id));
      setNotices((prev) => prev.filter((n) => n.id !== id));
    } catch (e) {
      console.error("Error deleting notice:", e);
    }
  };

  // CRUD for News & Events
  const addNewsEvent = async (event) => {
    const newEvent = {
      ...event,
      id: `news-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    try {
      await setDoc(doc(db, "newsEvents", newEvent.id), newEvent);
      setNewsEvents((prev) => [newEvent, ...prev]);
    } catch (e) {
      console.error("Error adding news event:", e);
    }
  };

  const updateNewsEvent = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "newsEvents", id), updatedFields);
      setNewsEvents((prev) => prev.map((e) => (e.id === id ? { ...e, ...updatedFields } : e)));
    } catch (e) {
      console.error("Error updating news event:", e);
    }
  };

  const deleteNewsEvent = async (id) => {
    try {
      await deleteDoc(doc(db, "newsEvents", id));
      setNewsEvents((prev) => prev.filter((e) => e.id !== id));
    } catch (e) {
      console.error("Error deleting news event:", e);
    }
  };

  // CRUD for Faculty
  const addFaculty = async (fac) => {
    const newFac = {
      ...fac,
      id: `fac-${Date.now()}`
    };
    try {
      await setDoc(doc(db, "faculty", newFac.id), newFac);
      setFaculty((prev) => [...prev, newFac]);
    } catch (e) {
      console.error("Error adding faculty:", e);
    }
  };

  const updateFaculty = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "faculty", id), updatedFields);
      setFaculty((prev) => prev.map((f) => (f.id === id ? { ...f, ...updatedFields } : f)));
    } catch (e) {
      console.error("Error updating faculty:", e);
    }
  };

  const deleteFaculty = async (id) => {
    try {
      await deleteDoc(doc(db, "faculty", id));
      setFaculty((prev) => prev.filter((f) => f.id !== id));
    } catch (e) {
      console.error("Error deleting faculty:", e);
    }
  };

  // CRUD for Courses
  const addCourse = async (course) => {
    const newCourse = {
      ...course,
      id: `course-${Date.now()}`
    };
    try {
      await setDoc(doc(db, "courses", newCourse.id), newCourse);
      setCourses((prev) => [...prev, newCourse]);
    } catch (e) {
      console.error("Error adding course:", e);
    }
  };

  const updateCourse = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "courses", id), updatedFields);
      setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, ...updatedFields } : c)));
    } catch (e) {
      console.error("Error updating course:", e);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await deleteDoc(doc(db, "courses", id));
      setCourses((prev) => prev.filter((c) => c.id !== id));
    } catch (e) {
      console.error("Error deleting course:", e);
    }
  };

  // CRUD for Downloads
  const addDownload = async (down) => {
    const newDown = {
      ...down,
      id: `down-${Date.now()}`,
      createdAt: new Date().toISOString().split("T")[0]
    };
    try {
      await setDoc(doc(db, "downloads", newDown.id), newDown);
      setDownloads((prev) => [newDown, ...prev]);
    } catch (e) {
      console.error("Error adding download:", e);
    }
  };

  const updateDownload = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "downloads", id), updatedFields);
      setDownloads((prev) => prev.map((d) => (d.id === id ? { ...d, ...updatedFields } : d)));
    } catch (e) {
      console.error("Error updating download:", e);
    }
  };

  const deleteDownload = async (id) => {
    try {
      await deleteDoc(doc(db, "downloads", id));
      setDownloads((prev) => prev.filter((d) => d.id !== id));
    } catch (e) {
      console.error("Error deleting download:", e);
    }
  };

  // CRUD for Gallery
  const addGalleryItem = async (item) => {
    const newItem = {
      ...item,
      id: `gal-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    try {
      await setDoc(doc(db, "gallery", newItem.id), newItem);
      setGallery((prev) => [newItem, ...prev]);
    } catch (e) {
      console.error("Error adding gallery item:", e);
    }
  };

  const deleteGalleryItem = async (id) => {
    try {
      await deleteDoc(doc(db, "gallery", id));
      setGallery((prev) => prev.filter((g) => g.id !== id));
    } catch (e) {
      console.error("Error deleting gallery item:", e);
    }
  };

  const updateGalleryItem = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "gallery", id), updatedFields);
      setGallery((prev) => prev.map((g) => (g.id === id ? { ...g, ...updatedFields } : g)));
    } catch (e) {
      console.error("Error updating gallery item:", e);
    }
  };

  // CRUD for Contact Messages
  const addContactMessage = async (msg) => {
    const newMsg = {
      ...msg,
      id: `msg-${Date.now()}`,
      status: "Pending",
      createdAt: new Date().toISOString()
    };
    try {
      await setDoc(doc(db, "contactMessages", newMsg.id), newMsg);
      setContactMessages((prev) => [newMsg, ...prev]);
    } catch (e) {
      console.error("Error adding contact message:", e);
    }
  };

  const updateContactMessageStatus = async (id, status) => {
    try {
      await updateDoc(doc(db, "contactMessages", id), { status });
      setContactMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
    } catch (e) {
      console.error("Error updating contact message status:", e);
    }
  };

  // CRUD for Departments
  const updateDepartment = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "departments", id), updatedFields);
      setDepartments((prev) => prev.map((d) => (d.id === id ? { ...d, ...updatedFields } : d)));
    } catch (e) {
      console.error("Error updating department:", e);
    }
  };

  // CRUD for Janbhagidari
  const addJanbhagidari = async (member) => {
    const newMember = {
      ...member,
      id: `jb-${Date.now()}`
    };
    try {
      await setDoc(doc(db, "janbhagidari", newMember.id), newMember);
      setJanbhagidari((prev) => [...prev, newMember]);
    } catch (e) {
      console.error("Error adding janbhagidari member:", e);
    }
  };

  const updateJanbhagidari = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "janbhagidari", id), updatedFields);
      setJanbhagidari((prev) => prev.map((m) => (m.id === id ? { ...m, ...updatedFields } : m)));
    } catch (e) {
      console.error("Error updating janbhagidari member:", e);
    }
  };

  const deleteJanbhagidari = async (id) => {
    try {
      await deleteDoc(doc(db, "janbhagidari", id));
      setJanbhagidari((prev) => prev.filter((m) => m.id !== id));
    } catch (e) {
      console.error("Error deleting janbhagidari member:", e);
    }
  };

  // CRUD for Office Staff
  const addOfficeStaff = async (staff) => {
    const newStaff = {
      ...staff,
      id: `os-${Date.now()}`
    };
    try {
      await setDoc(doc(db, "officeStaff", newStaff.id), newStaff);
      setOfficeStaff((prev) => [...prev, newStaff]);
    } catch (e) {
      console.error("Error adding office staff:", e);
    }
  };

  const updateOfficeStaff = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "officeStaff", id), updatedFields);
      setOfficeStaff((prev) => prev.map((s) => (s.id === id ? { ...s, ...updatedFields } : s)));
    } catch (e) {
      console.error("Error updating office staff:", e);
    }
  };

  const deleteOfficeStaff = async (id) => {
    try {
      await deleteDoc(doc(db, "officeStaff", id));
      setOfficeStaff((prev) => prev.filter((s) => s.id !== id));
    } catch (e) {
      console.error("Error deleting office staff:", e);
    }
  };

  // CRUD for Committees
  const addCommittee = async (committee) => {
    const newCommittee = {
      ...committee,
      id: `com-${Date.now()}`
    };
    try {
      await setDoc(doc(db, "committees", newCommittee.id), newCommittee);
      setCommittees((prev) => [...prev, newCommittee]);
    } catch (e) {
      console.error("Error adding committee:", e);
    }
  };

  const updateCommittee = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "committees", id), updatedFields);
      setCommittees((prev) => prev.map((c) => (c.id === id ? { ...c, ...updatedFields } : c)));
    } catch (e) {
      console.error("Error updating committee:", e);
    }
  };

  const deleteCommittee = async (id) => {
    try {
      await deleteDoc(doc(db, "committees", id));
      setCommittees((prev) => prev.filter((c) => c.id !== id));
    } catch (e) {
      console.error("Error deleting committee:", e);
    }
  };

  // CRUD for Required Documents
  const addReqDoc = async (docData) => {
    const newDoc = {
      ...docData,
      id: `rd-${Date.now()}`
    };
    try {
      await setDoc(doc(db, "reqDocs", newDoc.id), newDoc);
      setReqDocs((prev) => [...prev, newDoc]);
    } catch (e) {
      console.error("Error adding required document:", e);
    }
  };

  const updateReqDoc = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "reqDocs", id), updatedFields);
      setReqDocs((prev) => prev.map((d) => (d.id === id ? { ...d, ...updatedFields } : d)));
    } catch (e) {
      console.error("Error updating required document:", e);
    }
  };

  const deleteReqDoc = async (id) => {
    try {
      await deleteDoc(doc(db, "reqDocs", id));
      setReqDocs((prev) => prev.filter((d) => d.id !== id));
    } catch (e) {
      console.error("Error deleting required document:", e);
    }
  };

  // Update IQAC details
  const updateIqacDetails = async (updatedFields) => {
    try {
      const updated = { ...iqacDetails, ...updatedFields };
      await setDoc(doc(db, "iqacDetails", "details"), updated);
      setIqacDetails(updated);
    } catch (e) {
      console.error("Error updating IQAC details:", e);
    }
  };

  // AQAR CRUD
  const addAqarDoc = async (docData) => {
    const newDoc = { id: `aqar-${Date.now()}`, ...docData };
    try {
      await setDoc(doc(db, "aqarDocs", newDoc.id), newDoc);
      setAqarDocs((prev) => [...prev, newDoc]);
    } catch (e) {
      console.error("Error adding AQAR document:", e);
    }
  };

  const updateAqarDoc = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "aqarDocs", id), updatedFields);
      setAqarDocs((prev) => prev.map((d) => (d.id === id ? { ...d, ...updatedFields } : d)));
    } catch (e) {
      console.error("Error updating AQAR document:", e);
    }
  };

  const deleteAqarDoc = async (id) => {
    try {
      await deleteDoc(doc(db, "aqarDocs", id));
      setAqarDocs((prev) => prev.filter((d) => d.id !== id));
    } catch (e) {
      console.error("Error deleting AQAR document:", e);
    }
  };

  // SSR CRUD
  const addSsrDoc = async (docData) => {
    const newDoc = { id: `ssr-${Date.now()}`, ...docData };
    try {
      await setDoc(doc(db, "ssrDocs", newDoc.id), newDoc);
      setSsrDocs((prev) => [...prev, newDoc]);
    } catch (e) {
      console.error("Error adding SSR document:", e);
    }
  };

  const updateSsrDoc = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "ssrDocs", id), updatedFields);
      setSsrDocs((prev) => prev.map((d) => (d.id === id ? { ...d, ...updatedFields } : d)));
    } catch (e) {
      console.error("Error updating SSR document:", e);
    }
  };

  const deleteSsrDoc = async (id) => {
    try {
      await deleteDoc(doc(db, "ssrDocs", id));
      setSsrDocs((prev) => prev.filter((d) => d.id !== id));
    } catch (e) {
      console.error("Error deleting SSR document:", e);
    }
  };

  // Library Rules CRUD
  const addLibraryRule = async (rule) => {
    const newRule = { id: `lr-${Date.now()}`, ...rule };
    try {
      await setDoc(doc(db, "libraryRules", newRule.id), newRule);
      setLibraryRules((prev) => [...prev, newRule]);
    } catch (e) {
      console.error("Error adding library rule:", e);
    }
  };

  const updateLibraryRule = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "libraryRules", id), updatedFields);
      setLibraryRules((prev) => prev.map((r) => (r.id === id ? { ...r, ...updatedFields } : r)));
    } catch (e) {
      console.error("Error updating library rule:", e);
    }
  };

  const deleteLibraryRule = async (id) => {
    try {
      await deleteDoc(doc(db, "libraryRules", id));
      setLibraryRules((prev) => prev.filter((r) => r.id !== id));
    } catch (e) {
      console.error("Error deleting library rule:", e);
    }
  };

  // Admission Help Desk CRUD
  const addAdmissionHelpDeskItem = async (item) => {
    const newItem = { id: `hd-${Date.now()}`, ...item };
    try {
      await setDoc(doc(db, "admissionHelpDesk", newItem.id), newItem);
      setAdmissionHelpDesk((prev) => [...prev, newItem]);
    } catch (e) {
      console.error("Error adding help desk item:", e);
    }
  };

  const updateAdmissionHelpDeskItem = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "admissionHelpDesk", id), updatedFields);
      setAdmissionHelpDesk((prev) => prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item)));
    } catch (e) {
      console.error("Error updating help desk item:", e);
    }
  };

  const deleteAdmissionHelpDeskItem = async (id) => {
    try {
      await deleteDoc(doc(db, "admissionHelpDesk", id));
      setAdmissionHelpDesk((prev) => prev.filter((item) => item.id !== id));
    } catch (e) {
      console.error("Error deleting help desk item:", e);
    }
  };

  // Research Committee CRUD
  const updateResearchCommittee = async (updatedFields) => {
    try {
      const updated = { ...researchCommittee, ...updatedFields };
      await setDoc(doc(db, "researchCommittee", "details"), updated);
      setResearchCommittee(updated);
    } catch (e) {
      console.error("Error updating research committee:", e);
    }
  };

  // Research Publications CRUD
  const addResearchPublication = async (pub) => {
    const newPub = { id: `pub-${Date.now()}`, ...pub };
    try {
      await setDoc(doc(db, "researchPublications", newPub.id), newPub);
      setResearchPublications((prev) => [...prev, newPub]);
    } catch (e) {
      console.error("Error adding research publication:", e);
    }
  };

  const updateResearchPublication = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "researchPublications", id), updatedFields);
      setResearchPublications((prev) => prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p)));
    } catch (e) {
      console.error("Error updating research publication:", e);
    }
  };

  const deleteResearchPublication = async (id) => {
    try {
      await deleteDoc(doc(db, "researchPublications", id));
      setResearchPublications((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      console.error("Error deleting research publication:", e);
    }
  };

  // Research Projects CRUD
  const addResearchProject = async (proj) => {
    const newProj = { id: `proj-${Date.now()}`, ...proj };
    try {
      await setDoc(doc(db, "researchProjects", newProj.id), newProj);
      setResearchProjects((prev) => [...prev, newProj]);
    } catch (e) {
      console.error("Error adding research project:", e);
    }
  };

  const updateResearchProject = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "researchProjects", id), updatedFields);
      setResearchProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p)));
    } catch (e) {
      console.error("Error updating research project:", e);
    }
  };

  const deleteResearchProject = async (id) => {
    try {
      await deleteDoc(doc(db, "researchProjects", id));
      setResearchProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      console.error("Error deleting research project:", e);
    }
  };

  // Research Events CRUD
  const addResearchEvent = async (rev) => {
    const newRev = { id: `rev-${Date.now()}`, ...rev };
    try {
      await setDoc(doc(db, "researchEvents", newRev.id), newRev);
      setResearchEvents((prev) => [...prev, newRev]);
    } catch (e) {
      console.error("Error adding research event:", e);
    }
  };

  const updateResearchEvent = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, "researchEvents", id), updatedFields);
      setResearchEvents((prev) => prev.map((r) => (r.id === id ? { ...r, ...updatedFields } : r)));
    } catch (e) {
      console.error("Error updating research event:", e);
    }
  };

  const deleteResearchEvent = async (id) => {
    try {
      await deleteDoc(doc(db, "researchEvents", id));
      setResearchEvents((prev) => prev.filter((r) => r.id !== id));
    } catch (e) {
      console.error("Error deleting research event:", e);
    }
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
        currentUser,
        login,
        logout,
        notices,
        addNotice,
        updateNotice,
        deleteNotice,
        newsEvents,
        addNewsEvent,
        updateNewsEvent,
        deleteNewsEvent,
        departments,
        updateDepartment,
        faculty,
        addFaculty,
        updateFaculty,
        deleteFaculty,
        courses,
        addCourse,
        updateCourse,
        deleteCourse,
        downloads,
        addDownload,
        updateDownload,
        deleteDownload,
        gallery,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        contactMessages,
        addContactMessage,
        updateContactMessageStatus,
        janbhagidari,
        addJanbhagidari,
        updateJanbhagidari,
        deleteJanbhagidari,
        officeStaff,
        addOfficeStaff,
        updateOfficeStaff,
        deleteOfficeStaff,
        committees,
        addCommittee,
        updateCommittee,
        deleteCommittee,
        reqDocs,
        addReqDoc,
        updateReqDoc,
        deleteReqDoc,
        iqacDetails,
        updateIqacDetails,
        aqarDocs,
        addAqarDoc,
        updateAqarDoc,
        deleteAqarDoc,
        ssrDocs,
        addSsrDoc,
        updateSsrDoc,
        deleteSsrDoc,
        libraryRules,
        addLibraryRule,
        updateLibraryRule,
        deleteLibraryRule,
        admissionHelpDesk,
        addAdmissionHelpDeskItem,
        updateAdmissionHelpDeskItem,
        deleteAdmissionHelpDeskItem,
        researchCommittee,
        updateResearchCommittee,
        researchPublications,
        addResearchPublication,
        updateResearchPublication,
        deleteResearchPublication,
        researchProjects,
        addResearchProject,
        updateResearchProject,
        deleteResearchProject,
        researchEvents,
        addResearchEvent,
        updateResearchEvent,
        deleteResearchEvent
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
