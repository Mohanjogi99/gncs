import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function FacultyCorner() {
  const { faculty, addNotice, addDownload, language, t } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState("directory"); // directory, uploads, reports
  const [formData, setFormData] = useState({
    titleEnglish: "",
    titleHindi: "",
    category: "Academic",
    fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    isImportant: false,
    facultyName: ""
  });
  const [reportData, setReportData] = useState({
    deptName: "Arts Stream",
    title: "",
    reportText: ""
  });
  const [success, setSuccess] = useState(false);

  const handleNoticeUpload = (e) => {
    e.preventDefault();
    if (!formData.titleEnglish || !formData.titleHindi || !formData.facultyName) {
      alert("Please fill all details!");
      return;
    }
    // Add to notices
    addNotice({
      titleEnglish: `${formData.titleEnglish} (Uploaded by ${formData.facultyName})`,
      titleHindi: `${formData.titleHindi} (${formData.facultyName} द्वारा अपलोड)`,
      category: formData.category,
      fileUrl: formData.fileUrl,
      isImportant: formData.isImportant,
      publishDate: new Date().toISOString().split("T")[0]
    });
    // Add to downloads if it's an assignment or notes
    if (formData.category === "Academic") {
      addDownload({
        titleEnglish: formData.titleEnglish,
        titleHindi: formData.titleHindi,
        category: "Syllabus",
        fileUrl: formData.fileUrl,
        uploadedBy: formData.facultyName
      });
    }

    setSuccess(true);
    setFormData({
      titleEnglish: "",
      titleHindi: "",
      category: "Academic",
      fileUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      isImportant: false,
      facultyName: ""
    });
    setTimeout(() => setSuccess(false), 5000);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert("Department activity report logged and dispatched to the Principal's message log!");
    setReportData({ deptName: "Arts Stream", title: "", reportText: "" });
  };

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "संकाय कोना" : "Faculty Corner"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Faculty Directory & Teaching Utilities
        </p>
      </section>

      {/* Internal Navigation Tabs */}
      <section className="flex justify-center border-b border-outline-variant">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("directory")}
            className={`py-3.5 px-6 font-bold text-sm border-b-4 transition-all flex items-center gap-2 ${
              activeTab === "directory" ? "border-secondary text-primary" : "border-transparent text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-lg">badge</span>
            Faculty Directory
          </button>
          <button
            onClick={() => setActiveTab("uploads")}
            className={`py-3.5 px-6 font-bold text-sm border-b-4 transition-all flex items-center gap-2 ${
              activeTab === "uploads" ? "border-secondary text-primary" : "border-transparent text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-lg">cloud_upload</span>
            Upload Notes & Circulars
          </button>
          <button
            onClick={() => setActiveTab("reports")}
            className={`py-3.5 px-6 font-bold text-sm border-b-4 transition-all flex items-center gap-2 ${
              activeTab === "reports" ? "border-secondary text-primary" : "border-transparent text-on-surface-variant hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-lg">description</span>
            Department Reports
          </button>
        </div>
      </section>

      {/* Directory Tab */}
      {activeTab === "directory" && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((fac) => (
            <div
              key={fac.id}
              className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm flex flex-col justify-between space-y-4 group hover:border-secondary transition-all"
            >
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-surface-container rounded-2xl overflow-hidden shrink-0 border border-outline-variant">
                  <img
                    src={
                      fac.photoUrl ||
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuASu860rwU_J3qXiuLE_I5HtOlHyL0uuIzE7nBbtQv3LB3CHGsQcaHOVdVEjMg4CIkDiQ_VEqdt-zFAoVx9CepHUV45AaX88Sum1Fize-5P68db1e13gFimHEl0ivfASQsVmTthyUzcGasoIl0Kr45PrrJNWDvEQq6yq9l1X7C91TCee_UACX5tF5n8aRTZy80Ps6V5LqGd2dP0pXQ2ryiSNZc_YgRtgIY6_AvSBL7ulAPHhrEzfaipPhfmdasVFWTWlmFSAMLt3HM"
                    }
                    alt={fac.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-base text-primary group-hover:text-secondary transition-colors">
                    {fac.name}
                  </h4>
                  <p className="text-xs text-secondary font-bold uppercase">{fac.designation}</p>
                  <span className="inline-block text-[10px] bg-primary/5 text-primary px-2 py-0.5 rounded-full font-bold">
                    Dept: {fac.department}
                  </span>
                </div>
              </div>

              <div className="text-xs text-on-surface-variant leading-relaxed space-y-2 border-t border-outline-variant/50 pt-3">
                <p>
                  <span className="font-bold text-on-surface">Education:</span> {fac.qualification}
                </p>
                <p className="italic">
                  "{language === "hi" ? fac.bioHindi : fac.bioEnglish}"
                </p>
              </div>

              <div className="text-xs border-t border-outline-variant/50 pt-3 space-y-1">
                <p className="flex items-center gap-1.5 text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                  {fac.email}
                </p>
                <p className="flex items-center gap-1.5 text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-sm text-secondary">call</span>
                  {fac.phone}
                </p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Uploads Tab */}
      {activeTab === "uploads" && (
        <section className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2">
              <span className="material-symbols-outlined text-secondary">publish</span>
              Upload Timetable / Notes / Syllabus
            </h3>
            <p className="text-xs text-on-surface-variant mt-1">
              Add study material or general notifications directly to the student notice board and download section.
            </p>
          </div>

          {success && (
            <div className="p-4 bg-green-50 text-green-700 rounded-xl text-xs font-semibold flex items-center gap-2 border border-green-200">
              <span className="material-symbols-outlined">check_circle</span>
              Resource uploaded successfully! It is now live in the Student Corner and Downloads area.
            </div>
          )}

          <form onSubmit={handleNoticeUpload} className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">Your Name *</label>
                <select
                  required
                  value={formData.facultyName}
                  onChange={(e) => setFormData({ ...formData, facultyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
                >
                  <option value="">-- Select Faculty Name --</option>
                  {faculty.map((fac) => (
                    <option key={fac.id} value={fac.name}>
                      {fac.name} ({fac.department})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">Resource Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
                >
                  <option value="Academic">Lecture Notes / Assignments</option>
                  <option value="Examination">Internal Timetable</option>
                  <option value="Event">Departmental Activity Notice</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">Title (English) *</label>
              <input
                type="text"
                required
                value={formData.titleEnglish}
                onChange={(e) => setFormData({ ...formData, titleEnglish: e.target.value })}
                placeholder="e.g. B.Sc Part-1 Physics Unit 2 Notes"
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">Title (Hindi) *</label>
              <input
                type="text"
                required
                value={formData.titleHindi}
                onChange={(e) => setFormData({ ...formData, titleHindi: e.target.value })}
                placeholder="उदा. बी.एससी भाग-1 भौतिकी यूनिट 2 नोट्स"
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">Simulated File Attachment (PDF/Image)</label>
              <div className="border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-all">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant">picture_as_pdf</span>
                <p className="font-semibold text-xs mt-1 text-on-surface">dummy_notes_attachment.pdf</p>
                <p className="text-[10px] text-outline">Simulating secure cloud storage allocation</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isImportantCheck"
                checked={formData.isImportant}
                onChange={(e) => setFormData({ ...formData, isImportant: e.target.checked })}
                className="rounded border-outline-variant focus:ring-primary text-primary"
              />
              <label htmlFor="isImportantCheck" className="font-bold text-on-surface">
                Show in scrolling News ticker on Homepage?
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-bold transition-all shadow"
            >
              Upload Study Resource
            </button>
          </form>
        </section>
      )}

      {/* Reports Tab */}
      {activeTab === "reports" && (
        <section className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2">
              <span className="material-symbols-outlined text-secondary">assignment_turned_in</span>
              Submit Departmental Activity Report
            </h3>
            <p className="text-xs text-on-surface-variant mt-1">
              Submit quarterly activity records directly to the college administration for audit and compilation.
            </p>
          </div>

          <form onSubmit={handleReportSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">Department stream</label>
              <select
                value={reportData.deptName}
                onChange={(e) => setReportData({ ...reportData, deptName: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              >
                <option>Arts Stream</option>
                <option>Science Stream</option>
                <option>Commerce Stream</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">Activity Title / Event Name</label>
              <input
                type="text"
                required
                value={reportData.title}
                onChange={(e) => setReportData({ ...reportData, title: e.target.value })}
                placeholder="e.g. Science Exhibition / Quiz Event"
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">Brief Report Content</label>
              <textarea
                required
                rows="5"
                value={reportData.reportText}
                onChange={(e) => setReportData({ ...reportData, reportText: e.target.value })}
                placeholder="Summarize event dates, participant counts, guest lecture names, and achievements..."
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-bold transition-all shadow"
            >
              Submit Report to Administration
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
