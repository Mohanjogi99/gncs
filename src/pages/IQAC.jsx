import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function IQAC() {
  const {
    language,
    t,
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
    currentUser
  } = useContext(AppContext);

  const currentAqarDocs = aqarDocs || [];
  const currentSsrDocs = ssrDocs || [];

  const isPrincipal = currentUser && (currentUser.role === "Principal" || currentUser.role === "Super Admin");

  // Fallbacks for hardcoded text
  const introEnFallback = iqacDetails?.introEn || "In accordance with the guidelines of National Assessment and Accreditation Council (NAAC), Bengaluru, the Internal Quality Assurance Cell (IQAC) has been established at Government Naveen College, Saragaon. It functions as a key catalyst for planning, guiding, and monitoring quality enhancement activities.";
  const introHiFallback = iqacDetails?.introHi || "राष्ट्रीय मूल्यांकन एवं प्रत्यायन परिषद (नैक), बेंगलुरु की सिफ़ारिशों के अनुसार, शासकीय नवीन महाविद्यालय, सारागांव में शैक्षणिक गुणवत्ता के सतत उन्नयन एवं संवर्धन हेतु आंतरिक गुणवत्ता आश्वासन प्रकोष्ठ (IQAC) का गठन किया गया है। यह प्रकोष्ठ महाविद्यालय में गुणवत्तापूर्ण शैक्षणिक व प्रशासनिक गतिविधियों की रूपरेखा तैयार करता है।";

  const practiceTitleEnFallback = iqacDetails?.practiceTitleEn || "Best Practice 1: Environment & Green Audit";
  const practiceTitleHiFallback = iqacDetails?.practiceTitleHi || "सर्वोत्तम अभ्यास 1: पर्यावरण और हरित लेखापरीक्षा";
  const practiceDescEnFallback = iqacDetails?.practiceDescEn || "Active campus afforestation campaigns paired with digital paperless administration efforts, waste management auditing, and rainwater harvesting initiatives.";
  const practiceDescHiFallback = iqacDetails?.practiceDescHi || "महाविद्यालय परिसर में सघन वृक्षारोपण और ऊर्जा संरक्षण हेतु सौर ऊर्जा उपकरणों को बढ़ावा देना। जल संचयन के लिए रूफ वाटर हार्वेस्टिंग सिस्टम की स्थापना।";

  const distinctTitleEnFallback = iqacDetails?.distinctTitleEn || "Institutional Distinctiveness: Rural Women Upliftment";
  const distinctTitleHiFallback = iqacDetails?.distinctTitleHi || "संस्थागत विशिष्टता: ग्रामीण महिला उत्थान";
  const distinctDescEnFallback = iqacDetails?.distinctDescEn || "Providing career mentoring cells, local community-led skills sessions, and scholarship coordination for remote girls and reserved caste students in Chhattisgarh.";
  const distinctDescHiFallback = iqacDetails?.distinctDescHi || "सारागांव क्षेत्र के दूरदराज के गांवों की अनुसूचित जनजाति/जाति एवं पिछड़े वर्ग की छात्राओं को निशुल्क कंप्यूटर प्रशिक्षण एवं करियर परामर्श प्रदान कर आत्मनिर्भर बनाना।";

  // Modal display states
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showAqarModal, setShowAqarModal] = useState(false);
  const [showSsrModal, setShowSsrModal] = useState(false);
  const [showPracticesModal, setShowPracticesModal] = useState(false);

  // Edit objects states
  const [editingAqar, setEditingAqar] = useState(null);
  const [editingSsr, setEditingSsr] = useState(null);

  // Form states
  const [infoForm, setInfoForm] = useState({
    chairman: "",
    coordinator: "",
    managementRep: "",
    facultyMembers: "",
    introEn: "",
    introHi: ""
  });

  const [aqarForm, setAqarForm] = useState({
    year: "",
    pdfUrl: "",
    titleEn: "",
    titleHi: ""
  });

  const [ssrForm, setSsrForm] = useState({
    pdfUrl: "",
    titleEn: "",
    titleHi: ""
  });

  const [practicesForm, setPracticesForm] = useState({
    practiceTitleEn: "",
    practiceTitleHi: "",
    practiceDescEn: "",
    practiceDescHi: "",
    distinctTitleEn: "",
    distinctTitleHi: "",
    distinctDescEn: "",
    distinctDescHi: ""
  });

  // Modal Openers
  const openEditInfoModal = () => {
    setInfoForm({
      chairman: iqacDetails?.chairman || "",
      coordinator: iqacDetails?.coordinator || "",
      managementRep: iqacDetails?.managementRep || "",
      facultyMembers: iqacDetails?.facultyMembers || "",
      introEn: iqacDetails?.introEn || introEnFallback,
      introHi: iqacDetails?.introHi || introHiFallback
    });
    setShowInfoModal(true);
  };

  const handleInfoSubmit = async (e) => {
    e.preventDefault();
    await updateIqacDetails(infoForm);
    setShowInfoModal(false);
  };

  const openAddAqarModal = () => {
    setEditingAqar(null);
    setAqarForm({ year: "", pdfUrl: "", titleEn: "", titleHi: "" });
    setShowAqarModal(true);
  };

  const openEditAqarModal = (doc) => {
    setEditingAqar(doc);
    setAqarForm({
      year: doc.year || "",
      pdfUrl: doc.pdfUrl || "",
      titleEn: doc.titleEn || "",
      titleHi: doc.titleHi || ""
    });
    setShowAqarModal(true);
  };

  const handleAqarSubmit = async (e) => {
    e.preventDefault();
    if (!aqarForm.year || !aqarForm.titleEn) {
      alert("Year and Title (English) are required!");
      return;
    }
    const data = {
      year: aqarForm.year,
      pdfUrl: aqarForm.pdfUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      titleEn: aqarForm.titleEn,
      titleHi: aqarForm.titleHi || aqarForm.titleEn
    };
    if (editingAqar) {
      await updateAqarDoc(editingAqar.id, data);
    } else {
      await addAqarDoc(data);
    }
    setShowAqarModal(false);
  };

  const handleDeleteAqarClick = (id) => {
    const confirmMsg = language === "hi" ? "क्या आप वाकई इस रिपोर्ट को हटाना चाहते हैं?" : "Are you sure you want to delete this report?";
    if (window.confirm(confirmMsg)) {
      deleteAqarDoc(id);
    }
  };

  const openAddSsrModal = () => {
    setEditingSsr(null);
    setSsrForm({ pdfUrl: "", titleEn: "", titleHi: "" });
    setShowSsrModal(true);
  };

  const openEditSsrModal = (doc) => {
    setEditingSsr(doc);
    setSsrForm({
      pdfUrl: doc.pdfUrl || "",
      titleEn: doc.titleEn || "",
      titleHi: doc.titleHi || ""
    });
    setShowSsrModal(true);
  };

  const handleSsrSubmit = async (e) => {
    e.preventDefault();
    if (!ssrForm.titleEn) {
      alert("Title (English) is required!");
      return;
    }
    const data = {
      pdfUrl: ssrForm.pdfUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      titleEn: ssrForm.titleEn,
      titleHi: ssrForm.titleHi || ssrForm.titleEn
    };
    if (editingSsr) {
      await updateSsrDoc(editingSsr.id, data);
    } else {
      await addSsrDoc(data);
    }
    setShowSsrModal(false);
  };

  const handleDeleteSsrClick = (id) => {
    const confirmMsg = language === "hi" ? "क्या आप वाकई इस दस्तावेज़ को हटाना चाहते हैं?" : "Are you sure you want to delete this document?";
    if (window.confirm(confirmMsg)) {
      deleteSsrDoc(id);
    }
  };

  const openEditPracticesModal = () => {
    setPracticesForm({
      practiceTitleEn: iqacDetails?.practiceTitleEn || practiceTitleEnFallback,
      practiceTitleHi: iqacDetails?.practiceTitleHi || practiceTitleHiFallback,
      practiceDescEn: iqacDetails?.practiceDescEn || practiceDescEnFallback,
      practiceDescHi: iqacDetails?.practiceDescHi || practiceDescHiFallback,
      distinctTitleEn: iqacDetails?.distinctTitleEn || distinctTitleEnFallback,
      distinctTitleHi: iqacDetails?.distinctTitleHi || distinctTitleHiFallback,
      distinctDescEn: iqacDetails?.distinctDescEn || distinctDescEnFallback,
      distinctDescHi: iqacDetails?.distinctDescHi || distinctDescHiFallback
    });
    setShowPracticesModal(true);
  };

  const handlePracticesSubmit = async (e) => {
    e.preventDefault();
    await updateIqacDetails(practicesForm);
    setShowPracticesModal(false);
  };

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "आई.क्यू.ए.सी. एवं नैक तैयारी" : "IQAC / NAAC Preparation"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Quality Assurance & Accreditation Files
        </p>
      </section>

      {/* IQAC Introduction */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b border-outline-variant pb-2">
          <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">verified</span>
            {language === "hi" ? "आंतरिक गुणवत्ता आश्वासन प्रकोष्ठ (IQAC)" : "Internal Quality Assurance Cell (IQAC)"}
          </h3>
          {isPrincipal && (
            <button
              onClick={openEditInfoModal}
              className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
              {language === "hi" ? "संपादित करें" : "Edit Info"}
            </button>
          )}
        </div>
        <div className="text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
          <p>
            {language === "hi"
              ? (iqacDetails?.introHi || introHiFallback)
              : (iqacDetails?.introEn || introEnFallback)}
          </p>
          <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/60 text-xs sm:text-sm">
            <span className="font-bold text-primary block mb-2">IQAC Committee Structure:</span>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-semibold text-primary">Chairman:</span> {iqacDetails?.chairman || "Prof. B. K. Patel (Principal)"}</li>
              <li><span className="font-semibold text-primary">Coordinator:</span> {iqacDetails?.coordinator || "Shri Vinod Dewangan (Assistant Professor, Physics)"}</li>
              <li><span className="font-semibold text-primary">Management Representative:</span> {iqacDetails?.managementRep || "President (Janbhagidari Committee)"}</li>
              <li><span className="font-semibold text-primary">Faculty Members:</span> {iqacDetails?.facultyMembers || "Dr. Rajeshwari Patel, Smt. Shweta Soni"}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AQAR and SSR Documents */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter pt-4">
        {/* AQAR List */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-outline-variant/60 pb-2.5">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">description</span>
              {language === "hi" ? "AQAR रिपोर्ट्स | वार्षिक रिपोर्ट" : "AQAR Reports | Annual Reports"}
            </h3>
            {isPrincipal && (
              <button
                onClick={openAddAqarModal}
                className="bg-secondary hover:bg-secondary/95 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm font-bold">add</span>
                {language === "hi" ? "जोड़ें" : "Add"}
              </button>
            )}
          </div>
          <div className="space-y-3">
            {currentAqarDocs.length === 0 ? (
              <p className="text-xs text-on-surface-variant italic py-2">
                {language === "hi" ? "कोई AQAR रिपोर्ट नहीं मिली।" : "No AQAR reports found."}
              </p>
            ) : (
              currentAqarDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex justify-between items-center text-xs"
                >
                  <div className="overflow-hidden mr-2">
                    <span className="font-bold text-on-surface block truncate">
                      {language === "hi" ? doc.titleHi : doc.titleEn}
                    </span>
                    <span className="text-[10px] text-on-surface-variant font-semibold">Year: {doc.year}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={doc.pdfUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-600 hover:scale-105 transition-all flex items-center gap-0.5 font-bold"
                    >
                      <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                      PDF
                    </a>
                    {isPrincipal && (
                      <div className="flex gap-1 border-l border-outline-variant/60 pl-2">
                        <button
                          onClick={() => openEditAqarModal(doc)}
                          className="bg-primary/10 hover:bg-primary/20 text-primary p-1.5 rounded-lg text-xs transition-all flex items-center justify-center cursor-pointer"
                          title={language === "hi" ? "संपादित करें" : "Edit"}
                        >
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteAqarClick(doc.id)}
                          className="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded-lg text-xs transition-all flex items-center justify-center cursor-pointer"
                          title={language === "hi" ? "हटाएं" : "Delete"}
                        >
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* NAAC / SSR Documents */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-outline-variant/60 pb-2.5">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">task_alt</span>
              {language === "hi" ? "स्व-अध्ययन रिपोर्ट (SSR) एवं फीडबैक" : "Self Study Report (SSR) & Feedback"}
            </h3>
            {isPrincipal && (
              <button
                onClick={openAddSsrModal}
                className="bg-secondary hover:bg-secondary/95 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm font-bold">add</span>
                {language === "hi" ? "जोड़ें" : "Add"}
              </button>
            )}
          </div>
          <div className="space-y-3">
            {currentSsrDocs.length === 0 ? (
              <p className="text-xs text-on-surface-variant italic py-2">
                {language === "hi" ? "कोई दस्तावेज़ नहीं मिला।" : "No documents found."}
              </p>
            ) : (
              currentSsrDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex justify-between items-center text-xs"
                >
                  <div className="overflow-hidden mr-2">
                    <span className="font-bold text-on-surface block truncate">
                      {language === "hi" ? doc.titleHi : doc.titleEn}
                    </span>
                    <span className="text-[10px] text-on-surface-variant font-semibold">Quality Metric</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={doc.pdfUrl || "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"}
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-600 hover:scale-105 transition-all flex items-center gap-0.5 font-bold"
                    >
                      <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                      PDF
                    </a>
                    {isPrincipal && (
                      <div className="flex gap-1 border-l border-outline-variant/60 pl-2">
                        <button
                          onClick={() => openEditSsrModal(doc)}
                          className="bg-primary/10 hover:bg-primary/20 text-primary p-1.5 rounded-lg text-xs transition-all flex items-center justify-center cursor-pointer"
                          title={language === "hi" ? "संपादित करें" : "Edit"}
                        >
                          <span className="material-symbols-outlined text-sm">edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteSsrClick(doc.id)}
                          className="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded-lg text-xs transition-all flex items-center justify-center cursor-pointer"
                          title={language === "hi" ? "हटाएं" : "Delete"}
                        >
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Best Practices and Distinctiveness */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b border-outline-variant pb-2">
          <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">workspace_premium</span>
            {language === "hi" ? "सर्वोत्तम अभ्यास एवं संस्थागत विशिष्टता" : "Institutional Distinctiveness & Best Practices"}
          </h3>
          {isPrincipal && (
            <button
              onClick={openEditPracticesModal}
              className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
              {language === "hi" ? "संपादित करें" : "Edit Practices"}
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-on-surface-variant leading-relaxed pt-2">
          <div className="space-y-2 p-5 bg-surface-container-low rounded-2xl border border-outline-variant">
            <h4 className="font-bold text-primary text-base">
              {language === "hi"
                ? (iqacDetails?.practiceTitleHi || practiceTitleHiFallback)
                : (iqacDetails?.practiceTitleEn || practiceTitleEnFallback)}
            </h4>
            <p className="text-xs sm:text-sm">
              {language === "hi"
                ? (iqacDetails?.practiceDescHi || practiceDescHiFallback)
                : (iqacDetails?.practiceDescEn || practiceDescEnFallback)}
            </p>
          </div>
          <div className="space-y-2 p-5 bg-surface-container-low rounded-2xl border border-outline-variant">
            <h4 className="font-bold text-primary text-base">
              {language === "hi"
                ? (iqacDetails?.distinctTitleHi || distinctTitleHiFallback)
                : (iqacDetails?.distinctTitleEn || distinctTitleEnFallback)}
            </h4>
            <p className="text-xs sm:text-sm">
              {language === "hi"
                ? (iqacDetails?.distinctDescHi || distinctDescHiFallback)
                : (iqacDetails?.distinctDescEn || distinctDescEnFallback)}
            </p>
          </div>
        </div>
      </section>

      {/* MODAL 1: Edit IQAC Info & Committee */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-outline-variant shadow-2xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">edit_note</span>
                {language === "hi" ? "समिति एवं परिचय संपादित करें" : "Edit Committee & Intro"}
              </h3>
              <button
                onClick={() => setShowInfoModal(false)}
                className="text-on-surface-variant hover:text-primary transition-all p-1 hover:bg-surface-container rounded-full cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleInfoSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{language === "hi" ? "परिचय (अंग्रेजी) *" : "Introduction (English) *"}</label>
                <textarea
                  required
                  rows="3"
                  value={infoForm.introEn}
                  onChange={(e) => setInfoForm({ ...infoForm, introEn: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{language === "hi" ? "परिचय (हिंदी) *" : "Introduction (Hindi) *"}</label>
                <textarea
                  required
                  rows="3"
                  value={infoForm.introHi}
                  onChange={(e) => setInfoForm({ ...infoForm, introHi: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all font-hindi"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-on-surface">{language === "hi" ? "अध्यक्ष (Chairman) *" : "Chairman *"}</label>
                  <input
                    type="text"
                    required
                    value={infoForm.chairman}
                    onChange={(e) => setInfoForm({ ...infoForm, chairman: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-on-surface">{language === "hi" ? "समन्वयक (Coordinator) *" : "Coordinator *"}</label>
                  <input
                    type="text"
                    required
                    value={infoForm.coordinator}
                    onChange={(e) => setInfoForm({ ...infoForm, coordinator: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{language === "hi" ? "प्रबंधन प्रतिनिधि (Management Representative) *" : "Management Rep *"}</label>
                <input
                  type="text"
                  required
                  value={infoForm.managementRep}
                  onChange={(e) => setInfoForm({ ...infoForm, managementRep: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{language === "hi" ? "संकाय सदस्य (Faculty Members) *" : "Faculty Members *"}</label>
                <input
                  type="text"
                  required
                  value={infoForm.facultyMembers}
                  onChange={(e) => setInfoForm({ ...infoForm, facultyMembers: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-outline-variant/60">
                <button
                  type="button"
                  onClick={() => setShowInfoModal(false)}
                  className="px-5 py-2.5 border border-outline text-on-surface hover:bg-surface-container rounded-xl font-bold transition-all cursor-pointer"
                >
                  {language === "hi" ? "रद्द करें" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-bold transition-all shadow cursor-pointer"
                >
                  {language === "hi" ? "सहेजें" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Add / Edit AQAR Report */}
      {showAqarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-outline-variant shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  {editingAqar ? "edit_note" : "add_circle"}
                </span>
                {editingAqar
                  ? (language === "hi" ? "AQAR रिपोर्ट संपादित करें" : "Edit AQAR Report")
                  : (language === "hi" ? "AQAR रिपोर्ट जोड़ें" : "Add AQAR Report")}
              </h3>
              <button
                onClick={() => setShowAqarModal(false)}
                className="text-on-surface-variant hover:text-primary transition-all p-1 hover:bg-surface-container rounded-full cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleAqarSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-on-surface">{language === "hi" ? "वर्ष (Year, जैसे: 2025-26) *" : "Year (e.g. 2025-26) *"}</label>
                  <input
                    type="text"
                    required
                    value={aqarForm.year}
                    onChange={(e) => setAqarForm({ ...aqarForm, year: e.target.value })}
                    placeholder="e.g. 2025-26"
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-on-surface">{language === "hi" ? "PDF लिंक / यूआरएल" : "PDF Link / URL"}</label>
                  <input
                    type="url"
                    value={aqarForm.pdfUrl}
                    onChange={(e) => setAqarForm({ ...aqarForm, pdfUrl: e.target.value })}
                    placeholder="https://example.com/report.pdf"
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{language === "hi" ? "शीर्षक (अंग्रेजी) *" : "Title (English) *"}</label>
                <input
                  type="text"
                  required
                  value={aqarForm.titleEn}
                  onChange={(e) => setAqarForm({ ...aqarForm, titleEn: e.target.value })}
                  placeholder="e.g. Annual Quality Assurance Report 2025-26"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{language === "hi" ? "शीर्षक (हिंदी)" : "Title (Hindi)"}</label>
                <input
                  type="text"
                  value={aqarForm.titleHi}
                  onChange={(e) => setAqarForm({ ...aqarForm, titleHi: e.target.value })}
                  placeholder="जैसे: वार्षिक गुणवत्ता आश्वासन रिपोर्ट 2025-26"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all font-hindi"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-outline-variant/60">
                <button
                  type="button"
                  onClick={() => setShowAqarModal(false)}
                  className="px-5 py-2.5 border border-outline text-on-surface hover:bg-surface-container rounded-xl font-bold transition-all cursor-pointer"
                >
                  {language === "hi" ? "रद्द करें" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-bold transition-all shadow cursor-pointer"
                >
                  {language === "hi" ? "सहेजें" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: Add / Edit SSR Document */}
      {showSsrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-outline-variant shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  {editingSsr ? "edit_note" : "add_circle"}
                </span>
                {editingSsr
                  ? (language === "hi" ? "SSR दस्तावेज़ संपादित करें" : "Edit SSR Document")
                  : (language === "hi" ? "SSR दस्तावेज़ जोड़ें" : "Add SSR Document")}
              </h3>
              <button
                onClick={() => setShowSsrModal(false)}
                className="text-on-surface-variant hover:text-primary transition-all p-1 hover:bg-surface-container rounded-full cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSsrSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{language === "hi" ? "PDF लिंक / यूआरएल" : "PDF Link / URL"}</label>
                <input
                  type="url"
                  value={ssrForm.pdfUrl}
                  onChange={(e) => setSsrForm({ ...ssrForm, pdfUrl: e.target.value })}
                  placeholder="https://example.com/ssr-report.pdf"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{language === "hi" ? "शीर्षक (अंग्रेजी) *" : "Title (English) *"}</label>
                <input
                  type="text"
                  required
                  value={ssrForm.titleEn}
                  onChange={(e) => setSsrForm({ ...ssrForm, titleEn: e.target.value })}
                  placeholder="e.g. Teacher Feedback on Curriculum 2025"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{language === "hi" ? "शीर्षक (हिंदी)" : "Title (Hindi)"}</label>
                <input
                  type="text"
                  value={ssrForm.titleHi}
                  onChange={(e) => setSsrForm({ ...ssrForm, titleHi: e.target.value })}
                  placeholder="जैसे: पाठ्यक्रम पर शिक्षक प्रतिक्रिया 2025"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all font-hindi"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-outline-variant/60">
                <button
                  type="button"
                  onClick={() => setShowSsrModal(false)}
                  className="px-5 py-2.5 border border-outline text-on-surface hover:bg-surface-container rounded-xl font-bold transition-all cursor-pointer"
                >
                  {language === "hi" ? "रद्द करें" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-bold transition-all shadow cursor-pointer"
                >
                  {language === "hi" ? "सहेजें" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: Edit Practices & Distinctiveness */}
      {showPracticesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-outline-variant shadow-2xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">edit_note</span>
                {language === "hi" ? "सर्वोत्तम अभ्यास एवं संस्थागत विशिष्टता" : "Edit Practices & Distinctiveness"}
              </h3>
              <button
                onClick={() => setShowPracticesModal(false)}
                className="text-on-surface-variant hover:text-primary transition-all p-1 hover:bg-surface-container rounded-full cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handlePracticesSubmit} className="space-y-5 text-xs sm:text-sm">
              {/* Practice 1 */}
              <div className="space-y-3 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/60">
                <span className="font-bold text-primary block">Best Practice 1 | सर्वोत्तम अभ्यास 1</span>
                
                <div className="space-y-1.5">
                  <label className="font-semibold text-on-surface">{language === "hi" ? "शीर्षक (अंग्रेजी) *" : "Title (English) *"}</label>
                  <input
                    type="text"
                    required
                    value={practicesForm.practiceTitleEn}
                    onChange={(e) => setPracticesForm({ ...practicesForm, practiceTitleEn: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-on-surface">{language === "hi" ? "शीर्षक (हिंदी) *" : "Title (Hindi) *"}</label>
                  <input
                    type="text"
                    required
                    value={practicesForm.practiceTitleHi}
                    onChange={(e) => setPracticesForm({ ...practicesForm, practiceTitleHi: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none font-hindi"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-on-surface">{language === "hi" ? "विवरण (अंग्रेजी) *" : "Description (English) *"}</label>
                  <textarea
                    required
                    rows="3"
                    value={practicesForm.practiceDescEn}
                    onChange={(e) => setPracticesForm({ ...practicesForm, practiceDescEn: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-on-surface">{language === "hi" ? "विवरण (हिंदी) *" : "Description (Hindi) *"}</label>
                  <textarea
                    required
                    rows="3"
                    value={practicesForm.practiceDescHi}
                    onChange={(e) => setPracticesForm({ ...practicesForm, practiceDescHi: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none resize-none font-hindi"
                  />
                </div>
              </div>

              {/* Distinctiveness */}
              <div className="space-y-3 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/60">
                <span className="font-bold text-primary block">Institutional Distinctiveness | संस्थागत विशिष्टता</span>
                
                <div className="space-y-1.5">
                  <label className="font-semibold text-on-surface">{language === "hi" ? "शीर्षक (अंग्रेजी) *" : "Title (English) *"}</label>
                  <input
                    type="text"
                    required
                    value={practicesForm.distinctTitleEn}
                    onChange={(e) => setPracticesForm({ ...practicesForm, distinctTitleEn: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-on-surface">{language === "hi" ? "शीर्षक (हिंदी) *" : "Title (Hindi) *"}</label>
                  <input
                    type="text"
                    required
                    value={practicesForm.distinctTitleHi}
                    onChange={(e) => setPracticesForm({ ...practicesForm, distinctTitleHi: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none font-hindi"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-on-surface">{language === "hi" ? "विवरण (अंग्रेजी) *" : "Description (English) *"}</label>
                  <textarea
                    required
                    rows="3"
                    value={practicesForm.distinctDescEn}
                    onChange={(e) => setPracticesForm({ ...practicesForm, distinctDescEn: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-on-surface">{language === "hi" ? "विवरण (हिंदी) *" : "Description (Hindi) *"}</label>
                  <textarea
                    required
                    rows="3"
                    value={practicesForm.distinctDescHi}
                    onChange={(e) => setPracticesForm({ ...practicesForm, distinctDescHi: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-white outline-none resize-none font-hindi"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-outline-variant/60">
                <button
                  type="button"
                  onClick={() => setShowPracticesModal(false)}
                  className="px-5 py-2.5 border border-outline text-on-surface hover:bg-surface-container rounded-xl font-bold transition-all cursor-pointer"
                >
                  {language === "hi" ? "रद्द करें" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-bold transition-all shadow cursor-pointer"
                >
                  {language === "hi" ? "सहेजें" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
