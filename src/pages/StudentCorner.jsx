import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function StudentCorner() {
  const {
    notices,
    downloads,
    language,
    t,
    currentUser,
    labFacilities,
    addLabExperiment,
    updateLabExperiment,
    deleteLabExperiment
  } = useContext(AppContext);
  const [filterCategory, setFilterCategory] = useState("All");
  const [activeLabTab, setActiveLabTab] = useState("physics");

  // Modal states for lab experiments
  const [showLabModal, setShowLabModal] = useState(false);
  const [editingExperiment, setEditingExperiment] = useState(null);
  const [labForm, setLabForm] = useState({
    nameEnglish: "",
    nameHindi: "",
    resourcesEnglish: "",
    resourcesHindi: ""
  });

  const isPrincipal = currentUser && (currentUser.role === "Principal" || currentUser.role === "Super Admin");

  const openAddLabModal = () => {
    setEditingExperiment(null);
    setLabForm({
      nameEnglish: "",
      nameHindi: "",
      resourcesEnglish: "",
      resourcesHindi: ""
    });
    setShowLabModal(true);
  };

  const openEditLabModal = (exp) => {
    setEditingExperiment(exp);
    setLabForm({
      nameEnglish: exp.nameEn || "",
      nameHindi: exp.nameHi || "",
      resourcesEnglish: exp.resourcesEn || "",
      resourcesHindi: exp.resourcesHi || ""
    });
    setShowLabModal(true);
  };

  const handleDeleteLabClick = (experimentId) => {
    const confirmMsg = language === "hi"
      ? "क्या आप वाकई इस प्रयोग को हटाना चाहते हैं?"
      : "Are you sure you want to delete this experiment?";
    if (window.confirm(confirmMsg)) {
      deleteLabExperiment(activeLabTab, experimentId);
    }
  };

  const handleLabFormSubmit = (e) => {
    e.preventDefault();
    if (!labForm.nameEnglish || !labForm.resourcesEnglish) {
      alert("Name (English) and Resources (English) are required!");
      return;
    }
    const data = {
      nameEn: labForm.nameEnglish,
      nameHi: labForm.nameHindi || labForm.nameEnglish,
      resourcesEn: labForm.resourcesEnglish,
      resourcesHi: labForm.resourcesHindi || labForm.resourcesEnglish
    };
    if (editingExperiment) {
      updateLabExperiment(activeLabTab, editingExperiment.id, data);
    } else {
      addLabExperiment(activeLabTab, data);
    }
    setShowLabModal(false);
  };

  // Get active student corner categories
  // Notices category: "Admission", "Scholarship", "Examination", "Event", "Academic"
  const categories = ["All", "Examination", "Scholarship", "Academic", "Event"];

  const filteredNotices = notices.filter((notice) => {
    if (filterCategory === "All") return true;
    return notice.category.toLowerCase() === filterCategory.toLowerCase();
  });

  const studentDownloads = downloads.filter((down) =>
    ["Academic Calendar", "Syllabus", "Scholarship Forms"].includes(down.category)
  );

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "छात्र कोना" : "Student Corner"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Time Tables, Exams, Scholarships & Activities
        </p>
      </section>

      {/* Quick Access Utility Actions */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a
          href="https://snpv.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl border border-outline-variant/60 bg-white hover:border-secondary hover:shadow-sm transition-all flex items-center gap-4 group"
        >
          <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-105 transition-all">
            badge
          </span>
          <div>
            <h4 className="font-bold text-sm text-primary">Download Admit Card</h4>
            <p className="text-[11px] text-on-surface-variant">Click to visit SNPV portal for UG Admit cards</p>
          </div>
        </a>

        <a
          href="https://www.snpvraigarh.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl border border-outline-variant/60 bg-white hover:border-secondary hover:shadow-sm transition-all flex items-center gap-4 group"
        >
          <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-105 transition-all">
            task_alt
          </span>
          <div>
            <h4 className="font-bold text-sm text-primary">Check Exam Results</h4>
            <p className="text-[11px] text-on-surface-variant">Annual & semester exam results check link</p>
          </div>
        </a>

        <a
          href="http://postmatric-scholarship.cg.nic.in"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl border border-outline-variant/60 bg-white hover:border-secondary hover:shadow-sm transition-all flex items-center gap-4 group"
        >
          <span className="material-symbols-outlined text-4xl text-secondary group-hover:scale-105 transition-all">
            payments
          </span>
          <div>
            <h4 className="font-bold text-sm text-primary">State Scholarship Portal</h4>
            <p className="text-[11px] text-on-surface-variant">Apply online for CG Post-Matric Scholarship</p>
          </div>
        </a>
      </section>

      {/* Main Student Notices and Resources Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Notice Board with Filtering */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-outline-variant pb-4 gap-4">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">feed</span>
              Student Circulars & Notice Board | सूचनाएं
            </h3>
          </div>

          {/* Filter Categories Pill Grid */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold border transition-all ${
                  filterCategory === cat
                    ? "bg-secondary text-white border-secondary shadow-sm"
                    : "bg-surface hover:bg-surface-container border-outline-variant/60 text-on-surface-variant"
                }`}
              >
                {cat === "All"
                  ? language === "hi"
                    ? "सभी श्रेणियां"
                    : "All Categories"
                  : cat}
              </button>
            ))}
          </div>

          {/* Notices feed */}
          <div className="space-y-4">
            {filteredNotices.length === 0 ? (
              <p className="text-xs text-on-surface-variant italic py-6 text-center">
                No announcements posted in this category.
              </p>
            ) : (
              filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="p-5 rounded-2xl border border-outline-variant bg-surface-container-low/30 hover:border-primary/20 hover:bg-white transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] bg-secondary-container text-on-secondary-container font-bold px-2 py-0.5 rounded-full">
                        {notice.category}
                      </span>
                      {notice.isImportant && (
                        <span className="text-[10px] bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded-full uppercase animate-pulse">
                          Important
                        </span>
                      )}
                      <span className="text-[10px] text-on-surface-variant font-medium">
                        Posted: {notice.publishDate}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base text-primary">
                      {language === "hi" ? notice.titleHindi : notice.titleEn || notice.titleEnglish}
                    </h4>
                  </div>
                  {notice.fileUrl && (
                    <a
                      href={notice.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary/5 hover:bg-primary hover:text-white text-primary px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border border-primary/10 transition-all shrink-0 sm:self-center"
                    >
                      <span className="material-symbols-outlined text-sm">download</span>
                      Download Circular
                    </a>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Student Resources Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Downloads */}
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">folder_zip</span>
              Useful Documents
            </h3>
            {studentDownloads.length === 0 ? (
              <p className="text-xs text-on-surface-variant italic">No resources uploaded.</p>
            ) : (
              <div className="divide-y divide-outline-variant/50">
                {studentDownloads.map((down) => (
                  <div key={down.id} className="py-3 flex justify-between items-center text-xs gap-3">
                    <div className="overflow-hidden">
                      <span className="font-bold text-on-surface block truncate">
                        {language === "hi" ? down.titleHindi : down.titleEnglish}
                      </span>
                      <span className="text-[10px] text-on-surface-variant">{down.category}</span>
                    </div>
                    <a
                      href={down.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-secondary font-bold shrink-0 flex items-center gap-0.5"
                    >
                      <span className="material-symbols-outlined text-base">download</span>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* NSS, RRC & Cultural Activities */}
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">volunteer_activism</span>
              {language === "hi" ? "गतिविधियाँ एवं क्लब" : "Activities & Clubs"}
            </h3>
            
            <div className="space-y-4">
              {/* NSS */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary">
                  <span className="material-symbols-outlined text-secondary text-base">volunteer_activism</span>
                  <span>{language === "hi" ? "राष्ट्रीय सेवा योजना (NSS)" : "National Service Scheme (NSS)"}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
                  {language === "hi"
                    ? "वृक्षारोपण, स्वास्थ्य शिविर, स्वच्छता और साक्षरता रैलियों का आयोजन करने वाली सक्रिय इकाई। संपर्क: समन्वयक डॉ. कमलेश चंद्र।"
                    : "Active unit conducting tree plantation, health camps, cleanliness drives, and social awareness. Contact: Dr. Kamlesh Chandra."}
                </p>
              </div>

              {/* Red Ribbon Club */}
              <div className="space-y-1 pt-3 border-t border-outline-variant/40">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary">
                  <span className="material-symbols-outlined text-red-500 text-base">favorite</span>
                  <span>{language === "hi" ? "रेड रिबन क्लब (RRC)" : "Red Ribbon Club (RRC)"}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
                  {language === "hi"
                    ? "युवाओं में स्वैच्छिक रक्तदान, एचआईवी/एड्स जागरूकता और स्वास्थ्य शिक्षा को बढ़ावा देने के लिए संगोष्ठियों एवं शिविरों का आयोजन करता है।"
                    : "Organizes seminars and campaigns to promote voluntary blood donation, HIV/AIDS awareness, and health education among youth."}
                </p>
              </div>

              {/* Cultural Units */}
              <div className="space-y-1 pt-3 border-t border-outline-variant/40">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary">
                  <span className="material-symbols-outlined text-secondary text-base">theater_comedy</span>
                  <span>{language === "hi" ? "सांस्कृतिक इकाई" : "Cultural Unit"}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
                  {language === "hi"
                    ? "वार्षिक उत्सव, युवा उत्सव, वाद-विवाद, नाटक और पारंपरिक नृत्य व संगीत कार्यक्रमों के माध्यम से छात्र प्रतिभाओं को मंच प्रदान करता है।"
                    : "Showcases student talents through annual functions, youth festivals, debate competitions, drama, and traditional music and dance events."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Facilities & Experiments Section */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-6">
        <div className="border-b border-outline-variant pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">biotech</span>
            {language === "hi" ? "प्रयोगशाला सुविधाएं एवं प्रयोगों की सूची" : "Laboratory Facilities & Experiments List"}
          </h3>
          <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase">
            Science & Humanities Labs
          </span>
        </div>

        {/* Tab Controls for Labs */}
        <div className="flex flex-wrap gap-2 justify-start border-b border-outline-variant/40 pb-4">
          {labFacilities.map((lab) => (
            <button
              key={lab.id}
              onClick={() => setActiveLabTab(lab.id)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                activeLabTab === lab.id
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-surface hover:bg-surface-container border-outline-variant/60 text-on-surface-variant"
              }`}
            >
              <span className="material-symbols-outlined text-base">science</span>
              {language === "hi" ? lab.nameHi : lab.nameEn}
            </button>
          ))}
        </div>

        {/* Selected Lab Detail and Experiments Table */}
        {(() => {
          const selectedLab = labFacilities.find((lab) => lab.id === activeLabTab);
          if (!selectedLab) return null;
          return (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/50 space-y-2">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h4 className="font-bold text-base text-primary">
                    {language === "hi" ? selectedLab.nameHi : selectedLab.nameEn}
                  </h4>
                  {isPrincipal && (
                    <button
                      onClick={openAddLabModal}
                      className="bg-secondary hover:bg-secondary/95 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all shadow-sm cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm font-bold">add</span>
                      {language === "hi" ? "नया प्रयोग जोड़ें" : "Add Experiment"}
                    </button>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {language === "hi" ? selectedLab.descHi : selectedLab.descEn}
                </p>
              </div>

              {/* Experiments Table */}
              <div className="overflow-x-auto border border-outline-variant/60 rounded-2xl">
                <table className="w-full text-left text-xs sm:text-sm min-w-[650px] border-collapse">
                  <thead className="bg-surface-container-low border-b border-outline-variant font-bold text-on-surface-variant uppercase">
                    <tr>
                      <th className="px-4 py-3">{language === "hi" ? "प्रयोग का विवरण" : "Experiment Name & Description"}</th>
                      <th className="px-4 py-3">{language === "hi" ? "आवश्यक उपकरण/संसाधन" : "Required Instruments/Resources"}</th>
                      {isPrincipal && (
                        <th className="px-4 py-3 text-center w-24">{language === "hi" ? "कार्रवाई" : "Actions"}</th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/40 bg-white">
                    {(selectedLab.experiments || []).map((exp) => (
                      <tr key={exp.id || exp.sno} className="hover:bg-surface-container-lowest transition-colors">
                        <td className="px-4 py-3.5 space-y-1">
                          <span className="font-bold text-primary block leading-snug">
                            {language === "hi" ? exp.nameHi : exp.nameEn}
                          </span>
                          <span className="text-[10px] text-on-surface-variant font-medium block">
                            {language === "hi" ? exp.nameEn : exp.nameHi}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 font-semibold text-secondary leading-snug">
                          {language === "hi" ? exp.resourcesHi : exp.resourcesEn}
                        </td>
                        {isPrincipal && (
                          <td className="px-4 py-3.5 text-center shrink-0">
                            <div className="flex items-center justify-center gap-1.5">
                              <button
                                onClick={() => openEditLabModal(exp)}
                                className="bg-primary/10 hover:bg-primary/20 text-primary p-1.5 rounded-lg text-xs transition-all flex items-center justify-center cursor-pointer"
                                title={language === "hi" ? "संपादित करें" : "Edit"}
                              >
                                <span className="material-symbols-outlined text-sm">edit</span>
                              </button>
                              <button
                                onClick={() => handleDeleteLabClick(exp.id || exp.sno)}
                                className="bg-red-50 hover:bg-red-100 text-red-600 p-1.5 rounded-lg text-xs transition-all flex items-center justify-center cursor-pointer"
                                title={language === "hi" ? "हटाएं" : "Delete"}
                              >
                                <span className="material-symbols-outlined text-sm">delete</span>
                              </button>
                            </div>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Modal for Add / Edit Lab Experiment */}
      {showLabModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-outline-variant shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200 animate-duration-150">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  {editingExperiment ? "edit_note" : "add_circle"}
                </span>
                {editingExperiment
                  ? (language === "hi" ? "प्रयोग संपादित करें" : "Edit Experiment")
                  : (language === "hi" ? "नया प्रयोग जोड़ें" : "Add New Experiment")}
              </h3>
              <button
                onClick={() => setShowLabModal(false)}
                className="text-on-surface-variant hover:text-primary transition-all p-1 hover:bg-surface-container rounded-full cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleLabFormSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">
                  {language === "hi" ? "प्रयोग का नाम (अंग्रेजी) *" : "Experiment Name (English) *"}
                </label>
                <input
                  type="text"
                  required
                  value={labForm.nameEnglish}
                  onChange={(e) => setLabForm({ ...labForm, nameEnglish: e.target.value })}
                  placeholder="e.g. Verification of Ohm's Law"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">
                  {language === "hi" ? "प्रयोग का नाम (हिंदी)" : "Experiment Name (Hindi)"}
                </label>
                <input
                  type="text"
                  value={labForm.nameHindi}
                  onChange={(e) => setLabForm({ ...labForm, nameHindi: e.target.value })}
                  placeholder="जैसे: ओम के नियम का सत्यापन"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all font-hindi"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">
                  {language === "hi" ? "आवश्यक उपकरण / संसाधन (अंग्रेजी) *" : "Required Instruments / Resources (English) *"}
                </label>
                <input
                  type="text"
                  required
                  value={labForm.resourcesEnglish}
                  onChange={(e) => setLabForm({ ...labForm, resourcesEnglish: e.target.value })}
                  placeholder="e.g. Potentiometer, Battery, Voltmeter"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">
                  {language === "hi" ? "आवश्यक उपकरण / संसाधन (हिंदी)" : "Required Instruments / Resources (Hindi)"}
                </label>
                <input
                  type="text"
                  value={labForm.resourcesHindi}
                  onChange={(e) => setLabForm({ ...labForm, resourcesHindi: e.target.value })}
                  placeholder="जैसे: विभवमापी, बैटरी, वोल्टमीटर"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all font-hindi"
                />
              </div>

              {/* Modal Footer / Actions */}
              <div className="flex gap-3 justify-end pt-4 border-t border-outline-variant/60 mt-6">
                <button
                  type="button"
                  onClick={() => setShowLabModal(false)}
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
