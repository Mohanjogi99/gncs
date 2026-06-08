import React, { createContext, useState, useEffect } from "react";
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
  initialCommittees
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

  // Initialize DB from LocalStorage or mockData
  useEffect(() => {
    const CURRENT_DB_VERSION = "v11";
    const storedVersion = localStorage.getItem("gncs_db_version");

    if (storedVersion !== CURRENT_DB_VERSION) {
      // Clear old collection keys to force reload fallbacks
      const keysToClear = ["notices", "newsEvents", "departments", "faculty", "courses", "downloads", "gallery", "contactMessages", "janbhagidari", "officeStaff", "committees"];
      keysToClear.forEach(key => localStorage.removeItem(`gncs_db_${key}`));
      localStorage.setItem("gncs_db_version", CURRENT_DB_VERSION);
    }

    const loadCollection = (key, fallback) => {
      const data = localStorage.getItem(`gncs_db_${key}`);
      if (data) {
        return JSON.parse(data);
      } else {
        localStorage.setItem(`gncs_db_${key}`, JSON.stringify(fallback));
        return fallback;
      }
    };

    setNotices(loadCollection("notices", initialNotices));
    setNewsEvents(loadCollection("newsEvents", initialNewsEvents));
    setDepartments(loadCollection("departments", initialDepartments));
    setFaculty(loadCollection("faculty", initialFaculty));
    setCourses(loadCollection("courses", initialCourses));
    setDownloads(loadCollection("downloads", initialDownloads));
    setGallery(loadCollection("gallery", initialGallery));
    setContactMessages(loadCollection("contactMessages", initialContactMessages));
    setJanbhagidari(loadCollection("janbhagidari", initialJanbhagidari));
    setOfficeStaff(loadCollection("officeStaff", initialOfficeStaff));
    setCommittees(loadCollection("committees", initialCommittees));
  }, []);

  // Save collections to LocalStorage whenever they change
  const saveCollection = (key, data) => {
    localStorage.setItem(`gncs_db_${key}`, JSON.stringify(data));
  };

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
  const addNotice = (notice) => {
    const newNotice = {
      ...notice,
      id: `notice-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    const updated = [newNotice, ...notices];
    setNotices(updated);
    saveCollection("notices", updated);
  };

  const updateNotice = (id, updatedFields) => {
    const updated = notices.map((n) => (n.id === id ? { ...n, ...updatedFields } : n));
    setNotices(updated);
    saveCollection("notices", updated);
  };

  const deleteNotice = (id) => {
    const updated = notices.filter((n) => n.id !== id);
    setNotices(updated);
    saveCollection("notices", updated);
  };

  // CRUD for News & Events
  const addNewsEvent = (event) => {
    const newEvent = {
      ...event,
      id: `news-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    const updated = [newEvent, ...newsEvents];
    setNewsEvents(updated);
    saveCollection("newsEvents", updated);
  };

  const updateNewsEvent = (id, updatedFields) => {
    const updated = newsEvents.map((e) => (e.id === id ? { ...e, ...updatedFields } : e));
    setNewsEvents(updated);
    saveCollection("newsEvents", updated);
  };

  const deleteNewsEvent = (id) => {
    const updated = newsEvents.filter((e) => e.id !== id);
    setNewsEvents(updated);
    saveCollection("newsEvents", updated);
  };

  // CRUD for Faculty
  const addFaculty = (fac) => {
    const newFac = {
      ...fac,
      id: `fac-${Date.now()}`
    };
    const updated = [...faculty, newFac];
    setFaculty(updated);
    saveCollection("faculty", updated);
  };

  const updateFaculty = (id, updatedFields) => {
    const updated = faculty.map((f) => (f.id === id ? { ...f, ...updatedFields } : f));
    setFaculty(updated);
    saveCollection("faculty", updated);
  };

  const deleteFaculty = (id) => {
    const updated = faculty.filter((f) => f.id !== id);
    setFaculty(updated);
    saveCollection("faculty", updated);
  };

  // CRUD for Courses
  const addCourse = (course) => {
    const newCourse = {
      ...course,
      id: `course-${Date.now()}`
    };
    const updated = [...courses, newCourse];
    setCourses(updated);
    saveCollection("courses", updated);
  };

  const updateCourse = (id, updatedFields) => {
    const updated = courses.map((c) => (c.id === id ? { ...c, ...updatedFields } : c));
    setCourses(updated);
    saveCollection("courses", updated);
  };

  const deleteCourse = (id) => {
    const updated = courses.filter((c) => c.id !== id);
    setCourses(updated);
    saveCollection("courses", updated);
  };

  // CRUD for Downloads
  const addDownload = (down) => {
    const newDown = {
      ...down,
      id: `down-${Date.now()}`,
      createdAt: new Date().toISOString().split("T")[0]
    };
    const updated = [newDown, ...downloads];
    setDownloads(updated);
    saveCollection("downloads", updated);
  };

  const updateDownload = (id, updatedFields) => {
    const updated = downloads.map((d) => (d.id === id ? { ...d, ...updatedFields } : d));
    setDownloads(updated);
    saveCollection("downloads", updated);
  };

  const deleteDownload = (id) => {
    const updated = downloads.filter((d) => d.id !== id);
    setDownloads(updated);
    saveCollection("downloads", updated);
  };

  // CRUD for Gallery
  const addGalleryItem = (item) => {
    const newItem = {
      ...item,
      id: `gal-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    const updated = [newItem, ...gallery];
    setGallery(updated);
    saveCollection("gallery", updated);
  };

  const deleteGalleryItem = (id) => {
    const updated = gallery.filter((g) => g.id !== id);
    setGallery(updated);
    saveCollection("gallery", updated);
  };

  // CRUD for Contact Messages
  const addContactMessage = (msg) => {
    const newMsg = {
      ...msg,
      id: `msg-${Date.now()}`,
      status: "Pending",
      createdAt: new Date().toISOString()
    };
    const updated = [newMsg, ...contactMessages];
    setContactMessages(updated);
    saveCollection("contactMessages", updated);
  };

  const updateContactMessageStatus = (id, status) => {
    const updated = contactMessages.map((m) => (m.id === id ? { ...m, status } : m));
    setContactMessages(updated);
    saveCollection("contactMessages", updated);
  };

  // CRUD for Departments
  const updateDepartment = (id, updatedFields) => {
    const updated = departments.map((d) => (d.id === id ? { ...d, ...updatedFields } : d));
    setDepartments(updated);
    saveCollection("departments", updated);
  };

  // CRUD for Janbhagidari
  const addJanbhagidari = (member) => {
    const newMember = {
      ...member,
      id: `jb-${Date.now()}`
    };
    const updated = [...janbhagidari, newMember];
    setJanbhagidari(updated);
    saveCollection("janbhagidari", updated);
  };

  const updateJanbhagidari = (id, updatedFields) => {
    const updated = janbhagidari.map((m) => (m.id === id ? { ...m, ...updatedFields } : m));
    setJanbhagidari(updated);
    saveCollection("janbhagidari", updated);
  };

  const deleteJanbhagidari = (id) => {
    const updated = janbhagidari.filter((m) => m.id !== id);
    setJanbhagidari(updated);
    saveCollection("janbhagidari", updated);
  };

  // CRUD for Office Staff
  const addOfficeStaff = (staff) => {
    const newStaff = {
      ...staff,
      id: `os-${Date.now()}`
    };
    const updated = [...officeStaff, newStaff];
    setOfficeStaff(updated);
    saveCollection("officeStaff", updated);
  };

  const updateOfficeStaff = (id, updatedFields) => {
    const updated = officeStaff.map((s) => (s.id === id ? { ...s, ...updatedFields } : s));
    setOfficeStaff(updated);
    saveCollection("officeStaff", updated);
  };

  const deleteOfficeStaff = (id) => {
    const updated = officeStaff.filter((s) => s.id !== id);
    setOfficeStaff(updated);
    saveCollection("officeStaff", updated);
  };

  // CRUD for Committees
  const addCommittee = (committee) => {
    const newCommittee = {
      ...committee,
      id: `com-${Date.now()}`
    };
    const updated = [...committees, newCommittee];
    setCommittees(updated);
    saveCollection("committees", updated);
  };

  const updateCommittee = (id, updatedFields) => {
    const updated = committees.map((c) => (c.id === id ? { ...c, ...updatedFields } : c));
    setCommittees(updated);
    saveCollection("committees", updated);
  };

  const deleteCommittee = (id) => {
    const updated = committees.filter((c) => c.id !== id);
    setCommittees(updated);
    saveCollection("committees", updated);
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
        deleteCommittee
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
