import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Admission() {
  const { notices, addContactMessage, language, t } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "Bachelor of Arts (B.A.)",
    message: ""
  });
  const [success, setSuccess] = useState(false);

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

  const reqDocs = [
    { labelHi: "10वीं और 12वीं की अंकसूची (मूल एवं छायाप्रति)", labelEn: "10th & 12th Marksheets (Original & Photocopies)" },
    { labelHi: "स्थानांतरण प्रमाण पत्र (टीसी) (मूल प्रति)", labelEn: "Transfer Certificate (TC) (Original)" },
    { labelHi: "चरित्र प्रमाण पत्र (सीसी) (मूल प्रति)", labelEn: "Character Certificate (CC) (Original)" },
    { labelHi: "निवास प्रमाण पत्र (छत्तीसगढ़ निवासी हेतु)", labelEn: "Domicile Certificate (for CG State resident)" },
    { labelHi: "जाति प्रमाण पत्र (एसटी/एससी/ओबीसी वर्ग हेतु)", labelEn: "Caste Certificate (for reserved categories)" },
    { labelHi: "आय प्रमाण पत्र (छात्रवृत्ति एवं फीस छूट हेतु)", labelEn: "Income Certificate (recent for scholarships)" },
    { labelHi: "पासपोर्ट आकार की रंगीन फोटो (4 प्रतियां)", labelEn: "Passport size color photos (4 copies)" },
    { labelHi: "आधार कार्ड की छायाप्रति", labelEn: "Aadhaar Card copy" }
  ];

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
            <h3 className="text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">campaign</span>
              {t("admissionNotice")} / {t("meritList")}
            </h3>
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
            <div className="py-2 flex justify-between">
              <span className="font-bold text-on-surface">Shri Vinod Dewangan (Arts/Commerce In-charge)</span>
              <span className="text-on-surface-variant font-semibold">+91 88712 XXXXX</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="font-bold text-on-surface">Smt. Shweta Soni (Science In-charge)</span>
              <span className="text-on-surface-variant font-semibold">+91 79998 XXXXX</span>
            </div>
            <div className="py-2 flex justify-between">
              <span className="font-bold text-on-surface">Shri Santosh Sahu (Office Help)</span>
              <span className="text-on-surface-variant font-semibold">+91 94254 XXXXX</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
