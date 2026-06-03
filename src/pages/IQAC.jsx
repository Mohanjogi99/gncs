import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function IQAC() {
  const { language, t } = useContext(AppContext);

  const aqarDocuments = [
    { year: "2025-26", titleEn: "Annual Quality Assurance Report (AQAR) 2025-26", titleHi: "वार्षिक गुणवत्ता आश्वासन रिपोर्ट (AQAR) 2025-26" },
    { year: "2024-25", titleEn: "Annual Quality Assurance Report (AQAR) 2024-25", titleHi: "वार्षिक गुणवत्ता आश्वासन रिपोर्ट (AQAR) 2024-25" },
    { year: "2023-24", titleEn: "Annual Quality Assurance Report (AQAR) 2023-24", titleHi: "वार्षिक गुणवत्ता आश्वासन रिपोर्ट (AQAR) 2023-24" }
  ];

  const feedbackReports = [
    { titleEn: "Student Feedback Analysis & Action Taken Report 2025", titleHi: "छात्र प्रतिक्रिया विश्लेषण एवं की गई कार्रवाई रिपोर्ट 2025" },
    { titleEn: "Teacher Feedback on Curriculum 2025", titleHi: "पाठ्यक्रम पर शिक्षक प्रतिक्रिया 2025" },
    { titleEn: "Alumni Feedback Analysis Report 2024", titleHi: "पूर्व छात्र प्रतिक्रिया विश्लेषण रिपोर्ट 2024" }
  ];

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
        <h3 className="text-lg sm:text-xl font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">verified</span>
          Internal Quality Assurance Cell (IQAC) | आंतरिक गुणवत्ता आश्वासन प्रकोष्ठ
        </h3>
        <div className="text-sm sm:text-base text-on-surface-variant leading-relaxed space-y-3">
          <p>
            {language === "hi"
              ? "राष्ट्रीय मूल्यांकन एवं प्रत्यायन परिषद (नैक), बेंगलुरु की सिफ़ारिशों के अनुसार, शासकीय नवीन महाविद्यालय, सारागांव में शैक्षणिक गुणवत्ता के सतत उन्नयन एवं संवर्धन हेतु आंतरिक गुणवत्ता आश्वासन प्रकोष्ठ (IQAC) का गठन किया गया है। यह प्रकोष्ठ महाविद्यालय में गुणवत्तापूर्ण शैक्षणिक व प्रशासनिक गतिविधियों की रूपरेखा तैयार करता है।"
              : "In accordance with the guidelines of National Assessment and Accreditation Council (NAAC), Bengaluru, the Internal Quality Assurance Cell (IQAC) has been established at Government Naveen College, Saragaon. It functions as a key catalyst for planning, guiding, and monitoring quality enhancement activities."}
          </p>
          <div className="p-4 bg-surface-container-low rounded-2xl border border-outline-variant/60 text-xs sm:text-sm">
            <span className="font-bold text-primary block mb-2">IQAC Committee Structure:</span>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-semibold text-primary">Chairman:</span> Dr. S. K. Sharma (Principal)</li>
              <li><span className="font-semibold text-primary">Coordinator:</span> Shri Vinod Dewangan (Assistant Professor, Physics)</li>
              <li><span className="font-semibold text-primary">Management Representative:</span> President (Janbhagidari Committee)</li>
              <li><span className="font-semibold text-primary">Faculty Members:</span> Dr. Rajeshwari Patel, Smt. Shweta Soni</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AQAR and SSR Documents */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter pt-4">
        {/* AQAR List */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-primary border-b border-outline-variant/60 pb-2.5 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">description</span>
            AQAR Reports | वार्षिक गुणवत्ता आश्वासन रिपोर्ट
          </h3>
          <div className="space-y-3">
            {aqarDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex justify-between items-center text-xs"
              >
                <div>
                  <span className="font-bold text-on-surface block">
                    {language === "hi" ? doc.titleHi : doc.titleEn}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-semibold">Year: {doc.year}</span>
                </div>
                <a
                  href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 hover:scale-105 transition-all flex items-center gap-0.5 font-bold"
                >
                  <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                  PDF
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* NAAC / SSR Documents */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-primary border-b border-outline-variant/60 pb-2.5 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">task_alt</span>
            Self Study Report (SSR) & Feedback | स्व-अध्ययन रिपोर्ट
          </h3>
          <div className="space-y-3">
            {feedbackReports.map((doc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex justify-between items-center text-xs"
              >
                <div>
                  <span className="font-bold text-on-surface block truncate max-w-[280px]">
                    {language === "hi" ? doc.titleHi : doc.titleEn}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-semibold">Quality Metric</span>
                </div>
                <a
                  href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-600 hover:scale-105 transition-all flex items-center gap-0.5 font-bold"
                >
                  <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                  PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices and Distinctiveness */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-outline-variant/60 shadow-sm space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">workspace_premium</span>
          Institutional Distinctiveness & Best Practices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-on-surface-variant leading-relaxed pt-2">
          <div className="space-y-2 p-5 bg-surface-container-low rounded-2xl border border-outline-variant">
            <h4 className="font-bold text-primary text-base">Best Practice 1: Environment & Green Audit</h4>
            <p className="text-xs sm:text-sm">
              {language === "hi"
                ? "महाविद्यालय परिसर में सघन वृक्षारोपण और ऊर्जा संरक्षण हेतु सौर ऊर्जा उपकरणों को बढ़ावा देना। जल संचयन के लिए रूफ वाटर हार्वेस्टिंग सिस्टम की स्थापना।"
                : "Active campus afforestation campaigns paired with digital paperless administration efforts, waste management auditing, and rainwater harvesting initiatives."}
            </p>
          </div>
          <div className="space-y-2 p-5 bg-surface-container-low rounded-2xl border border-outline-variant">
            <h4 className="font-bold text-primary text-base">Institutional Distinctiveness: Rural Women Upliftment</h4>
            <p className="text-xs sm:text-sm">
              {language === "hi"
                ? "सारागांव क्षेत्र के दूरदराज के गांवों की अनुसूचित जनजाति/जाति एवं पिछड़े वर्ग की छात्राओं को निशुल्क कंप्यूटर प्रशिक्षण एवं करियर परामर्श प्रदान कर आत्मनिर्भर बनाना।"
                : "Providing career mentoring cells, local community-led skills sessions, and scholarship coordination for remote girls and reserved caste students in Chhattisgarh."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
