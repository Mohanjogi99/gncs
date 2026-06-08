import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function AdminDashboard() {
  const {
    currentUser,
    logout,
    notices,
    addNotice,
    updateNotice,
    deleteNotice,
    downloads,
    addDownload,
    updateDownload,
    deleteDownload,
    faculty,
    addFaculty,
    updateFaculty,
    deleteFaculty,
    courses,
    addCourse,
    updateCourse,
    deleteCourse,
    contactMessages,
    updateContactMessageStatus,
    gallery,
    addGalleryItem,
    deleteGalleryItem,
    newsEvents,
    addNewsEvent,
    updateNewsEvent,
    deleteNewsEvent,
    t,
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
    departments,
    updateDepartment,
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
  } = useContext(AppContext);

  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("overview"); // overview, notices, downloads, faculty, courses, messages, gallery, news

  // Form states
  const [editingItem, setEditingItem] = useState(null); // holds object of item being edited
  const [isAdding, setIsAdding] = useState(false); // triggers add mode form
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  // Notice form states
  const [noticeForm, setNoticeForm] = useState({
    titleEnglish: "",
    titleHindi: "",
    category: "Admission",
    isImportant: false
  });

  // Download form states
  const [downloadForm, setDownloadForm] = useState({
    titleEnglish: "",
    titleHindi: "",
    category: "Admission Forms",
    fileUrl: ""
  });

  // Faculty form states
  const [facultyForm, setFacultyForm] = useState({
    name: "",
    designation: "Assistant Professor",
    department: "Arts",
    qualification: "",
    email: "",
    phone: "",
    bioEnglish: "",
    bioHindi: "",
    photoUrl: ""
  });

  // Course form states
  const [courseForm, setCourseForm] = useState({
    name: "",
    stream: "Arts",
    duration: "3 Years / 3 वर्ष",
    eligibility: "",
    seats: 60,
    fee: "₹2,500 per annum"
  });

  // Gallery form states
  const [galleryForm, setGalleryForm] = useState({
    albumTitle: "",
    caption: "",
    eventDate: new Date().toISOString().split("T")[0],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA72eXokI1lfD95EVEcAR3osAynjp5wfvMvtugkG0bOK_1g7YRvPOwJ9wt9EJEZ3Y_BmjOJaIOxTaTTAvU5DXyuczs0S2DFGtNUoqki8h5n4vVrke8WF1PhFl1l-JCcRYdRvFwUK4JeXDTYSNJfu3QYoW78eZe6BHq7D86Cz2tSUTBb36y99fbjn7vNRs9HjRIxAKwB-ZVe43KBDGY5iP0Y3NY5TBsYHSzTW-XRE9yDpqIV4ABK9EMBoWzT1uHO4Fi6fYj4KIqe6lg"
  });

  // News/Event form states
  const [newsForm, setNewsForm] = useState({
    titleEnglish: "",
    titleHindi: "",
    descriptionEnglish: "",
    descriptionHindi: "",
    contentEnglish: "",
    contentHindi: "",
    eventDate: new Date().toISOString().split("T")[0],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCjsfFQYXwVOIkT9Y6mDy2lPLApjrPlkUzrOz1rsxwUarhtCK2NFmHtORNU0JAG9nX_qGGsQ8qeY9zwr7mYSWrvDrBxu3dhjC3L_Ek3LYiwrYVuL_D1wS6KQNcC0rLp2gn9d02-kFi18BqYkvSsbn5YH2fzMijkawijEkmD_ge0V7DcG6mubOAOPwl9tjur0tW9oltYWyy7_MODLLh4441Knd2Bz9Ruf2U5I2lpnh354zbKX6anGS8mFub-s9iLTDWOQZB4kmP1Tg"
  });

  // Janbhagidari form states
  const [janbhagidariForm, setJanbhagidariForm] = useState({
    nameEn: "",
    nameHi: "",
    roleEn: "",
    roleHi: ""
  });

  // Office Staff form states
  const [officeStaffForm, setOfficeStaffForm] = useState({
    nameEn: "",
    nameHi: "",
    roleEn: "",
    roleHi: ""
  });

  // Committee form states
  const [committeeForm, setCommitteeForm] = useState({
    titleEn: "",
    titleHi: "",
    convenerEn: "",
    membersEn: ""
  });

  // Required Document form state
  const [reqDocForm, setReqDocForm] = useState({
    labelEn: "",
    labelHi: ""
  });

  // IQAC form state
  const [iqacForm, setIqacForm] = useState({
    chairman: "",
    coordinator: "",
    managementRep: "",
    facultyMembers: ""
  });

  // IQAC Subtab & Form States
  const [iqacSubTab, setIqacSubTab] = useState("committee");
  const [aqarForm, setAqarForm] = useState({
    year: "",
    titleEn: "",
    titleHi: "",
    pdfUrl: ""
  });
  const [ssrForm, setSsrForm] = useState({
    titleEn: "",
    titleHi: "",
    pdfUrl: ""
  });
  const [isAddingAqar, setIsAddingAqar] = useState(false);
  const [editingAqar, setEditingAqar] = useState(null);
  const [isAddingSsr, setIsAddingSsr] = useState(false);

  // Library Rule form state
  const [libraryRuleForm, setLibraryRuleForm] = useState({
    ruleEn: "",
    ruleHi: ""
  });
  const [editingSsr, setEditingSsr] = useState(null);

  // Research state & form states
  const [researchSubTab, setResearchSubTab] = useState("committee");
  const [researchCommitteeForm, setResearchCommitteeForm] = useState({
    convener: "",
    coConvener: "",
    members: ""
  });
  const [researchPublicationForm, setResearchPublicationForm] = useState({
    title: "",
    author: "",
    journal: "",
    year: "",
    issn: "",
    url: ""
  });
  const [researchProjectForm, setResearchProjectForm] = useState({
    title: "",
    investigator: "",
    agency: "",
    amount: "",
    status: "Ongoing"
  });
  const [researchEventForm, setResearchEventForm] = useState({
    title: "",
    date: "",
    coordinator: "",
    theme: ""
  });
  const [isAddingPub, setIsAddingPub] = useState(false);
  const [editingPub, setEditingPub] = useState(null);
  const [isAddingProj, setIsAddingProj] = useState(false);
  const [editingProj, setEditingProj] = useState(null);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  // Department and Subject state
  const [selectedDeptId, setSelectedDeptId] = useState("dept-arts");
  const [deptHod, setDeptHod] = useState("");
  const [deptDescEn, setDeptDescEn] = useState("");
  const [deptDescHi, setDeptDescHi] = useState("");
  const [isAddingSubject, setIsAddingSubject] = useState(false);
  const [editingSubjectIndex, setEditingSubjectIndex] = useState(null);
  const [subjectInput, setSubjectInput] = useState("");

  // Redirect if not logged in
  React.useEffect(() => {
    if (!currentUser) {
      navigate("/admin-login");
    }
  }, [currentUser, navigate]);

  // Sync department info form when selected department changes
  React.useEffect(() => {
    if (departments && departments.length > 0) {
      const dept = departments.find((d) => d.id === selectedDeptId);
      if (dept) {
        setDeptHod(dept.hodName || "");
        setDeptDescEn(dept.descriptionEnglish || "");
        setDeptDescHi(dept.descriptionHindi || "");
      }
    }
  }, [selectedDeptId, departments]);

  // Sync IQAC form when activeMenu changes or iqacDetails changes
  React.useEffect(() => {
    if (iqacDetails) {
      setIqacForm({
        chairman: iqacDetails.chairman || "",
        coordinator: iqacDetails.coordinator || "",
        managementRep: iqacDetails.managementRep || "",
        facultyMembers: iqacDetails.facultyMembers || ""
      });
    }
  }, [iqacDetails]);

  // Sync Research Committee form
  React.useEffect(() => {
    if (researchCommittee) {
      setResearchCommitteeForm({
        convener: researchCommittee.convener || "",
        coConvener: researchCommittee.coConvener || "",
        members: researchCommittee.members || ""
      });
    }
  }, [researchCommittee]);

  if (!currentUser) return null;

  const role = currentUser.role; // Super Admin, Principal, Faculty, Office Staff

  // Helper to check permissions
  const hasAccess = (moduleName) => {
    if (role === "Super Admin" || role === "Principal") return true;
    if (role === "Office Staff") {
      return ["overview", "notices", "downloads"].includes(moduleName);
    }
    if (role === "Faculty") {
      return ["overview", "downloads", "messages", "gallery", "news"].includes(moduleName);
    }
    return false;
  };

  // Simulate file upload with progress bar
  const triggerSimulatedUpload = (callback) => {
    setUploading(true);
    setUploadProgress(10);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setUploading(false);
            setUploadProgress(0);
            callback();
          }, 400);
          return 100;
        }
        return prev + 30;
      });
    }, 200);
  };

  // Form submission handlers
  const handleSaveNotice = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateNotice(editingItem.id, noticeForm);
    } else {
      addNotice(noticeForm);
    }
    closeForm();
  };

  const handleSaveDownload = (e) => {
    e.preventDefault();
    const saveIt = () => {
      const data = {
        ...downloadForm,
        fileUrl: downloadForm.fileUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        uploadedBy: currentUser.name
      };
      if (editingItem) {
        updateDownload(editingItem.id, data);
      } else {
        addDownload(data);
      }
      closeForm();
    };

    if (!downloadForm.fileUrl) {
      triggerSimulatedUpload(saveIt);
    } else {
      saveIt();
    }
  };

  const handleSaveFaculty = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateFaculty(editingItem.id, facultyForm);
    } else {
      addFaculty(facultyForm);
    }
    closeForm();
  };

  const handleSaveCourse = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateCourse(editingItem.id, courseForm);
    } else {
      addCourse(courseForm);
    }
    closeForm();
  };

  const handleSaveGallery = (e) => {
    e.preventDefault();
    addGalleryItem(galleryForm);
    closeForm();
  };

  const handleSaveNews = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateNewsEvent(editingItem.id, newsForm);
    } else {
      addNewsEvent(newsForm);
    }
    closeForm();
  };

  const handleSaveJanbhagidari = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateJanbhagidari(editingItem.id, janbhagidariForm);
    } else {
      addJanbhagidari(janbhagidariForm);
    }
    closeForm();
  };

  const handleSaveOfficeStaff = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateOfficeStaff(editingItem.id, officeStaffForm);
    } else {
      addOfficeStaff(officeStaffForm);
    }
    closeForm();
  };

  const handleSaveCommittee = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateCommittee(editingItem.id, committeeForm);
    } else {
      addCommittee(committeeForm);
    }
    closeForm();
  };

  const handleSaveReqDoc = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateReqDoc(editingItem.id, reqDocForm);
    } else {
      addReqDoc(reqDocForm);
    }
    closeForm();
  };

  const handleSaveLibraryRule = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateLibraryRule(editingItem.id, libraryRuleForm);
    } else {
      addLibraryRule(libraryRuleForm);
    }
    closeForm();
  };

  const handleSaveIqac = (e) => {
    e.preventDefault();
    updateIqacDetails(iqacForm);
    alert("IQAC committee details updated successfully!");
  };

  const handleSaveAqar = (e) => {
    e.preventDefault();
    if (editingAqar) {
      updateAqarDoc(editingAqar.id, aqarForm);
      alert("AQAR Report updated successfully!");
    } else {
      addAqarDoc(aqarForm);
      alert("AQAR Report added successfully!");
    }
    setAqarForm({ year: "", titleEn: "", titleHi: "", pdfUrl: "" });
    setIsAddingAqar(false);
    setEditingAqar(null);
  };

  const handleSaveSsr = (e) => {
    e.preventDefault();
    if (editingSsr) {
      updateSsrDoc(editingSsr.id, ssrForm);
      alert("Self Study Report / Feedback updated successfully!");
    } else {
      addSsrDoc(ssrForm);
      alert("Self Study Report / Feedback added successfully!");
    }
    setSsrForm({ titleEn: "", titleHi: "", pdfUrl: "" });
    setIsAddingSsr(false);
    setEditingSsr(null);
  };

  const openAddAqar = () => {
    setAqarForm({ year: "", titleEn: "", titleHi: "", pdfUrl: "" });
    setEditingAqar(null);
    setIsAddingAqar(true);
  };

  const openEditAqar = (item) => {
    setAqarForm({
      year: item.year || "",
      titleEn: item.titleEn || "",
      titleHi: item.titleHi || "",
      pdfUrl: item.pdfUrl || ""
    });
    setEditingAqar(item);
    setIsAddingAqar(false);
  };

  const openAddSsr = () => {
    setSsrForm({ titleEn: "", titleHi: "", pdfUrl: "" });
    setEditingSsr(null);
    setIsAddingSsr(true);
  };

  const openEditSsr = (item) => {
    setSsrForm({
      titleEn: item.titleEn || "",
      titleHi: item.titleHi || "",
      pdfUrl: item.pdfUrl || ""
    });
    setEditingSsr(item);
    setIsAddingSsr(false);
  };

  // Research Save and Edit handlers
  const handleSaveResearchCommittee = (e) => {
    e.preventDefault();
    updateResearchCommittee(researchCommitteeForm);
    alert("Research committee details updated successfully!");
  };

  const handleSaveResearchPub = (e) => {
    e.preventDefault();
    if (editingPub) {
      updateResearchPublication(editingPub.id, researchPublicationForm);
      alert("Publication updated successfully!");
    } else {
      addResearchPublication(researchPublicationForm);
      alert("Publication added successfully!");
    }
    setResearchPublicationForm({ title: "", author: "", journal: "", year: "", issn: "", url: "" });
    setIsAddingPub(false);
    setEditingPub(null);
  };

  const handleSaveResearchProject = (e) => {
    e.preventDefault();
    if (editingProj) {
      updateResearchProject(editingProj.id, researchProjectForm);
      alert("Research Project updated successfully!");
    } else {
      addResearchProject(researchProjectForm);
      alert("Research Project added successfully!");
    }
    setResearchProjectForm({ title: "", investigator: "", agency: "", amount: "", status: "Ongoing" });
    setIsAddingProj(false);
    setEditingProj(null);
  };

  const handleSaveResearchEvent = (e) => {
    e.preventDefault();
    if (editingEvent) {
      updateResearchEvent(editingEvent.id, researchEventForm);
      alert("Research Seminar/Workshop updated successfully!");
    } else {
      addResearchEvent(researchEventForm);
      alert("Research Seminar/Workshop added successfully!");
    }
    setResearchEventForm({ title: "", date: "", coordinator: "", theme: "" });
    setIsAddingEvent(false);
    setEditingEvent(null);
  };

  const openAddResearchPub = () => {
    setResearchPublicationForm({ title: "", author: "", journal: "", year: "", issn: "", url: "" });
    setEditingPub(null);
    setIsAddingPub(true);
  };

  const openEditResearchPub = (item) => {
    setResearchPublicationForm({
      title: item.title || "",
      author: item.author || "",
      journal: item.journal || "",
      year: item.year || "",
      issn: item.issn || "",
      url: item.url || ""
    });
    setEditingPub(item);
    setIsAddingPub(false);
  };

  const openAddResearchProj = () => {
    setResearchProjectForm({ title: "", investigator: "", agency: "", amount: "", status: "Ongoing" });
    setEditingProj(null);
    setIsAddingProj(true);
  };

  const openEditResearchProj = (item) => {
    setResearchProjectForm({
      title: item.title || "",
      investigator: item.investigator || "",
      agency: item.agency || "",
      amount: item.amount || "",
      status: item.status || "Ongoing"
    });
    setEditingProj(item);
    setIsAddingProj(false);
  };

  const openAddResearchEvent = () => {
    setResearchEventForm({ title: "", date: "", coordinator: "", theme: "" });
    setEditingEvent(null);
    setIsAddingEvent(true);
  };

  const openEditResearchEvent = (item) => {
    setResearchEventForm({
      title: item.title || "",
      date: item.date || "",
      coordinator: item.coordinator || "",
      theme: item.theme || ""
    });
    setEditingEvent(item);
    setIsAddingEvent(false);
  };

  const handleSaveDeptInfo = (e) => {
    e.preventDefault();
    updateDepartment(selectedDeptId, {
      hodName: deptHod,
      descriptionEnglish: deptDescEn,
      descriptionHindi: deptDescHi
    });
    alert("Department info updated successfully!");
  };

  const handleAddSubject = (e) => {
    e.preventDefault();
    if (!subjectInput.trim()) return;
    const dept = departments.find((d) => d.id === selectedDeptId);
    if (dept) {
      const updatedSubjects = [...(dept.subjects || []), subjectInput.trim()];
      updateDepartment(selectedDeptId, { subjects: updatedSubjects });
      setSubjectInput("");
      setIsAddingSubject(false);
    }
  };

  const handleUpdateSubject = (e) => {
    e.preventDefault();
    if (!subjectInput.trim() || editingSubjectIndex === null) return;
    const dept = departments.find((d) => d.id === selectedDeptId);
    if (dept) {
      const updatedSubjects = [...(dept.subjects || [])];
      updatedSubjects[editingSubjectIndex] = subjectInput.trim();
      updateDepartment(selectedDeptId, { subjects: updatedSubjects });
      setSubjectInput("");
      setEditingSubjectIndex(null);
    }
  };

  const handleDeleteSubject = (index) => {
    if (window.confirm("Are you sure you want to delete this subject?")) {
      const dept = departments.find((d) => d.id === selectedDeptId);
      if (dept) {
        const updatedSubjects = dept.subjects.filter((_, idx) => idx !== index);
        updateDepartment(selectedDeptId, { subjects: updatedSubjects });
      }
    }
  };

  const openAddForm = () => {
    setIsAdding(true);
    setEditingItem(null);
    // Reset forms
    setNoticeForm({ titleEnglish: "", titleHindi: "", category: "Admission", isImportant: false });
    setDownloadForm({ titleEnglish: "", titleHindi: "", category: "Admission Forms", fileUrl: "" });
    setFacultyForm({ name: "", designation: "Assistant Professor", department: "Arts", qualification: "", email: "", phone: "", bioEnglish: "", bioHindi: "", photoUrl: "" });
    setCourseForm({ name: "", stream: "Arts", duration: "3 Years / 3 वर्ष", eligibility: "", seats: 60, fee: "₹2,500 per annum" });
    setGalleryForm({ albumTitle: "", caption: "", eventDate: new Date().toISOString().split("T")[0], imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA72eXokI1lfD95EVEcAR3osAynjp5wfvMvtugkG0bOK_1g7YRvPOwJ9wt9EJEZ3Y_BmjOJaIOxTaTTAvU5DXyuczs0S2DFGtNUoqki8h5n4vVrke8WF1PhFl1l-JCcRYdRvFwUK4JeXDTYSNJfu3QYoW78eZe6BHq7D86Cz2tSUTBb36y99fbjn7vNRs9HjRIxAKwB-ZVe43KBDGY5iP0Y3NY5TBsYHSzTW-XRE9yDpqIV4ABK9EMBoWzT1uHO4Fi6fYj4KIqe6lg" });
    setNewsForm({ titleEnglish: "", titleHindi: "", descriptionEnglish: "", descriptionHindi: "", contentEnglish: "", contentHindi: "", eventDate: new Date().toISOString().split("T")[0], imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCjsfFQYXwVOIkT9Y6mDy2lPLApjrPlkUzrOz1rsxwUarhtCK2NFmHtORNU0JAG9nX_qGGsQ8qeY9zwr7mYSWrvDrBxu3dhjC3L_Ek3LYiwrYVuL_D1wS6KQNcC0rLp2gn9d02-kFi18BqYkvSsbn5YH2fzMijkawijEkmD_ge0V7DcG6mubOAOPwl9tjur0tW9oltYWyy7_MODLLh4441Knd2Bz9Ruf2U5I2lpnh354zbKX6anGS8mFub-s9iLTDWOQZB4kmP1Tg" });
    setJanbhagidariForm({ nameEn: "", nameHi: "", roleEn: "", roleHi: "" });
    setOfficeStaffForm({ nameEn: "", nameHi: "", roleEn: "", roleHi: "" });
    setCommitteeForm({ titleEn: "", titleHi: "", convenerEn: "", membersEn: "" });
    setReqDocForm({ labelEn: "", labelHi: "" });
    setLibraryRuleForm({ ruleEn: "", ruleHi: "" });
  };

  const openEditForm = (item) => {
    setEditingItem(item);
    setIsAdding(false);
    // Populate form based on active panel
    if (activeMenu === "notices") {
      setNoticeForm({ titleEnglish: item.titleEnglish, titleHindi: item.titleHindi, category: item.category, isImportant: item.isImportant });
    } else if (activeMenu === "downloads") {
      setDownloadForm({ titleEnglish: item.titleEnglish, titleHindi: item.titleHindi, category: item.category, fileUrl: item.fileUrl || "" });
    } else if (activeMenu === "faculty") {
      setFacultyForm({ name: item.name, designation: item.designation, department: item.department, qualification: item.qualification, email: item.email, phone: item.phone, bioEnglish: item.bioEnglish, bioHindi: item.bioHindi, photoUrl: item.photoUrl || "" });
    } else if (activeMenu === "courses") {
      setCourseForm({ name: item.name, stream: item.stream, duration: item.duration, eligibility: item.eligibility, seats: item.seats, fee: item.fee });
    } else if (activeMenu === "news") {
      setNewsForm({ titleEnglish: item.titleEnglish, titleHindi: item.titleHindi, descriptionEnglish: item.descriptionEnglish, descriptionHindi: item.descriptionHindi, contentEnglish: item.contentEnglish || "", contentHindi: item.contentHindi || "", eventDate: item.eventDate, imageUrl: item.imageUrl });
    } else if (activeMenu === "janbhagidari") {
      setJanbhagidariForm({ nameEn: item.nameEn, nameHi: item.nameHi, roleEn: item.roleEn, roleHi: item.roleHi });
    } else if (activeMenu === "officeStaff") {
      setOfficeStaffForm({ nameEn: item.nameEn, nameHi: item.nameHi, roleEn: item.roleEn, roleHi: item.roleHi });
    } else if (activeMenu === "committees") {
      setCommitteeForm({ titleEn: item.titleEn, titleHi: item.titleHi, convenerEn: item.convenerEn, membersEn: item.membersEn });
    } else if (activeMenu === "reqDocs") {
      setReqDocForm({ labelEn: item.labelEn, labelHi: item.labelHi });
    } else if (activeMenu === "library") {
      setLibraryRuleForm({ ruleEn: item.ruleEn, ruleHi: item.ruleHi });
    }
  };

  const closeForm = () => {
    setIsAdding(false);
    setEditingItem(null);
  };

  const sidebarLinks = [
    { key: "overview", label: "Dashboard Overview", icon: "dashboard" },
    { key: "notices", label: "Manage Notices", icon: "campaign" },
    { key: "downloads", label: "Downloads & Syllabus", icon: "download" },
    { key: "faculty", label: "Faculty Directory", icon: "groups" },
    { key: "courses", label: "Courses & Intake", icon: "auto_stories" },
    { key: "janbhagidari", label: "Janbhagidari Committee", icon: "diversity_3" },
    { key: "officeStaff", label: "Office Staff Directory", icon: "support_agent" },
    { key: "committees", label: "Manage Committees", icon: "badge" },
    { key: "departments", label: "Manage Departments & Subjects", icon: "menu_book" },
    { key: "reqDocs", label: "Admission Required Docs", icon: "assignment" },
    { key: "iqac", label: "Manage IQAC Cell", icon: "verified" },
    { key: "research", label: "Research & Dev (R&D)", icon: "biotech" },
    { key: "library", label: "Manage Library Rules", icon: "local_library" },
    { key: "gallery", label: "Photo Gallery", icon: "photo_library" },
    { key: "news", label: "News & Campus Events", icon: "newspaper" },
    { key: "messages", label: "Contact Inquiries", icon: "mail" }
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 flex-1 flex flex-col lg:flex-row gap-6 items-stretch min-h-[600px]">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-1/4 bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm shrink-0 flex flex-col justify-between space-y-6">
        <div>
          {/* Admin title and tag */}
          <div className="border-b border-outline-variant pb-4 mb-4">
            <h3 className="font-bold text-lg text-primary flex items-center gap-1.5 leading-none">
              <span className="material-symbols-outlined text-secondary">admin_panel_settings</span>
              Admin Portal
            </h3>
            <span className="inline-block text-[10px] bg-secondary-container text-on-secondary-container font-bold px-2 py-0.5 rounded-full mt-2">
              Role: {role}
            </span>
          </div>

          {/* Links list */}
          <nav className="space-y-1.5">
            {sidebarLinks.map((link) => {
              const accessible = hasAccess(link.key);
              return (
                <button
                  key={link.key}
                  disabled={!accessible}
                  onClick={() => {
                    setActiveMenu(link.key);
                    closeForm();
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold flex items-center gap-3 transition-all ${
                    !accessible
                      ? "opacity-40 cursor-not-allowed"
                      : activeMenu === link.key
                      ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">{link.icon}</span>
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Card & Logout */}
        <div className="border-t border-outline-variant pt-4 space-y-3 bg-surface-container-low/40 p-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
              {currentUser.name.split(" ").pop()[0]}
            </div>
            <div className="overflow-hidden">
              <h5 className="font-bold text-xs text-primary truncate leading-tight">{currentUser.name}</h5>
              <span className="text-[10px] text-on-surface-variant truncate block mt-0.5">
                {currentUser.department}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="w-full bg-error/10 text-error hover:bg-error hover:text-on-error py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border border-error/10"
          >
            <span className="material-symbols-outlined text-sm">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm flex flex-col justify-between min-h-[500px]">
        {/* Dynamic Panel Renderer */}
        <div className="space-y-6">
          {/* Header title */}
          <div className="border-b border-outline-variant pb-4 flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-primary capitalize flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  {sidebarLinks.find((l) => l.key === activeMenu)?.icon || "settings"}
                </span>
                {sidebarLinks.find((l) => l.key === activeMenu)?.label}
              </h2>
              <p className="text-xs text-on-surface-variant mt-1.5">
                Manage and update details in real-time. Changes instantly reflect on public pages.
              </p>
            </div>
             {/* Action buttons (Add new) for appropriate modules */}
            {["notices", "downloads", "faculty", "courses", "news", "janbhagidari", "officeStaff", "committees", "reqDocs", "library"].includes(activeMenu) &&
              !isAdding &&
              !editingItem && (
                <button
                  onClick={openAddForm}
                  className="bg-secondary hover:bg-secondary/95 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                  Add {activeMenu === "janbhagidari" ? "Member" : activeMenu === "officeStaff" ? "Staff" : activeMenu === "committees" ? "Committee" : activeMenu === "reqDocs" ? "Document" : activeMenu === "library" ? "Rule" : activeMenu.slice(0, -1)}
                </button>
              )}
            {activeMenu === "gallery" && !isAdding && (
              <button
                onClick={openAddForm}
                className="bg-secondary hover:bg-secondary/95 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                Add Photo
              </button>
            )}
          </div>

          {/* Form states loader */}
          {(isAdding || editingItem) && (
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/80">
              <h4 className="font-bold text-sm text-primary mb-4 border-b border-outline-variant/60 pb-2">
                {editingItem ? "Edit Details" : "Add New Item"}
              </h4>

              {uploading && (
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-primary">
                    <span>Uploading attachment to cloud storage...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-outline-variant h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-secondary h-full transition-all duration-200"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Notice Module Form */}
              {activeMenu === "notices" && (
                <form onSubmit={handleSaveNotice} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Title (English) *</label>
                      <input
                        type="text"
                        required
                        value={noticeForm.titleEnglish}
                        onChange={(e) => setNoticeForm({ ...noticeForm, titleEnglish: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Title (Hindi) *</label>
                      <input
                        type="text"
                        required
                        value={noticeForm.titleHindi}
                        onChange={(e) => setNoticeForm({ ...noticeForm, titleHindi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Category</label>
                      <select
                        value={noticeForm.category}
                        onChange={(e) => setNoticeForm({ ...noticeForm, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      >
                        <option>Admission</option>
                        <option>Scholarship</option>
                        <option>Examination</option>
                        <option>Academic</option>
                        <option>Event</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-2 pt-6">
                      <input
                        type="checkbox"
                        id="isImp"
                        checked={noticeForm.isImportant}
                        onChange={(e) => setNoticeForm({ ...noticeForm, isImportant: e.target.checked })}
                      />
                      <label htmlFor="isImp" className="font-bold cursor-pointer">
                        Mark as Important (Scrolls in Ticker)
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save
                    </button>
                  </div>
                </form>
              )}

              {/* Downloads Form */}
              {activeMenu === "downloads" && (
                <form onSubmit={handleSaveDownload} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Document Title (English) *</label>
                      <input
                        type="text"
                        required
                        value={downloadForm.titleEnglish}
                        onChange={(e) => setDownloadForm({ ...downloadForm, titleEnglish: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Document Title (Hindi) *</label>
                      <input
                        type="text"
                        required
                        value={downloadForm.titleHindi}
                        onChange={(e) => setDownloadForm({ ...downloadForm, titleHindi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Category</label>
                      <select
                        value={downloadForm.category}
                        onChange={(e) => setDownloadForm({ ...downloadForm, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      >
                        <option>Admission Forms</option>
                        <option>Scholarship Forms</option>
                        <option>Prospectus</option>
                        <option>Academic Calendar</option>
                        <option>Syllabus</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Document PDF Link / URL (Optional)</label>
                      <input
                        type="url"
                        value={downloadForm.fileUrl}
                        onChange={(e) => setDownloadForm({ ...downloadForm, fileUrl: e.target.value })}
                        placeholder="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={uploading}
                      className="px-5 py-2 bg-primary text-white rounded-lg font-bold flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-sm">publish</span>
                      Upload & Save
                    </button>
                  </div>
                </form>
              )}

              {/* Faculty Form */}
              {activeMenu === "faculty" && (
                <form onSubmit={handleSaveFaculty} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={facultyForm.name}
                        onChange={(e) => setFacultyForm({ ...facultyForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Designation *</label>
                      <input
                        type="text"
                        required
                        value={facultyForm.designation}
                        onChange={(e) => setFacultyForm({ ...facultyForm, designation: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Department Stream</label>
                      <select
                        value={facultyForm.department}
                        onChange={(e) => setFacultyForm({ ...facultyForm, department: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      >
                        <option>Arts</option>
                        <option>Science</option>
                        <option>Commerce</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Qualifications *</label>
                      <input
                        type="text"
                        required
                        value={facultyForm.qualification}
                        onChange={(e) => setFacultyForm({ ...facultyForm, qualification: e.target.value })}
                        placeholder="e.g. M.Sc., Ph.D."
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={facultyForm.email}
                        onChange={(e) => setFacultyForm({ ...facultyForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Mobile Phone</label>
                      <input
                        type="tel"
                        value={facultyForm.phone}
                        onChange={(e) => setFacultyForm({ ...facultyForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Biography (English)</label>
                      <textarea
                        rows="2"
                        value={facultyForm.bioEnglish}
                        onChange={(e) => setFacultyForm({ ...facultyForm, bioEnglish: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      ></textarea>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Biography (Hindi)</label>
                      <textarea
                        rows="2"
                        value={facultyForm.bioHindi}
                        onChange={(e) => setFacultyForm({ ...facultyForm, bioHindi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold">Profile Photo (फ़ोटो अपलोड या URL)</label>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <div className="flex-1 w-full space-y-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              triggerSimulatedUpload(() => {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setFacultyForm(prev => ({ ...prev, photoUrl: reader.result }));
                                };
                                reader.readAsDataURL(file);
                              });
                            }
                          }}
                          className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                        />
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-on-surface-variant font-bold">OR URL:</span>
                          <input
                            type="url"
                            placeholder="https://example.com/photo.jpg"
                            value={facultyForm.photoUrl}
                            onChange={(e) => setFacultyForm({ ...facultyForm, photoUrl: e.target.value })}
                            className="w-full flex-1 px-3 py-1.5 rounded-lg border border-outline-variant bg-white outline-none text-xs"
                          />
                        </div>
                      </div>
                      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 bg-surface-container-low flex items-center justify-center shadow-inner">
                        {facultyForm.photoUrl ? (
                          <img
                            src={facultyForm.photoUrl}
                            alt="Preview"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuASu860rwU_J3qXiuLE_I5HtOlHyL0uuIzE7nBbtQv3LB3CHGsQcaHOVdVEjMg4CIkDiQ_VEqdt-zFAoVx9CepHUV45AaX88Sum1Fize-5P68db1e13gFimHEl0ivfASQsVmTthyUzcGasoIl0Kr45PrrJNWDvEQq6yq9l1X7C91TCee_UACX5tF5n8aRTZy80Ps6V5LqGd2dP0pXQ2ryiSNZc_YgRtgIY6_AvSBL7ulAPHhrEzfaipPhfmdasVFWTWlmFSAMLt3HM";
                            }}
                          />
                        ) : (
                          <span className="material-symbols-outlined text-outline text-3xl font-light">person</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save
                    </button>
                  </div>
                </form>
              )}

              {/* Course Form */}
              {activeMenu === "courses" && (
                <form onSubmit={handleSaveCourse} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Course Title *</label>
                      <input
                        type="text"
                        required
                        value={courseForm.name}
                        onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })}
                        placeholder="e.g. Bachelor of Arts (B.A.)"
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Stream Stream</label>
                      <select
                        value={courseForm.stream}
                        onChange={(e) => setCourseForm({ ...courseForm, stream: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      >
                        <option>Arts</option>
                        <option>Science</option>
                        <option>Commerce</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Duration *</label>
                      <input
                        type="text"
                        required
                        value={courseForm.duration}
                        onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Seat Count *</label>
                      <input
                        type="number"
                        required
                        value={courseForm.seats}
                        onChange={(e) => setCourseForm({ ...courseForm, seats: parseInt(e.target.value) || 0 })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Fee Description *</label>
                      <input
                        type="text"
                        required
                        value={courseForm.fee}
                        onChange={(e) => setCourseForm({ ...courseForm, fee: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold">Eligibility Requirements *</label>
                    <input
                      type="text"
                      required
                      value={courseForm.eligibility}
                      onChange={(e) => setCourseForm({ ...courseForm, eligibility: e.target.value })}
                      placeholder="e.g. 12th Pass with Science"
                      className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                    />
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save
                    </button>
                  </div>
                </form>
              )}

              {/* Gallery Form */}
              {activeMenu === "gallery" && (
                <form onSubmit={handleSaveGallery} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Album Name / Title *</label>
                      <input
                        type="text"
                        required
                        value={galleryForm.albumTitle}
                        onChange={(e) => setGalleryForm({ ...galleryForm, albumTitle: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Event Date *</label>
                      <input
                        type="date"
                        required
                        value={galleryForm.eventDate}
                        onChange={(e) => setGalleryForm({ ...galleryForm, eventDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold">Image Caption *</label>
                    <input
                      type="text"
                      required
                      value={galleryForm.caption}
                      onChange={(e) => setGalleryForm({ ...galleryForm, caption: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold">Gallery Image (फ़ोटो अपलोड या URL) *</label>
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <div className="flex-1 w-full space-y-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              triggerSimulatedUpload(() => {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setGalleryForm(prev => ({ ...prev, imageUrl: reader.result }));
                                };
                                reader.readAsDataURL(file);
                              });
                            }
                          }}
                          className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                        />
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-on-surface-variant font-bold">OR URL:</span>
                          <input
                            type="url"
                            placeholder="https://example.com/photo.jpg"
                            value={galleryForm.imageUrl}
                            onChange={(e) => setGalleryForm({ ...galleryForm, imageUrl: e.target.value })}
                            className="w-full flex-1 px-3 py-1.5 rounded-lg border border-outline-variant bg-white outline-none text-xs"
                          />
                        </div>
                      </div>
                      <div className="w-24 h-16 rounded-xl overflow-hidden shrink-0 border border-outline-variant bg-surface-container-low flex items-center justify-center shadow-inner">
                        {galleryForm.imageUrl ? (
                          <img src={galleryForm.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                        ) : (
                          <span className="material-symbols-outlined text-outline text-2xl font-light">image</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save Photo
                    </button>
                  </div>
                </form>
              )}

              {/* News / Event Form */}
              {activeMenu === "news" && (
                <form onSubmit={handleSaveNews} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Event Title (English) *</label>
                      <input
                        type="text"
                        required
                        value={newsForm.titleEnglish}
                        onChange={(e) => setNewsForm({ ...newsForm, titleEnglish: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Event Title (Hindi) *</label>
                      <input
                        type="text"
                        required
                        value={newsForm.titleHindi}
                        onChange={(e) => setNewsForm({ ...newsForm, titleHindi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Brief Description (English)</label>
                      <textarea
                        rows="3"
                        value={newsForm.descriptionEnglish}
                        onChange={(e) => setNewsForm({ ...newsForm, descriptionEnglish: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      ></textarea>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Brief Description (Hindi)</label>
                      <textarea
                        rows="3"
                        value={newsForm.descriptionHindi}
                        onChange={(e) => setNewsForm({ ...newsForm, descriptionHindi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Detailed Content (English) - Max 600 words</label>
                      <textarea
                        rows="5"
                        value={newsForm.contentEnglish}
                        onChange={(e) => setNewsForm({ ...newsForm, contentEnglish: e.target.value })}
                        placeholder="Enter full news article in English..."
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      ></textarea>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Detailed Content (Hindi) - अधिकतम 600 शब्द</label>
                      <textarea
                        rows="5"
                        value={newsForm.contentHindi}
                        onChange={(e) => setNewsForm({ ...newsForm, contentHindi: e.target.value })}
                        placeholder="समाचार का पूरा विवरण हिंदी में लिखें..."
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Event Date *</label>
                      <input
                        type="date"
                        required
                        value={newsForm.eventDate}
                        onChange={(e) => setNewsForm({ ...newsForm, eventDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Event Image (फ़ोटो अपलोड या URL)</label>
                      <div className="flex items-center gap-4">
                        <div className="flex-grow space-y-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                triggerSimulatedUpload(() => {
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    setNewsForm(prev => ({ ...prev, imageUrl: reader.result }));
                                  };
                                  reader.readAsDataURL(file);
                                });
                              }
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-outline-variant bg-white outline-none file:mr-2 file:py-0.5 file:px-2 file:rounded-full file:border-0 file:text-[11px] file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer text-xs"
                          />
                          <input
                            type="url"
                            placeholder="Or enter image URL"
                            value={newsForm.imageUrl}
                            onChange={(e) => setNewsForm({ ...newsForm, imageUrl: e.target.value })}
                            className="w-full px-3 py-1.5 rounded-lg border border-outline-variant bg-white outline-none text-xs"
                          />
                        </div>
                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-outline-variant bg-surface-container-low flex items-center justify-center shadow-inner">
                          {newsForm.imageUrl ? (
                            <img src={newsForm.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <span className="material-symbols-outlined text-outline text-2xl font-light">image</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save Event
                    </button>
                  </div>
                </form>
              )}

              {/* Janbhagidari Form */}
              {activeMenu === "janbhagidari" && (
                <form onSubmit={handleSaveJanbhagidari} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Member Name (English) *</label>
                      <input
                        type="text"
                        required
                        value={janbhagidariForm.nameEn}
                        onChange={(e) => setJanbhagidariForm({ ...janbhagidariForm, nameEn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Member Name (Hindi) *</label>
                      <input
                        type="text"
                        required
                        value={janbhagidariForm.nameHi}
                        onChange={(e) => setJanbhagidariForm({ ...janbhagidariForm, nameHi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Role/Designation (English) *</label>
                      <input
                        type="text"
                        required
                        value={janbhagidariForm.roleEn}
                        onChange={(e) => setJanbhagidariForm({ ...janbhagidariForm, roleEn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Role/Designation (Hindi) *</label>
                      <input
                        type="text"
                        required
                        value={janbhagidariForm.roleHi}
                        onChange={(e) => setJanbhagidariForm({ ...janbhagidariForm, roleHi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save
                    </button>
                  </div>
                </form>
              )}

              {/* Office Staff Form */}
              {activeMenu === "officeStaff" && (
                <form onSubmit={handleSaveOfficeStaff} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Staff Name (English) *</label>
                      <input
                        type="text"
                        required
                        value={officeStaffForm.nameEn}
                        onChange={(e) => setOfficeStaffForm({ ...officeStaffForm, nameEn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Staff Name (Hindi) *</label>
                      <input
                        type="text"
                        required
                        value={officeStaffForm.nameHi}
                        onChange={(e) => setOfficeStaffForm({ ...officeStaffForm, nameHi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Designation (English) *</label>
                      <input
                        type="text"
                        required
                        value={officeStaffForm.roleEn}
                        onChange={(e) => setOfficeStaffForm({ ...officeStaffForm, roleEn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Designation (Hindi) *</label>
                      <input
                        type="text"
                        required
                        value={officeStaffForm.roleHi}
                        onChange={(e) => setOfficeStaffForm({ ...officeStaffForm, roleHi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save
                    </button>
                  </div>
                </form>
              )}

              {/* Committee Form */}
              {activeMenu === "committees" && (
                <form onSubmit={handleSaveCommittee} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Committee Name (English) *</label>
                      <input
                        type="text"
                        required
                        value={committeeForm.titleEn}
                        onChange={(e) => setCommitteeForm({ ...committeeForm, titleEn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Committee Name (Hindi) *</label>
                      <input
                        type="text"
                        required
                        value={committeeForm.titleHi}
                        onChange={(e) => setCommitteeForm({ ...committeeForm, titleHi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Convener (English/Hindi) *</label>
                      <input
                        type="text"
                        required
                        value={committeeForm.convenerEn}
                        onChange={(e) => setCommitteeForm({ ...committeeForm, convenerEn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Members (Comma-separated) *</label>
                      <input
                        type="text"
                        required
                        value={committeeForm.membersEn}
                        onChange={(e) => setCommitteeForm({ ...committeeForm, membersEn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save
                    </button>
                  </div>
                </form>
              )}

              {/* Required Document Form */}
              {activeMenu === "reqDocs" && (
                <form onSubmit={handleSaveReqDoc} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Required Document (English) *</label>
                      <input
                        type="text"
                        required
                        value={reqDocForm.labelEn}
                        onChange={(e) => setReqDocForm({ ...reqDocForm, labelEn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Required Document (Hindi) *</label>
                      <input
                        type="text"
                        required
                        value={reqDocForm.labelHi}
                        onChange={(e) => setReqDocForm({ ...reqDocForm, labelHi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save
                    </button>
                  </div>
                </form>
              )}

              {/* Library Rule Form */}
              {activeMenu === "library" && (
                <form onSubmit={handleSaveLibraryRule} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Library Rule (English) *</label>
                      <textarea
                        required
                        rows="3"
                        value={libraryRuleForm.ruleEn}
                        onChange={(e) => setLibraryRuleForm({ ...libraryRuleForm, ruleEn: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Library Rule (Hindi) *</label>
                      <textarea
                        required
                        rows="3"
                        value={libraryRuleForm.ruleHi}
                        onChange={(e) => setLibraryRuleForm({ ...libraryRuleForm, ruleHi: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeForm}
                      className="px-4 py-2 border border-outline rounded-lg font-bold"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Overview Panel Display */}
          {activeMenu === "overview" && !isAdding && !editingItem && (
            <div className="space-y-6">
              {/* Stats bento layout */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-surface-container-low p-5 rounded-2xl border-t-4 border-primary border-outline-variant/60 shadow-sm flex flex-col justify-between">
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase">
                    Total Enrolled Students
                  </span>
                  <span className="text-3xl font-extrabold text-primary mt-2">1,284</span>
                </div>
                <div className="bg-surface-container-low p-5 rounded-2xl border-t-4 border-secondary border-outline-variant/60 shadow-sm flex flex-col justify-between">
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase">
                    Active Notice Circulars
                  </span>
                  <span className="text-3xl font-extrabold text-secondary mt-2">{notices.length}</span>
                </div>
                <div className="bg-surface-container-low p-5 rounded-2xl border-t-4 border-green-700 border-outline-variant/60 shadow-sm flex flex-col justify-between">
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase">
                    Pending Inquiries
                  </span>
                  <span className="text-3xl font-extrabold text-green-700 mt-2">
                    {contactMessages.filter((m) => m.status === "Pending").length}
                  </span>
                </div>
              </div>

              {/* System logs info */}
              <div className="p-5 bg-yellow-50 rounded-2xl border border-yellow-200 text-xs text-yellow-800 leading-relaxed">
                <span className="font-bold block mb-1">System Administration Note:</span>
                This is a mock implementation of the admin portal. Notice uploads, gallery submissions, and message operations will update the global context states and persist locally in your browser's <code className="bg-yellow-100 px-1 rounded">localStorage</code>. When you log out or switch user roles, the changes will remain, letting you test real-time synchronization between the public views and dashboard modules.
              </div>
            </div>
          )}

          {/* Notices Management List */}
          {activeMenu === "notices" && !isAdding && !editingItem && (
            <div className="border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                  <tr>
                    <th className="px-5 py-3">Notice Detail / विवरण</th>
                    <th className="px-5 py-3">Category</th>
                    <th className="px-5 py-3">Publish Date</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/60 bg-white">
                  {notices.map((n) => (
                    <tr key={n.id} className="hover:bg-surface-container-low/40">
                      <td className="px-5 py-3 space-y-1">
                        <span className="font-bold text-primary block">{n.titleEnglish}</span>
                        <span className="text-[11px] text-on-surface-variant block">{n.titleHindi}</span>
                      </td>
                      <td className="px-5 py-3 font-semibold text-primary">{n.category}</td>
                      <td className="px-5 py-3 text-on-surface-variant">{n.publishDate}</td>
                      <td className="px-5 py-3">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            n.isImportant
                              ? "bg-red-100 text-red-700 animate-pulse"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {n.isImportant ? "Important" : "Active"}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditForm(n)}
                            className="p-1 text-primary hover:bg-primary/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this notice?")) {
                                deleteNotice(n.id);
                              }
                            }}
                            className="p-1 text-error hover:bg-error/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Downloads Management List */}
          {activeMenu === "downloads" && !isAdding && !editingItem && (
            <div className="border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                  <tr>
                    <th className="px-5 py-3">Document / विवरण</th>
                    <th className="px-5 py-3">Category</th>
                    <th className="px-5 py-3">Uploaded By</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/60 bg-white">
                  {downloads.map((d) => (
                    <tr key={d.id} className="hover:bg-surface-container-low/40">
                      <td className="px-5 py-3 space-y-1">
                        <span className="font-bold text-primary block">{d.titleEnglish}</span>
                        <span className="text-[11px] text-on-surface-variant block">{d.titleHindi}</span>
                      </td>
                      <td className="px-5 py-3">{d.category}</td>
                      <td className="px-5 py-3 text-on-surface-variant font-semibold">{d.uploadedBy}</td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditForm(d)}
                            className="p-1 text-primary hover:bg-primary/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this file?")) {
                                deleteDownload(d.id);
                              }
                            }}
                            className="p-1 text-error hover:bg-error/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Faculty Members Management List */}
          {activeMenu === "faculty" && !isAdding && !editingItem && (
            <div className="border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                  <tr>
                    <th className="px-5 py-3">Faculty Name</th>
                    <th className="px-5 py-3">Designation</th>
                    <th className="px-5 py-3">Department</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/60 bg-white">
                  {faculty.map((f) => (
                    <tr key={f.id} className="hover:bg-surface-container-low/40">
                      <td className="px-5 py-3 font-bold text-primary flex items-center gap-3">
                        <img
                          src={f.photoUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuASu860rwU_J3qXiuLE_I5HtOlHyL0uuIzE7nBbtQv3LB3CHGsQcaHOVdVEjMg4CIkDiQ_VEqdt-zFAoVx9CepHUV45AaX88Sum1Fize-5P68db1e13gFimHEl0ivfASQsVmTthyUzcGasoIl0Kr45PrrJNWDvEQq6yq9l1X7C91TCee_UACX5tF5n8aRTZy80Ps6V5LqGd2dP0pXQ2ryiSNZc_YgRtgIY6_AvSBL7ulAPHhrEzfaipPhfmdasVFWTWlmFSAMLt3HM"}
                          alt={f.name}
                          className="w-8 h-8 rounded-full object-cover border border-outline-variant shrink-0"
                          onError={(e) => {
                            e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuASu860rwU_J3qXiuLE_I5HtOlHyL0uuIzE7nBbtQv3LB3CHGsQcaHOVdVEjMg4CIkDiQ_VEqdt-zFAoVx9CepHUV45AaX88Sum1Fize-5P68db1e13gFimHEl0ivfASQsVmTthyUzcGasoIl0Kr45PrrJNWDvEQq6yq9l1X7C91TCee_UACX5tF5n8aRTZy80Ps6V5LqGd2dP0pXQ2ryiSNZc_YgRtgIY6_AvSBL7ulAPHhrEzfaipPhfmdasVFWTWlmFSAMLt3HM";
                          }}
                        />
                        <span>{f.name}</span>
                      </td>
                      <td className="px-5 py-3 font-semibold text-secondary">{f.designation}</td>
                      <td className="px-5 py-3">{f.department} Stream</td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditForm(f)}
                            className="p-1 text-primary hover:bg-primary/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this profile?")) {
                                deleteFaculty(f.id);
                              }
                            }}
                            className="p-1 text-error hover:bg-error/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Courses Management List */}
          {activeMenu === "courses" && !isAdding && !editingItem && (
            <div className="border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                  <tr>
                    <th className="px-5 py-3">Course / Stream Name</th>
                    <th className="px-5 py-3">Duration</th>
                    <th className="px-5 py-3">Seats</th>
                    <th className="px-5 py-3">Fee Structure</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/60 bg-white">
                  {courses.map((c) => (
                    <tr key={c.id} className="hover:bg-surface-container-low/40">
                      <td className="px-5 py-3 font-bold text-primary">{c.name}</td>
                      <td className="px-5 py-3">{c.duration}</td>
                      <td className="px-5 py-3 font-semibold">{c.seats} Seats</td>
                      <td className="px-5 py-3 text-secondary font-semibold">{c.fee}</td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditForm(c)}
                            className="p-1 text-primary hover:bg-primary/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this course?")) {
                                deleteCourse(c.id);
                              }
                            }}
                            className="p-1 text-error hover:bg-error/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Contact Messages Management List */}
          {activeMenu === "messages" && !isAdding && !editingItem && (
            <div className="space-y-4">
              {contactMessages.length === 0 ? (
                <p className="text-xs text-on-surface-variant italic py-6 text-center">
                  No feedback or inquiries received yet.
                </p>
              ) : (
                contactMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-5 rounded-2xl border text-xs sm:text-sm space-y-3 transition-all ${
                      msg.status === "Pending"
                        ? "bg-yellow-50/50 border-yellow-200"
                        : "bg-surface border-outline-variant/60"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4 flex-wrap">
                      <div>
                        <h5 className="font-bold text-primary text-sm">{msg.name}</h5>
                        <p className="text-[10px] text-on-surface-variant mt-0.5">
                          Mobile: {msg.mobile} | Email: {msg.email}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="text-[10px] text-outline font-semibold">
                          Date: {msg.createdAt ? msg.createdAt.split("T")[0] : ""}
                        </span>
                        <select
                          value={msg.status}
                          onChange={(e) => updateContactMessageStatus(msg.id, e.target.value)}
                          className="px-2 py-1 rounded bg-white border border-outline-variant text-[10px] font-bold"
                        >
                          <option>Pending</option>
                          <option>Reviewed</option>
                        </select>
                      </div>
                    </div>
                    <p className="bg-white p-3 rounded-lg border border-outline-variant/40 leading-relaxed font-medium">
                      {msg.message}
                    </p>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Gallery Management List */}
          {activeMenu === "gallery" && !isAdding && !editingItem && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gallery.map((g) => (
                <div
                  key={g.id}
                  className="bg-white rounded-2xl overflow-hidden border border-outline-variant flex hover:border-secondary transition-all"
                >
                  <div className="w-24 h-24 shrink-0 bg-surface-container">
                    <img src={g.imageUrl} alt={g.caption} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-xs text-primary line-clamp-1">{g.albumTitle}</h5>
                      <p className="text-[10px] text-on-surface-variant line-clamp-2 mt-1">{g.caption}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[9px] text-outline font-bold">{g.eventDate}</span>
                      <button
                        onClick={() => {
                          if (window.confirm("Are you sure you want to delete this photo?")) {
                            deleteGalleryItem(g.id);
                          }
                        }}
                        className="text-error hover:bg-error/5 p-1 rounded"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* News & Events Management List */}
          {activeMenu === "news" && !isAdding && !editingItem && (
            <div className="border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                  <tr>
                    <th className="px-5 py-3">Event Detail / विवरण</th>
                    <th className="px-5 py-3">Event Date</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/60 bg-white">
                  {newsEvents.map((news) => (
                    <tr key={news.id} className="hover:bg-surface-container-low/40">
                      <td className="px-5 py-3 space-y-1">
                        <span className="font-bold text-primary block">{news.titleEnglish}</span>
                        <span className="text-[11px] text-on-surface-variant block">{news.titleHindi}</span>
                      </td>
                      <td className="px-5 py-3 text-on-surface-variant">{news.eventDate}</td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditForm(news)}
                            className="p-1 text-primary hover:bg-primary/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this event?")) {
                                deleteNewsEvent(news.id);
                              }
                            }}
                            className="p-1 text-error hover:bg-error/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Janbhagidari Management List */}
          {activeMenu === "janbhagidari" && !isAdding && !editingItem && (
            <div className="border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                  <tr>
                    <th className="px-5 py-3">Member Name / सदस्य का नाम</th>
                    <th className="px-5 py-3">Role / पद</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/60 bg-white">
                  {janbhagidari.map((m) => (
                    <tr key={m.id} className="hover:bg-surface-container-low/40">
                      <td className="px-5 py-3 space-y-1">
                        <span className="font-bold text-primary block">{m.nameEn}</span>
                        <span className="text-[11px] text-on-surface-variant block">{m.nameHi}</span>
                      </td>
                      <td className="px-5 py-3 space-y-1">
                        <span className="font-semibold text-secondary block">{m.roleEn}</span>
                        <span className="text-[11px] text-on-surface-variant block">{m.roleHi}</span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditForm(m)}
                            className="p-1 text-primary hover:bg-primary/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this member?")) {
                                deleteJanbhagidari(m.id);
                              }
                            }}
                            className="p-1 text-error hover:bg-error/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Office Staff Management List */}
          {activeMenu === "officeStaff" && !isAdding && !editingItem && (
            <div className="border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                  <tr>
                    <th className="px-5 py-3">Staff Name / कर्मचारी का नाम</th>
                    <th className="px-5 py-3">Designation / पद</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/60 bg-white">
                  {officeStaff.map((s) => (
                    <tr key={s.id} className="hover:bg-surface-container-low/40">
                      <td className="px-5 py-3 space-y-1">
                        <span className="font-bold text-primary block">{s.nameEn}</span>
                        <span className="text-[11px] text-on-surface-variant block">{s.nameHi}</span>
                      </td>
                      <td className="px-5 py-3 space-y-1">
                        <span className="font-semibold text-secondary block">{s.roleEn}</span>
                        <span className="text-[11px] text-on-surface-variant block">{s.roleHi}</span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditForm(s)}
                            className="p-1 text-primary hover:bg-primary/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this staff member?")) {
                                deleteOfficeStaff(s.id);
                              }
                            }}
                            className="p-1 text-error hover:bg-error/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Committees Management List */}
          {activeMenu === "committees" && !isAdding && !editingItem && (
            <div className="border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                  <tr>
                    <th className="px-5 py-3">Committee Name / समिति का नाम</th>
                    <th className="px-5 py-3">Convener / संयोजक</th>
                    <th className="px-5 py-3">Members / सदस्य</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/60 bg-white">
                  {committees.map((com) => (
                    <tr key={com.id} className="hover:bg-surface-container-low/40">
                      <td className="px-5 py-3 space-y-1">
                        <span className="font-bold text-primary block">{com.titleEn}</span>
                        <span className="text-[11px] text-on-surface-variant block">{com.titleHi}</span>
                      </td>
                      <td className="px-5 py-3 font-semibold text-secondary">{com.convenerEn}</td>
                      <td className="px-5 py-3 text-on-surface-variant">{com.membersEn}</td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditForm(com)}
                            className="p-1 text-primary hover:bg-primary/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this committee?")) {
                                deleteCommittee(com.id);
                              }
                            }}
                            className="p-1 text-error hover:bg-error/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Required Documents Management List */}
          {activeMenu === "reqDocs" && !isAdding && !editingItem && (
            <div className="border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                  <tr>
                    <th className="px-5 py-3">Required Document (English) / आवश्यक दस्तावेज सूची</th>
                    <th className="px-5 py-3">Required Document (Hindi) / आवश्यक दस्तावेज सूची (हिंदी)</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/60 bg-white">
                  {reqDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-surface-container-low/40">
                      <td className="px-5 py-3 font-bold text-primary">{doc.labelEn}</td>
                      <td className="px-5 py-3 text-on-surface-variant">{doc.labelHi}</td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditForm(doc)}
                            className="p-1 text-primary hover:bg-primary/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this document?")) {
                                deleteReqDoc(doc.id);
                              }
                            }}
                            className="p-1 text-error hover:bg-error/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Library Rules Management List */}
          {activeMenu === "library" && !isAdding && !editingItem && (
            <div className="border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                  <tr>
                    <th className="px-5 py-3">Rule (English) / पुस्तकालय नियमावली</th>
                    <th className="px-5 py-3">Rule (Hindi) / पुस्तकालय नियमावली (हिंदी)</th>
                    <th className="px-5 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/60 bg-white">
                  {libraryRules.map((rule) => (
                    <tr key={rule.id} className="hover:bg-surface-container-low/40">
                      <td className="px-5 py-3 font-semibold text-primary">{rule.ruleEn}</td>
                      <td className="px-5 py-3 text-on-surface-variant">{rule.ruleHi}</td>
                      <td className="px-5 py-3">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditForm(rule)}
                            className="p-1 text-primary hover:bg-primary/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm("Are you sure you want to delete this rule?")) {
                                deleteLibraryRule(rule.id);
                              }
                            }}
                            className="p-1 text-error hover:bg-error/5 rounded"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {libraryRules.length === 0 && (
                    <tr>
                      <td colSpan="3" className="px-5 py-8 text-center text-on-surface-variant italic">
                        No library rules added yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* Departments Management Panel */}
          {activeMenu === "departments" && (
            <div className="space-y-6">
              {/* Department Stream Tabs */}
              <div className="flex border-b border-outline-variant gap-2 overflow-x-auto pb-1">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => {
                      setSelectedDeptId(dept.id);
                      setIsAddingSubject(false);
                      setEditingSubjectIndex(null);
                      setSubjectInput("");
                    }}
                    className={`px-5 py-2.5 rounded-t-xl font-bold text-xs whitespace-nowrap transition-all ${
                      selectedDeptId === dept.id
                        ? "bg-primary text-white"
                        : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    {dept.nameEnglish} | {dept.nameHindi}
                  </button>
                ))}
              </div>

              {/* Department Details and HOD Management Form */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/80 space-y-4">
                <h4 className="font-bold text-sm text-primary border-b border-outline-variant/60 pb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-lg">settings</span>
                  Department Details & Metadata
                </h4>
                <form onSubmit={handleSaveDeptInfo} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Head of Department (HOD) *</label>
                      <input
                        type="text"
                        required
                        value={deptHod}
                        onChange={(e) => setDeptHod(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-bold">Description (English) *</label>
                      <textarea
                        rows="3"
                        required
                        value={deptDescEn}
                        onChange={(e) => setDeptDescEn(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      ></textarea>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Description (Hindi) *</label>
                      <textarea
                        rows="3"
                        required
                        value={deptDescHi}
                        onChange={(e) => setDeptDescHi(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                    Save Details
                  </button>
                </form>
              </div>

              {/* Subject Management Section */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/80 space-y-4">
                <div className="flex justify-between items-center border-b border-outline-variant/60 pb-2">
                  <h4 className="font-bold text-sm text-primary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-lg">menu_book</span>
                    Core Subjects | विषय ({departments.find((d) => d.id === selectedDeptId)?.subjects?.length || 0})
                  </h4>
                  {!isAddingSubject && editingSubjectIndex === null && (
                    <button
                      onClick={() => {
                        setIsAddingSubject(true);
                        setSubjectInput("");
                      }}
                      className="bg-secondary hover:bg-secondary/95 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                      Add Subject
                    </button>
                  )}
                </div>

                {/* Add / Edit Inline Subject Form */}
                {(isAddingSubject || editingSubjectIndex !== null) && (
                  <form
                    onSubmit={isAddingSubject ? handleAddSubject : handleUpdateSubject}
                    className="p-4 bg-white border border-outline-variant rounded-xl flex gap-3 items-end"
                  >
                    <div className="flex-1 space-y-1.5">
                      <label className="font-bold text-xs">
                        {isAddingSubject ? "Add New Subject Name" : "Edit Subject Name"} *
                      </label>
                      <input
                        type="text"
                        required
                        autoFocus
                        value={subjectInput}
                        onChange={(e) => setSubjectInput(e.target.value)}
                        className="w-full px-3 py-1.5 text-xs rounded-lg border border-outline-variant bg-white outline-none"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsAddingSubject(false);
                          setEditingSubjectIndex(null);
                          setSubjectInput("");
                        }}
                        className="px-3 py-1.5 border border-outline text-xs rounded-lg font-bold"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="px-4 py-1.5 bg-primary text-white text-xs rounded-lg font-bold">
                        Save
                      </button>
                    </div>
                  </form>
                )}

                {/* Subjects Grid/List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {(departments.find((d) => d.id === selectedDeptId)?.subjects || []).map((sub, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-outline-variant rounded-xl flex justify-between items-center shadow-sm"
                    >
                      <span className="text-xs font-semibold text-on-surface">{sub}</span>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => {
                            setEditingSubjectIndex(idx);
                            setIsAddingSubject(false);
                            setSubjectInput(sub);
                          }}
                          className="p-1 hover:bg-primary/5 text-primary rounded"
                        >
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteSubject(idx)}
                          className="p-1 hover:bg-error/5 text-error rounded"
                        >
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* IQAC Cell Management Panel */}
          {activeMenu === "iqac" && (
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/80 space-y-6">
              {/* Tab Header */}
              <div className="flex border-b border-outline-variant pb-2 gap-4 text-xs sm:text-sm">
                <button
                  onClick={() => {
                    setIqacSubTab("committee");
                    setIsAddingAqar(false);
                    setEditingAqar(null);
                    setIsAddingSsr(false);
                    setEditingSsr(null);
                  }}
                  className={`pb-1 font-bold transition-all ${
                    iqacSubTab === "committee"
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  Committee Structure | समिति संरचना
                </button>
                <button
                  onClick={() => {
                    setIqacSubTab("aqar");
                    setIsAddingAqar(false);
                    setEditingAqar(null);
                    setIsAddingSsr(false);
                    setEditingSsr(null);
                  }}
                  className={`pb-1 font-bold transition-all ${
                    iqacSubTab === "aqar"
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  AQAR Reports | वार्षिक गुणवत्ता आश्वासन
                </button>
                <button
                  onClick={() => {
                    setIqacSubTab("ssr");
                    setIsAddingAqar(false);
                    setEditingAqar(null);
                    setIsAddingSsr(false);
                    setEditingSsr(null);
                  }}
                  className={`pb-1 font-bold transition-all ${
                    iqacSubTab === "ssr"
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  SSR & Feedback | स्व-अध्ययन रिपोर्ट
                </button>
              </div>

              {/* Subtab 1: Committee Members */}
              {iqacSubTab === "committee" && (
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-primary border-b border-outline-variant/60 pb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-lg">verified</span>
                    IQAC Committee Members | आंतरिक गुणवत्ता आश्वासन प्रकोष्ठ
                  </h4>
                  <form onSubmit={handleSaveIqac} className="space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-bold">Chairman *</label>
                        <input
                          type="text"
                          required
                          value={iqacForm.chairman}
                          onChange={(e) => setIqacForm({ ...iqacForm, chairman: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-bold">Coordinator *</label>
                        <input
                          type="text"
                          required
                          value={iqacForm.coordinator}
                          onChange={(e) => setIqacForm({ ...iqacForm, coordinator: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-bold">Management Representative *</label>
                        <input
                          type="text"
                          required
                          value={iqacForm.managementRep}
                          onChange={(e) => setIqacForm({ ...iqacForm, managementRep: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-bold">Faculty Members (Comma-separated) *</label>
                        <input
                          type="text"
                          required
                          value={iqacForm.facultyMembers}
                          onChange={(e) => setIqacForm({ ...iqacForm, facultyMembers: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                        />
                      </div>
                    </div>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save Committee Details
                    </button>
                  </form>
                </div>
              )}

              {/* Subtab 2: AQAR Reports */}
              {iqacSubTab === "aqar" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-lg">description</span>
                      AQAR Reports | वार्षिक गुणवत्ता आश्वासन रिपोर्ट
                    </h4>
                    {!isAddingAqar && !editingAqar && (
                      <button
                        onClick={openAddAqar}
                        className="bg-secondary hover:bg-secondary/95 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-xs">add</span>
                        Add AQAR Report
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Form */}
                  {(isAddingAqar || editingAqar) ? (
                    <form onSubmit={handleSaveAqar} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-4 text-xs sm:text-sm">
                      <h5 className="font-bold text-xs text-primary">
                        {editingAqar ? "Edit AQAR Report" : "Add New AQAR Report"}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold">Year (e.g. 2025-26) *</label>
                          <input
                            type="text"
                            required
                            value={aqarForm.year}
                            onChange={(e) => setAqarForm({ ...aqarForm, year: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">PDF Link / URL *</label>
                          <input
                            type="url"
                            required
                            value={aqarForm.pdfUrl}
                            onChange={(e) => setAqarForm({ ...aqarForm, pdfUrl: e.target.value })}
                            placeholder="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold">Title (English) *</label>
                          <input
                            type="text"
                            required
                            value={aqarForm.titleEn}
                            onChange={(e) => setAqarForm({ ...aqarForm, titleEn: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">Title (Hindi) *</label>
                          <input
                            type="text"
                            required
                            value={aqarForm.titleHi}
                            onChange={(e) => setAqarForm({ ...aqarForm, titleHi: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            setIsAddingAqar(false);
                            setEditingAqar(null);
                          }}
                          className="px-3 py-1.5 border border-outline rounded-lg font-bold"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="px-4 py-1.5 bg-primary text-white rounded-lg font-bold">
                          Save
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Table List */
                    <div className="border border-outline-variant rounded-xl overflow-hidden">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                          <tr>
                            <th className="px-4 py-2.5">Year</th>
                            <th className="px-4 py-2.5">Title (English)</th>
                            <th className="px-4 py-2.5">Title (Hindi)</th>
                            <th className="px-4 py-2.5 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/60 bg-white">
                          {(aqarDocs || []).map((doc) => (
                            <tr key={doc.id} className="hover:bg-surface-container-low/40">
                              <td className="px-4 py-2.5 font-bold text-primary">{doc.year}</td>
                              <td className="px-4 py-2.5 text-on-surface">{doc.titleEn}</td>
                              <td className="px-4 py-2.5 text-on-surface-variant">{doc.titleHi}</td>
                              <td className="px-4 py-2.5">
                                <div className="flex gap-2 justify-center">
                                  <button
                                    onClick={() => openEditAqar(doc)}
                                    className="p-1 text-primary hover:bg-primary/5 rounded"
                                  >
                                    <span className="material-symbols-outlined text-lg">edit</span>
                                  </button>
                                  <button
                                    onClick={() => {
                                      if (window.confirm("Are you sure you want to delete this report?")) {
                                        deleteAqarDoc(doc.id);
                                      }
                                    }}
                                    className="p-1 text-error hover:bg-error/5 rounded"
                                  >
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                          {(aqarDocs || []).length === 0 && (
                            <tr>
                              <td colSpan="4" className="px-4 py-8 text-center text-on-surface-variant italic">
                                No AQAR reports added yet.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Subtab 3: SSR & Feedback Reports */}
              {iqacSubTab === "ssr" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-lg">task_alt</span>
                      Self Study Report (SSR) & Feedback | स्व-अध्ययन रिपोर्ट
                    </h4>
                    {!isAddingSsr && !editingSsr && (
                      <button
                        onClick={openAddSsr}
                        className="bg-secondary hover:bg-secondary/95 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-xs">add</span>
                        Add SSR Report
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Form */}
                  {(isAddingSsr || editingSsr) ? (
                    <form onSubmit={handleSaveSsr} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-4 text-xs sm:text-sm">
                      <h5 className="font-bold text-xs text-primary">
                        {editingSsr ? "Edit SSR Report / Feedback" : "Add New SSR Report / Feedback"}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold">PDF Link / URL *</label>
                          <input
                            type="url"
                            required
                            value={ssrForm.pdfUrl}
                            onChange={(e) => setSsrForm({ ...ssrForm, pdfUrl: e.target.value })}
                            placeholder="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold">Title (English) *</label>
                          <input
                            type="text"
                            required
                            value={ssrForm.titleEn}
                            onChange={(e) => setSsrForm({ ...ssrForm, titleEn: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">Title (Hindi) *</label>
                          <input
                            type="text"
                            required
                            value={ssrForm.titleHi}
                            onChange={(e) => setSsrForm({ ...ssrForm, titleHi: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            setIsAddingSsr(false);
                            setEditingSsr(null);
                          }}
                          className="px-3 py-1.5 border border-outline rounded-lg font-bold"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="px-4 py-1.5 bg-primary text-white rounded-lg font-bold">
                          Save
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Table List */
                    <div className="border border-outline-variant rounded-xl overflow-hidden">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                          <tr>
                            <th className="px-4 py-2.5">Title (English)</th>
                            <th className="px-4 py-2.5">Title (Hindi)</th>
                            <th className="px-4 py-2.5 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/60 bg-white">
                          {(ssrDocs || []).map((doc) => (
                            <tr key={doc.id} className="hover:bg-surface-container-low/40">
                              <td className="px-4 py-2.5 text-on-surface font-semibold">{doc.titleEn}</td>
                              <td className="px-4 py-2.5 text-on-surface-variant">{doc.titleHi}</td>
                              <td className="px-4 py-2.5">
                                <div className="flex gap-2 justify-center">
                                  <button
                                    onClick={() => openEditSsr(doc)}
                                    className="p-1 text-primary hover:bg-primary/5 rounded"
                                  >
                                    <span className="material-symbols-outlined text-lg">edit</span>
                                  </button>
                                  <button
                                    onClick={() => {
                                      if (window.confirm("Are you sure you want to delete this report?")) {
                                        deleteSsrDoc(doc.id);
                                      }
                                    }}
                                    className="p-1 text-error hover:bg-error/5 rounded"
                                  >
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                          {(ssrDocs || []).length === 0 && (
                            <tr>
                              <td colSpan="3" className="px-4 py-8 text-center text-on-surface-variant italic">
                                No SSR reports or feedback added yet.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Research & Development Cell Management Panel */}
          {activeMenu === "research" && (
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/80 space-y-6">
              {/* Tab Header */}
              <div className="flex border-b border-outline-variant pb-2 gap-4 text-xs sm:text-sm overflow-x-auto">
                <button
                  onClick={() => {
                    setResearchSubTab("committee");
                    setIsAddingPub(false);
                    setEditingPub(null);
                    setIsAddingProj(false);
                    setEditingProj(null);
                    setIsAddingEvent(false);
                    setEditingEvent(null);
                  }}
                  className={`pb-1 font-bold whitespace-nowrap transition-all ${
                    researchSubTab === "committee"
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  Committee Structure | समिति संरचना
                </button>
                <button
                  onClick={() => {
                    setResearchSubTab("publications");
                    setIsAddingPub(false);
                    setEditingPub(null);
                    setIsAddingProj(false);
                    setEditingProj(null);
                    setIsAddingEvent(false);
                    setEditingEvent(null);
                  }}
                  className={`pb-1 font-bold whitespace-nowrap transition-all ${
                    researchSubTab === "publications"
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  Publications | शोध पत्र
                </button>
                <button
                  onClick={() => {
                    setResearchSubTab("projects");
                    setIsAddingPub(false);
                    setEditingPub(null);
                    setIsAddingProj(false);
                    setEditingProj(null);
                    setIsAddingEvent(false);
                    setEditingEvent(null);
                  }}
                  className={`pb-1 font-bold whitespace-nowrap transition-all ${
                    researchSubTab === "projects"
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  Research Projects | शोध परियोजनाएं
                </button>
                <button
                  onClick={() => {
                    setResearchSubTab("events");
                    setIsAddingPub(false);
                    setEditingPub(null);
                    setIsAddingProj(false);
                    setEditingProj(null);
                    setIsAddingEvent(false);
                    setEditingEvent(null);
                  }}
                  className={`pb-1 font-bold whitespace-nowrap transition-all ${
                    researchSubTab === "events"
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  Seminars & Workshops | सेमीनार एवं कार्यशाला
                </button>
              </div>

              {/* Subtab 1: Committee Members */}
              {researchSubTab === "committee" && (
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-primary border-b border-outline-variant/60 pb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-lg">groups</span>
                    R&D Committee Members | अनुसंधान एवं विकास प्रकोष्ठ समिति
                  </h4>
                  <form onSubmit={handleSaveResearchCommittee} className="space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-bold">Convener / संयोजक *</label>
                        <input
                          type="text"
                          required
                          value={researchCommitteeForm.convener}
                          onChange={(e) => setResearchCommitteeForm({ ...researchCommitteeForm, convener: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-bold">Co-Convener / सह-संयोजक *</label>
                        <input
                          type="text"
                          required
                          value={researchCommitteeForm.coConvener}
                          onChange={(e) => setResearchCommitteeForm({ ...researchCommitteeForm, coConvener: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold">Members (Comma-separated) / सदस्य *</label>
                      <textarea
                        required
                        rows="2"
                        value={researchCommitteeForm.members}
                        onChange={(e) => setResearchCommitteeForm({ ...researchCommitteeForm, members: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none resize-none"
                      />
                    </div>
                    <button type="submit" className="px-5 py-2 bg-primary text-white rounded-lg font-bold">
                      Save Committee Details
                    </button>
                  </form>
                </div>
              )}

              {/* Subtab 2: Publications */}
              {researchSubTab === "publications" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-lg">menu_book</span>
                      Faculty Publications | संकाय शोध प्रकाशन
                    </h4>
                    {!isAddingPub && !editingPub && (
                      <button
                        onClick={openAddResearchPub}
                        className="bg-secondary hover:bg-secondary/95 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-xs">add</span>
                        Add Publication
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Form */}
                  {(isAddingPub || editingPub) ? (
                    <form onSubmit={handleSaveResearchPub} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-4 text-xs sm:text-sm">
                      <h5 className="font-bold text-xs text-primary">
                        {editingPub ? "Edit Publication Details" : "Add New Publication"}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold">Paper Title *</label>
                          <input
                            type="text"
                            required
                            value={researchPublicationForm.title}
                            onChange={(e) => setResearchPublicationForm({ ...researchPublicationForm, title: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">Author *</label>
                          <input
                            type="text"
                            required
                            value={researchPublicationForm.author}
                            onChange={(e) => setResearchPublicationForm({ ...researchPublicationForm, author: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold">Journal Name *</label>
                          <input
                            type="text"
                            required
                            value={researchPublicationForm.journal}
                            onChange={(e) => setResearchPublicationForm({ ...researchPublicationForm, journal: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">Year *</label>
                          <input
                            type="text"
                            required
                            value={researchPublicationForm.year}
                            onChange={(e) => setResearchPublicationForm({ ...researchPublicationForm, year: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">ISSN / ISBN</label>
                          <input
                            type="text"
                            value={researchPublicationForm.issn}
                            onChange={(e) => setResearchPublicationForm({ ...researchPublicationForm, issn: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-bold">PDF Link / URL</label>
                        <input
                          type="url"
                          value={researchPublicationForm.url}
                          onChange={(e) => setResearchPublicationForm({ ...researchPublicationForm, url: e.target.value })}
                          placeholder="https://example.com/paper.pdf"
                          className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                        />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            setIsAddingPub(false);
                            setEditingPub(null);
                          }}
                          className="px-3 py-1.5 border border-outline rounded-lg font-bold"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="px-4 py-1.5 bg-primary text-white rounded-lg font-bold">
                          Save
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Table List */
                    <div className="border border-outline-variant rounded-xl overflow-hidden overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm min-w-[600px]">
                        <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                          <tr>
                            <th className="px-4 py-2.5">Paper Title</th>
                            <th className="px-4 py-2.5">Author</th>
                            <th className="px-4 py-2.5">Journal</th>
                            <th className="px-4 py-2.5 text-center">Year</th>
                            <th className="px-4 py-2.5 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/60 bg-white">
                          {(researchPublications || []).map((pub) => (
                            <tr key={pub.id} className="hover:bg-surface-container-low/40">
                              <td className="px-4 py-2.5 font-semibold text-primary truncate max-w-xs">{pub.title}</td>
                              <td className="px-4 py-2.5 text-on-surface">{pub.author}</td>
                              <td className="px-4 py-2.5 text-on-surface-variant italic">{pub.journal}</td>
                              <td className="px-4 py-2.5 text-center text-on-surface">{pub.year}</td>
                              <td className="px-4 py-2.5">
                                <div className="flex gap-2 justify-center">
                                  <button
                                    onClick={() => openEditResearchPub(pub)}
                                    className="p-1 text-primary hover:bg-primary/5 rounded"
                                  >
                                    <span className="material-symbols-outlined text-lg">edit</span>
                                  </button>
                                  <button
                                    onClick={() => {
                                      if (window.confirm("Are you sure you want to delete this publication?")) {
                                        deleteResearchPublication(pub.id);
                                      }
                                    }}
                                    className="p-1 text-error hover:bg-error/5 rounded"
                                  >
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                          {(researchPublications || []).length === 0 && (
                            <tr>
                              <td colSpan="5" className="px-4 py-8 text-center text-on-surface-variant italic">
                                No publications added yet.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Subtab 3: Projects */}
              {researchSubTab === "projects" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-lg">account_balance_wallet</span>
                      Research Projects | शोध परियोजनाएं
                    </h4>
                    {!isAddingProj && !editingProj && (
                      <button
                        onClick={openAddResearchProj}
                        className="bg-secondary hover:bg-secondary/95 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-xs">add</span>
                        Add Project
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Form */}
                  {(isAddingProj || editingProj) ? (
                    <form onSubmit={handleSaveResearchProject} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-4 text-xs sm:text-sm">
                      <h5 className="font-bold text-xs text-primary">
                        {editingProj ? "Edit Project Details" : "Add New Project"}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold">Project Title *</label>
                          <input
                            type="text"
                            required
                            value={researchProjectForm.title}
                            onChange={(e) => setResearchProjectForm({ ...researchProjectForm, title: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">Principal Investigator *</label>
                          <input
                            type="text"
                            required
                            value={researchProjectForm.investigator}
                            onChange={(e) => setResearchProjectForm({ ...researchProjectForm, investigator: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold">Funding Agency *</label>
                          <input
                            type="text"
                            required
                            value={researchProjectForm.agency}
                            onChange={(e) => setResearchProjectForm({ ...researchProjectForm, agency: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">Grant Amount (e.g. ₹1,50,000) *</label>
                          <input
                            type="text"
                            required
                            value={researchProjectForm.amount}
                            onChange={(e) => setResearchProjectForm({ ...researchProjectForm, amount: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">Status *</label>
                          <select
                            value={researchProjectForm.status}
                            onChange={(e) => setResearchProjectForm({ ...researchProjectForm, status: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          >
                            <option value="Ongoing">Ongoing</option>
                            <option value="Completed">Completed</option>
                            <option value="सक्रिय">सक्रिय (Ongoing)</option>
                            <option value="पूर्ण">पूर्ण (Completed)</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            setIsAddingProj(false);
                            setEditingProj(null);
                          }}
                          className="px-3 py-1.5 border border-outline rounded-lg font-bold"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="px-4 py-1.5 bg-primary text-white rounded-lg font-bold">
                          Save
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Table List */
                    <div className="border border-outline-variant rounded-xl overflow-hidden overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm min-w-[600px]">
                        <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                          <tr>
                            <th className="px-4 py-2.5">Project Title</th>
                            <th className="px-4 py-2.5">Investigator</th>
                            <th className="px-4 py-2.5">Agency</th>
                            <th className="px-4 py-2.5">Amount</th>
                            <th className="px-4 py-2.5">Status</th>
                            <th className="px-4 py-2.5 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/60 bg-white">
                          {(researchProjects || []).map((proj) => (
                            <tr key={proj.id} className="hover:bg-surface-container-low/40">
                              <td className="px-4 py-2.5 font-semibold text-primary truncate max-w-xs">{proj.title}</td>
                              <td className="px-4 py-2.5 text-on-surface">{proj.investigator}</td>
                              <td className="px-4 py-2.5 text-on-surface-variant">{proj.agency}</td>
                              <td className="px-4 py-2.5 text-on-surface font-bold">{proj.amount}</td>
                              <td className="px-4 py-2.5">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  proj.status === "Ongoing" || proj.status === "सक्रिय" 
                                    ? "bg-secondary-container text-on-secondary-container" 
                                    : "bg-surface-container-high text-on-surface-variant"
                                }`}>
                                  {proj.status}
                                </span>
                              </td>
                              <td className="px-4 py-2.5">
                                <div className="flex gap-2 justify-center">
                                  <button
                                    onClick={() => openEditResearchProj(proj)}
                                    className="p-1 text-primary hover:bg-primary/5 rounded"
                                  >
                                    <span className="material-symbols-outlined text-lg">edit</span>
                                  </button>
                                  <button
                                    onClick={() => {
                                      if (window.confirm("Are you sure you want to delete this project?")) {
                                        deleteResearchProject(proj.id);
                                      }
                                    }}
                                    className="p-1 text-error hover:bg-error/5 rounded"
                                  >
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                          {(researchProjects || []).length === 0 && (
                            <tr>
                              <td colSpan="6" className="px-4 py-8 text-center text-on-surface-variant italic">
                                No projects added yet.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Subtab 4: Events */}
              {researchSubTab === "events" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm text-primary flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-lg">event_available</span>
                      Seminars & Workshops Organized | सेमिनार और कार्यशालाएं
                    </h4>
                    {!isAddingEvent && !editingEvent && (
                      <button
                        onClick={openAddResearchEvent}
                        className="bg-secondary hover:bg-secondary/95 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-xs">add</span>
                        Add Event
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Form */}
                  {(isAddingEvent || editingEvent) ? (
                    <form onSubmit={handleSaveResearchEvent} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant space-y-4 text-xs sm:text-sm">
                      <h5 className="font-bold text-xs text-primary">
                        {editingEvent ? "Edit Event Details" : "Add New Event"}
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold">Event Title *</label>
                          <input
                            type="text"
                            required
                            value={researchEventForm.title}
                            onChange={(e) => setResearchEventForm({ ...researchEventForm, title: e.target.value })}
                            placeholder="e.g. National Seminar on Green Chemistry"
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">Date *</label>
                          <input
                            type="date"
                            required
                            value={researchEventForm.date}
                            onChange={(e) => setResearchEventForm({ ...researchEventForm, date: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="font-bold">Coordinator / Convener *</label>
                          <input
                            type="text"
                            required
                            value={researchEventForm.coordinator}
                            onChange={(e) => setResearchEventForm({ ...researchEventForm, coordinator: e.target.value })}
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="font-bold">Focus Theme / Topic *</label>
                          <input
                            type="text"
                            required
                            value={researchEventForm.theme}
                            onChange={(e) => setResearchEventForm({ ...researchEventForm, theme: e.target.value })}
                            placeholder="e.g. Intellectual Property Rights"
                            className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-white outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            setIsAddingEvent(false);
                            setEditingEvent(null);
                          }}
                          className="px-3 py-1.5 border border-outline rounded-lg font-bold"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="px-4 py-1.5 bg-primary text-white rounded-lg font-bold">
                          Save
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Table List */
                    <div className="border border-outline-variant rounded-xl overflow-hidden overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm min-w-[600px]">
                        <thead className="bg-surface-container border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                          <tr>
                            <th className="px-4 py-2.5">Event Title</th>
                            <th className="px-4 py-2.5">Date</th>
                            <th className="px-4 py-2.5">Coordinator</th>
                            <th className="px-4 py-2.5">Theme</th>
                            <th className="px-4 py-2.5 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/60 bg-white">
                          {(researchEvents || []).map((ev) => (
                            <tr key={ev.id} className="hover:bg-surface-container-low/40">
                              <td className="px-4 py-2.5 font-semibold text-primary truncate max-w-xs">{ev.title}</td>
                              <td className="px-4 py-2.5 text-on-surface font-mono">{ev.date}</td>
                              <td className="px-4 py-2.5 text-on-surface">{ev.coordinator}</td>
                              <td className="px-4 py-2.5 text-on-surface-variant truncate max-w-xs">{ev.theme}</td>
                              <td className="px-4 py-2.5">
                                <div className="flex gap-2 justify-center">
                                  <button
                                    onClick={() => openEditResearchEvent(ev)}
                                    className="p-1 text-primary hover:bg-primary/5 rounded"
                                  >
                                    <span className="material-symbols-outlined text-lg">edit</span>
                                  </button>
                                  <button
                                    onClick={() => {
                                      if (window.confirm("Are you sure you want to delete this event?")) {
                                        deleteResearchEvent(ev.id);
                                      }
                                    }}
                                    className="p-1 text-error hover:bg-error/5 rounded"
                                  >
                                    <span className="material-symbols-outlined text-lg">delete</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                          {(researchEvents || []).length === 0 && (
                            <tr>
                              <td colSpan="5" className="px-4 py-8 text-center text-on-surface-variant italic">
                                No events added yet.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
