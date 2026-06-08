import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function StudentCorner() {
  const { notices, downloads, language, t } = useContext(AppContext);
  const [filterCategory, setFilterCategory] = useState("All");

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

          {/* NSS/NCC Activities */}
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/60 shadow-sm space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">volunteer_activism</span>
              NSS & Cultural Units
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              {language === "hi"
                ? "महाविद्यालय में राष्ट्रीय सेवा योजना (NSS) की एक सक्रिय इकाई संचालित है, जिसके तहत वृक्षारोपण, स्वास्थ्य शिविर, स्वच्छता अभियान और साक्षरता रैलियां आयोजित की जाती हैं। नवीन सत्र के प्रवेशार्थी इकाई समन्वयक डॉ. कमलेश चंद्र से संपर्क कर पंजीयन करा सकते हैं।"
                : "The college runs a highly active NSS unit promoting community welfare, health camps, tree plantation, and cleanliness drives. New students can enroll by contacting the NSS Programme Coordinator Dr. Kamlesh Chandra."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
