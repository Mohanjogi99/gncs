import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Admission() {
  const {
    notices,
    addNotice,
    updateNotice,
    deleteNotice,
    currentUser,
    addContactMessage,
    language,
    t,
    reqDocs
  } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "Bachelor of Arts (B.A.)",
    message: ""
  });
  const [success, setSuccess] = useState(false);

  // Notice Management Modal States
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [noticeForm, setNoticeForm] = useState({
    titleEnglish: "",
    titleHindi: "",
    fileUrl: "",
    isImportant: false,
    publishDate: "",
  });

  const isPrincipal = currentUser && (currentUser.role === "Principal" || currentUser.role === "Super Admin");

  // Filter admission-related notices
  const admissionNotices = notices.filter(
    (n) => n.category.toLowerCase() === "admission" || n.titleEnglish.toLowerCase().includes("merit")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert("Name and Mobile are required!");
      return;
    }
    // Add contact message (which acts as online inquiry)
    addContactMessage({
      name: formData.name,
      email: formData.email || "inquiry@gncs.in",
      mobile: formData.mobile,
      message: `[Admission Inquiry for ${formData.course}]: ${formData.message}`,
    });
    setSuccess(true);
    setFormData({ name: "", email: "", mobile: "", course: "Bachelor of Arts (B.A.)", message: "" });
    setTimeout(() => setSuccess(false), 5000);
  };

  const openAddModal = () => {
    setEditingNotice(null);
    setNoticeForm({
      titleEnglish: "",
      titleHindi: "",
      fileUrl: "",
      isImportant: false,
      publishDate: new Date().toISOString().split("T")[0],
    });
    setShowNoticeModal(true);
  };

  const openEditModal = (notice) => {
    setEditingNotice(notice);
    setNoticeForm({
      titleEnglish: notice.titleEnglish || "",
      titleHindi: notice.titleHindi || "",
      fileUrl: notice.fileUrl || "",
      isImportant: notice.isImportant || false,
      publishDate: notice.publishDate || new Date().toISOString().split("T")[0],
    });
    setShowNoticeModal(true);
  };

  const handleDeleteClick = (id) => {
    const confirmMsg = language === "hi"
      ? "क्या आप वाकई इस प्रवेश सूचना को हटाना चाहते हैं?"
      : "Are you sure you want to delete this admission notice?";
    if (window.confirm(confirmMsg)) {
      deleteNotice(id);
    }
  };

  const handleNoticeFormSubmit = (e) => {
    e.preventDefault();
    if (!noticeForm.titleEnglish || !noticeForm.titleHindi) {
      alert("Both English and Hindi titles are required!");
      return;
    }
    const data = {
      ...noticeForm,
      category: "Admission",
    };
    if (editingNotice) {
      updateNotice(editingNotice.id, data);
    } else {
      addNotice(data);
    }
    setShowNoticeModal(false);
  };



  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 space-y-8 flex-1">
      {/* Title */}
      <section className="text-center space-y-2 border-b border-outline-variant pb-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-primary font-hindi">
          {language === "hi" ? "प्रवेश प्रकोष्ट" : "Admission Portal"}
        </h2>
        <p className="text-xs sm:text-sm text-secondary font-semibold uppercase tracking-wider">
          {t("hindiSubtitle")} • Guidelines, Documents & Enquiry
        </p>
      </section>

      {/* Notices and Inquiry split */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Merit list & Notices */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
            <div className="border-b border-outline-variant pb-2 flex justify-between items-center flex-wrap gap-2">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">campaign</span>
                {t("admissionNotice")} / {t("meritList")}
              </h3>
              {isPrincipal && (
                <button
                  onClick={openAddModal}
                  className="bg-secondary hover:bg-secondary/95 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm font-bold">add</span>
                  {language === "hi" ? "नई सूचना जोड़ें" : "Add New Notice"}
                </button>
              )}
            </div>
            {admissionNotices.length === 0 ? (
              <p className="text-xs text-on-surface-variant italic">No recent admission circulars found.</p>
            ) : (
              <div className="space-y-3">
                {admissionNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant hover:border-primary/20 transition-all flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-primary">
                        {language === "hi" ? notice.titleHindi : notice.titleEnglish}
                      </h4>
                      <p className="text-[10px] text-on-surface-variant mt-1">Date: {notice.publishDate}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {isPrincipal && (
                        <>
                          <button
                            onClick={() => openEditModal(notice)}
                            className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer"
                            title={language === "hi" ? "संपादित करें" : "Edit"}
                          >
                            <span className="material-symbols-outlined text-sm">edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteClick(notice.id)}
                            className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer"
                            title={language === "hi" ? "हटाएं" : "Delete"}
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </>
                      )}
                      {notice.fileUrl && (
                        <a
                          href={notice.fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all"
                        >
                          <span className="material-symbols-outlined text-sm">download</span>
                          PDF
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Guidelines */}
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">assignment</span>
              {t("reqDocs")} | आवश्यक दस्तावेज सूची
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-on-surface-variant list-disc list-inside">
              {reqDocs.map((doc, idx) => (
                <li key={idx} className="leading-relaxed bg-surface-container-low p-2.5 rounded-xl border border-outline-variant/40">
                  {language === "hi" ? doc.labelHi : doc.labelEn}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Admission Inquiry Form */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-outline-variant shadow-md space-y-6">
          <div>
            <h3 className="text-lg font-bold text-primary flex items-center gap-2 border-b border-outline-variant pb-2.5">
              <span className="material-symbols-outlined text-secondary">mail</span>
              {t("onlineInquiry")}
            </h3>
            <p className="text-xs text-on-surface-variant mt-1.5">
              {language === "hi"
                ? "प्रवेश संबंधी पूछताछ के लिए फॉर्म भरें। हमारे प्रवेश परामर्शदाता आपसे संपर्क करेंगे।"
                : "Fill this form for inquiries regarding admissions, seats, fees, or stream changes."}
            </p>
          </div>

          {success && (
            <div className="p-4 bg-green-50 text-green-700 rounded-xl text-xs font-semibold flex items-center gap-2 border border-green-200">
              <span className="material-symbols-outlined">check_circle</span>
              {t("successMsg")}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">{t("name")} *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter Student Name"
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{t("mobile")} *</label>
                <input
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="Mobile No."
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">{t("email")}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">Desired Stream / Course</label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all"
              >
                <option>Bachelor of Arts (B.A.)</option>
                <option>Bachelor of Science (B.Sc. - Bio)</option>
                <option>Bachelor of Science (B.Sc. - Maths)</option>
                <option>Bachelor of Commerce (B.Com.)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-bold text-on-surface">{t("message")}</label>
              <textarea
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention query (e.g., subject options, hostel, fee concession)"
                className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary bg-surface outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-container text-on-primary py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow"
            >
              <span className="material-symbols-outlined text-base">send</span>
              {t("submit")}
            </button>
          </form>
        </div>
      </section>

      {/* Reservation Guidelines & Help Desk */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter pt-4">
        {/* Reservation rules */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant/40 pb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">policy</span>
            Reservation Policy | आरक्षण नियम
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            {language === "hi"
              ? "महाविद्यालय में शासन के नियमानुसार प्रवेश आरक्षण लागू है: अनुसूचित जनजाति (ST): 32%, अनुसूचित जाति (SC): 12%, अन्य पिछड़ा वर्ग (OBC): 14%, आर्थिक रूप से कमजोर वर्ग (EWS): 10%। साथ ही महिलाओं, दिव्यांगों एवं स्वतंत्रता सेनानी परिवारों के लिए क्षैतिज आरक्षण देय है।"
              : "Seat reservation applies strictly as per Chhattisgarh Government Higher Education rules: ST: 32%, SC: 12%, OBC: 14%, EWS: 10%. Horizontal reservation is applicable for female candidates, differently-abled candidates, and freedom fighter dependents."}
          </p>
        </div>

        {/* Admission Help desk */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant/40 pb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">contact_support</span>
            Admission Help Desk | प्रवेश सहायता केंद्र
          </h3>
          <div className="divide-y divide-outline-variant/50 text-xs sm:text-sm">
            <div className="py-2.5 flex justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-bold text-on-surface">
                  {language === "hi" ? "विज्ञान संकाय (B.Sc. - Bio/Maths Group):" : "Science Stream (B.Sc. - Bio/Maths Group):"}
                </span>
                <span className="text-on-surface-variant font-medium mt-0.5">
                  {language === "hi" ? "डॉ. अंगेश चंद्र (Physics)" : "Dr. Angesh Chandra (Physics)"}
                </span>
              </div>
              <span className="text-on-surface-variant font-semibold flex items-center">+91 98939 07415</span>
            </div>
            <div className="py-2.5 flex justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-bold text-on-surface">
                  {language === "hi" ? "कला संकाय (B.A. Group):" : "Arts Stream (B.A. Group):"}
                </span>
                <span className="text-on-surface-variant font-medium mt-0.5">
                  {language === "hi" ? "प्रवीण कुमार कौशिक (Geography)" : "Pravin Kumar Kaushik (Geography)"}
                </span>
              </div>
              <span className="text-on-surface-variant font-semibold flex items-center">+91 98939 07415</span>
            </div>
            <div className="py-2.5 flex justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-bold text-on-surface">
                  {language === "hi" ? "वाणिज्य संकाय (B.Com. Group):" : "Commerce Stream (B.Com. Group):"}
                </span>
                <span className="text-on-surface-variant font-medium mt-0.5">
                  {language === "hi" ? "आशुतोष पैंकरा" : "Ashutosh Painkra"}
                </span>
              </div>
              <span className="text-on-surface-variant font-semibold flex items-center">+91 98939 07415</span>
            </div>
          </div>
        </div>
      </section>
      {/* Modal for Add / Edit Notice */}
      {showNoticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-outline-variant shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200 animate-duration-150">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">
                  {editingNotice ? "edit_note" : "add_circle"}
                </span>
                {editingNotice
                  ? (language === "hi" ? "प्रवेश सूचना संपादित करें" : "Edit Admission Notice")
                  : (language === "hi" ? "नई प्रवेश सूचना जोड़ें" : "Add New Admission Notice")}
              </h3>
              <button
                onClick={() => setShowNoticeModal(false)}
                className="text-on-surface-variant hover:text-primary transition-all p-1 hover:bg-surface-container rounded-full cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleNoticeFormSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">
                  {language === "hi" ? "सूचना शीर्षक (अंग्रेजी) *" : "Notice Title (English) *"}
                </label>
                <input
                  type="text"
                  required
                  value={noticeForm.titleEnglish}
                  onChange={(e) => setNoticeForm({ ...noticeForm, titleEnglish: e.target.value })}
                  placeholder="e.g. B.Sc Part 1 Second Merit List for Admission 2026-27"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">
                  {language === "hi" ? "सूचना शीर्षक (हिंदी) *" : "Notice Title (Hindi) *"}
                </label>
                <input
                  type="text"
                  required
                  value={noticeForm.titleHindi}
                  onChange={(e) => setNoticeForm({ ...noticeForm, titleHindi: e.target.value })}
                  placeholder="जैसे: बी.एससी भाग 1 प्रवेश के लिए द्वितीय मेरिट सूची"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all font-hindi"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-on-surface">
                  {language === "hi" ? "दस्तावेज़ पीडीएफ लिंक / यूआरएल" : "Document PDF Link / URL"}
                </label>
                <input
                  type="url"
                  value={noticeForm.fileUrl}
                  onChange={(e) => setNoticeForm({ ...noticeForm, fileUrl: e.target.value })}
                  placeholder="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                  className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-on-surface">
                    {language === "hi" ? "प्रकाशन तिथि" : "Publish Date"}
                  </label>
                  <input
                    type="date"
                    required
                    value={noticeForm.publishDate}
                    onChange={(e) => setNoticeForm({ ...noticeForm, publishDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="modalIsImp"
                    checked={noticeForm.isImportant}
                    onChange={(e) => setNoticeForm({ ...noticeForm, isImportant: e.target.checked })}
                    className="w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant"
                  />
                  <label htmlFor="modalIsImp" className="font-bold text-on-surface cursor-pointer select-none">
                    {language === "hi" ? "महत्वपूर्ण (टिकर में चलाएं)" : "Mark as Important"}
                  </label>
                </div>
              </div>

              {/* Modal Footer / Actions */}
              <div className="flex gap-3 justify-end pt-4 border-t border-outline-variant/60 mt-6">
                <button
                  type="button"
                  onClick={() => setShowNoticeModal(false)}
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
